import { PropTypes } from 'react';

export const isComponent = PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]);

export const isImgSrcPropType = (props, propName, componentName) => {
  const potentialImgSrcProp = props[propName];
  if (potentialImgSrcProp) {
    const internalProps = Object.keys(potentialImgSrcProp);
    const isScale = /^(\d*[.])?\d+x$/;
    if (internalProps.every(isScale.test.bind(isScale))) {
      return;
    }
  }

  throw new Error(`${componentName} was not passed a valid image.src.`);
};

export const isImage = PropTypes.shape({
  src: isImgSrcPropType,
  alt: PropTypes.string,
});

export const isSectionArticles = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        tileImage: isImage.isRequired,
        toc: PropTypes.string,
      })
    ).isRequired,
  })
);
