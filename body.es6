import React, { PropTypes } from 'react';
import classnames from 'classnames';

import AnimatedPanel from '@economist/component-animatedpanel';
import Gobbet from '@economist/component-wifgobbet';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';
import Gallery from '@economist/component-gallery';

import variantify from './variantify';
const variantTypes = [
  'world-if',
  'world-in',
];

@variantify('ArticleTemplate--section', variantTypes, 'world-if')
class ArticleBody extends React.Component {

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

  // TODO: This should be removed because:
  // (1) It introduces global state.
  // (2) It is no longer accessible once behind a HOC.
  // (3) Now found within ArticleBody anyway...
  // static addComponentType(component, name) {
  //   articleComponent[name || component.name] = component;
  // }

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
    return (
      <section
        className={classnames(
          this.props.getVariantClassNames(),
        )}
        itemProp="articleBody"
      >
        {
          this.renderJSONContents(
            this.props.components,
            this.props.content,
            this.props.variantType
          )
        }
      </section>
    );
  }

}

export default ArticleBody;
