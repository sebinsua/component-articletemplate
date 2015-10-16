import React, { PropTypes } from 'react';
import classnames from 'classnames';

import AnimatedPanel from '@economist/component-animatedpanel';
import Gobbet from '@economist/component-wifgobbet';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';
import Gallery from '@economist/component-gallery';

import variants from './variants';
import { withVariantClassNameList } from './variantify';

export const ArticleBodyContainer = withVariantClassNameList(variants)(({ getClassNameList, children }) => (
  <section
    className={classnames(getClassNameList('ArticleTemplate--section'))}
    itemProp="articleBody"
  >
    {children}
  </section>
));

class ArticleBody extends React.Component {

  static get propTypes() {
    return {
      variantType: PropTypes.string,
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

  renderJSONContents(components, contents = [], variantType) {
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
      const children = this.renderJSONContents(components, contentPiece.content, variantType);
      return (
        <Component
          key={key}
          variantType={variantType}
          {...contentPiece.props}
        >
          {children}
        </Component>
      );
    });
  }

  render() {
    const { variantType, content, components } = this.props;
    return (
      <ArticleBodyContainer variantType={variantType}>
        {
          this.renderJSONContents(
            components,
            content,
            variantType
          )
        }
      </ArticleBodyContainer>
    );
  }

}

export default ArticleBody;
