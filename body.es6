/* eslint react/no-danger: 0, id-match: 0 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import DefaultAnimatedPanel from '@economist/component-animatedpanel';
import DefaultGobbet from '@economist/component-wifgobbet';
import DefaultImageCaption from '@economist/component-imagecaption';
import DefaultVideo from '@economist/component-video';
import DefaultGallery from '@economist/component-gallery';

import { defaultGenerateClassNameList } from './utils';

export const ArticleBodyContainer = ({ generateClassNameList, children }) => (
  <section
    className={classnames(generateClassNameList('ArticleTemplate--section'))}
    itemProp="articleBody"
  >
    {children}
  </section>
);
class ArticleBodyTemplate extends React.Component {

  static get propTypes() {
    return {
      variantType: PropTypes.string,
      generateClassNameList: PropTypes.func,
      components: PropTypes.object,
      content: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.object ])),
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
    };
  }

  renderContents = (generateClassNameList, variantType, components, contents = []) => {
    return contents.map((contentPiece, key) => {
      if (typeof contentPiece === 'string') {
        return (
          <p key={key} dangerouslySetInnerHTML={{ __html: contentPiece }} />
        );
      }
      const Component = components[contentPiece.component];
      if (!Component) {
        throw new Error(`Unknown component ${contentPiece.component}`);
      }
      /* eslint no-invalid-this: 0 */
      const children = this.renderContents(generateClassNameList, variantType, components, contentPiece.content);
      return (
        <Component
          key={key}
          variantType={variantType}
          generateClassNameList={generateClassNameList}
          {...contentPiece.props}
        >
          {children}
        </Component>
      );
    });
  }

  render() {
    const { variantType, generateClassNameList, content, components } = this.props;
    return (
      <ArticleBodyContainer generateClassNameList={generateClassNameList}>
        {this.renderContents(generateClassNameList, variantType, components, content)}
      </ArticleBodyContainer>
    );
  }

}

export default ArticleBodyTemplate;
