import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleHeaderContainer, ImageContainer } from '../../header';
import { defaultGenerateClassNameList, getSrcSet } from '../../utils';

const extendedHeaderItemClasses = [
  'gutter-l',
  'col-10',
];

export class WinHeader extends React.Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;

    let flytitleEl, titleEl, rubricEl, mainImageEl;
    if (flytitle) {
      flytitleEl = <h1 itemProp="headline" className={classnames(generateClassNameList("ArticleTemplate--flytitle"), ...extendedHeaderItemClasses)}>
        {flytitle}
      </h1>
    }
    if (title) {
      titleEl = <h1 itemProp="alternativeHeadline" className={classnames(generateClassNameList("ArticleTemplate--title"), ...extendedHeaderItemClasses)}>
        {title}
      </h1>
    }
    if (rubric) {
      rubricEl = <h3 itemProp="rubric" className={classnames(generateClassNameList("ArticleTemplate--rubric"), ...extendedHeaderItemClasses)}>
        {rubric}
      </h3>
    }
    if (mainImage) {
      mainImageEl = <img
        className={classnames(generateClassNameList(`ArticleTemplate--image`))}
        src={`${mainImage.src['1.0x']}`}
        srcSet={getSrcSet(mainImage.src)}
        alt={mainImage.alt}
        itemProp="image"
      />
    }

    return (
      <ImageContainer generateClassNameList={generateClassNameList}>
        {mainImageEl}

        <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
          {flytitleEl}
          {titleEl}
          {rubricEl}
        </ArticleHeaderContainer>
      </ImageContainer>
    );
  }
}

export class WinPredictorsHeader extends React.Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.rubric,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;

    let flytitleEl, titleEl, rubricEl, mainImageEl;
    if (flytitle) {
      flytitleEl = <h1 itemProp="headline" className={classnames(generateClassNameList("ArticleTemplate--flytitle"), ...extendedHeaderItemClasses)}>
        {flytitle}
      </h1>
    }
    if (title) {
      titleEl = <h1 itemProp="alternativeHeadline" className={classnames(generateClassNameList("ArticleTemplate--title"), ...extendedHeaderItemClasses)}>
        {title}
      </h1>
    }
    if (rubric) {
      rubricEl = <h3 itemProp="rubric" className={classnames(generateClassNameList("ArticleTemplate--rubric"), ...extendedHeaderItemClasses)}>
        {rubric}
      </h3>
    }
    if (mainImage) {
      mainImageEl = (
        <ImageContainer generateClassNameList={generateClassNameList}>
          <img
            className={classnames(generateClassNameList(`ArticleTemplate--image`))}
            src={`${mainImage.src['1.0x']}`}
            srcSet={getSrcSet(mainImage.src)}
            alt={mainImage.alt}
            itemProp="image"
          />
        </ImageContainer>
      );
    }

    return (
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {flytitleEl}
        {titleEl}
        {rubricEl}
        {mainImageEl}
      </ArticleHeaderContainer>
    );
  }
}
