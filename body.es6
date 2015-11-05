/* eslint react/no-danger: 0, id-match: 0 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import DefaultAnimatedPanel from '@economist/component-animatedpanel';
import DefaultGobbet from '@economist/component-wifgobbet';
import DefaultImageCaption from '@economist/component-imagecaption';
import DefaultVideo from '@economist/component-video';
import DefaultGallery from '@economist/component-gallery';

import { defaultGenerateClassNameList } from './variantify';

export function ArticleBodyContainer({ generateClassNameList, children }) {
  return (
    <section
      className={classnames(generateClassNameList('ArticleTemplate--section'))}
      itemProp="articleBody"
    >
      {children}
    </section>
  );
}
ArticleBodyContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

class ArticleBodyTemplate extends Component {

  static get propTypes() {
    return {
      variantName: PropTypes.string,
      generateClassNameList: PropTypes.func,
      components: PropTypes.object,
      content: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.object ])).isRequired,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
      components: {
        Image: 'img',
        Pullquote: 'blockquote',
        ArticleSubHead: 'h3',
        Gobbet: DefaultGobbet,
        ImageCaption: DefaultImageCaption,
        Video: DefaultVideo,
        AnimatedPanel: DefaultAnimatedPanel,
        Gallery: DefaultGallery,
      },
      content: [],
    };
  }

  renderContents = (generateClassNameList, variantName, components, contents = []) => {
    return contents.map((contentPiece, key) => {
      if (typeof contentPiece === 'string') {
        // `dangerouslySetInnerHTML` is used here to support `<a>`, `<em>`
        // `<strong>`, etc, tags within the paragraph strings.
        // See: https://github.com/economist-components/component-articletemplate/pull/11#discussion_r43002610
        return (
          <p key={key} dangerouslySetInnerHTML={{ __html: contentPiece }} />
        );
      }
      const SpecifiedComponent = components[contentPiece.component];
      if (!SpecifiedComponent) {
        throw new Error(`Unknown component ${contentPiece.component}`);
      }
      /* eslint-disable no-invalid-this */
      const children = this.renderContents(generateClassNameList, variantName, components, contentPiece.content);
      /* eslint-enable no-invalid-this */
      return (
        <SpecifiedComponent
          key={key}
          variantName={variantName}
          generateClassNameList={generateClassNameList}
          {...contentPiece.props}
        >
          {children}
        </SpecifiedComponent>
      );
    });
  }

  render() {
    const { variantName, generateClassNameList, content, components } = this.props;
    return (
      <ArticleBodyContainer generateClassNameList={generateClassNameList}>
        {this.renderContents(generateClassNameList, variantName, components, content)}
      </ArticleBodyContainer>
    );
  }

}

export default ArticleBodyTemplate;
