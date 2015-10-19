import React, { PropTypes } from 'react';
import classnames from 'classnames';

import AnimatedPanel from '@economist/component-animatedpanel';
import Gobbet from '@economist/component-wifgobbet';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';
import Gallery from '@economist/component-gallery';

function renderJSONContents(components, contents = [], variantType, generateClassNameList) {
  return contents.map((contentPiece, key) => {
    if (typeof contentPiece === 'string') {
      return (
        <p key={key} dangerouslySetInnerHTML={{ __html: contentPiece }} />
      );
    }
    const Component = components[contentPiece.component];
    if (!Component) {
      throw new Error('Unknown component ' + contentPiece.component);
    }
    const children = renderJSONContents(components, contentPiece.content, variantType, generateClassNameList);
    return (
      <Component
        key={key}
        generateClassNameList={generateClassNameList}
        variantType={variantType}
        {...contentPiece.props}
      >
        {children}
      </Component>
    );
  });
}

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
      content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
    };
  }

  static get defaultProps() {
    return {
      components: {
        Image: 'img',
        Pullquote: 'blockquote',
        ArticleSubHead: 'h3',
        Gobbet,
        ImageCaption,
        Video,
        AnimatedPanel,
        Gallery,
      },
    };
  }

  render() {
    const { variantType, generateClassNameList, content, components } = this.props;
    return (
      <ArticleBodyContainer generateClassNameList={generateClassNameList}>
        {
          renderJSONContents(
            components,
            content,
            variantType,
            generateClassNameList
          )
        }
      </ArticleBodyContainer>
    );
  }

}

export default ArticleBodyTemplate;
