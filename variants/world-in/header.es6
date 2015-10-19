import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleHeaderContainer, ImageContainer } from '../../header';
import { defaultGenerateClassNameList, getSrcSet } from '../../utils';

const ArticleHeaderItem = ({ generateClassNameList = defaultGenerateClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      generateClassNameList(className),
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
);
const FlyTitle = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <ArticleHeaderItem
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem>
);
const Title = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <ArticleHeaderItem
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </ArticleHeaderItem>
);
const Rubric = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <ArticleHeaderItem
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--rubric"
    itemProp="rubric">
    {children}
  </ArticleHeaderItem>
);

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
    return (
      <ImageContainer generateClassNameList={generateClassNameList}>
        {mainImage ?
          <img
            className={classnames(
              generateClassNameList(`ArticleTemplate--image`)
            )}
            src={`${mainImage.src['1.0x']}`}
            srcSet={getSrcSet(mainImage.src)}
            alt={mainImage.alt}
            itemProp="image"
          />
        : ''}

        <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
          { flytitle ? <FlyTitle generateClassNameList={generateClassNameList}>{flytitle}</FlyTitle> : '' }
          { title ? <Title generateClassNameList={generateClassNameList}>{title}</Title> : '' }
          { rubric ? <Rubric generateClassNameList={generateClassNameList}>{rubric}</Rubric> : '' }
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
    return (
      <ImageContainer generateClassNameList={generateClassNameList}>
        <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
          { flytitle ? <FlyTitle generateClassNameList={generateClassNameList}>{flytitle}</FlyTitle> : '' }
          {mainImage ?
            <img
              className={classnames(generateClassNameList(`ArticleTemplate--image`))}
              src={`${mainImage.src['1.0x']}`}
              srcSet={getSrcSet(mainImage.src)}
              alt={mainImage.alt}
              itemProp="image"
            />
          : ''}
          { title ? <Title generateClassNameList={generateClassNameList}>{title}</Title> : '' }
          { rubric ? <Rubric generateClassNameList={generateClassNameList}>{rubric}</Rubric> : '' }
        </ArticleHeaderContainer>
      </ImageContainer>
    );
  }
}
