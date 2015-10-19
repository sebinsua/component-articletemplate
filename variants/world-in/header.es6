import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { getSrcSet } from '../../utils';
import { ArticleHeaderContainer } from '../../header';

const ArticleHeaderItem = ({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      getClassNameList(className),
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
);
const FlyTitle = ({ getClassNameList, children }) => (
  <ArticleHeaderItem
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem>
);
const Title = ({ getClassNameList, children }) => (
  <ArticleHeaderItem
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </ArticleHeaderItem>
);
const Rubric = ({ getClassNameList, children }) => (
  <ArticleHeaderItem
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--rubric"
    itemProp="rubric">
    {children}
  </ArticleHeaderItem>
);

export class WinHeader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, mainImage, flytitle, title, rubric } = this.props;
    return (
      <div className={classnames(getClassNameList(`ArticleTemplate--imagecontainer`))}>
        <div className={classnames(getClassNameList(`ArticleTemplate--imagecontainer-inner`))}>
          {mainImage ?
            <img
              className={classnames(
                getClassNameList(`ArticleTemplate--image`)
              )}
              src={`${mainImage.src['1.0x']}`}
              srcSet={getSrcSet(mainImage.src)}
              alt={mainImage.alt}
              itemProp="image"
            />
          : ''}

          <ArticleHeaderContainer getClassNameList={getClassNameList}>
            { flytitle ? <FlyTitle getClassNameList={getClassNameList}>{flytitle}</FlyTitle> : '' }
            { title ? <Title getClassNameList={getClassNameList}>{title}</Title> : '' }
            { rubric ? <Rubric getClassNameList={getClassNameList}>{rubric}</Rubric> : '' }
          </ArticleHeaderContainer>
        </div>
      </div>
    );
  }
}

export class WinPredictorsHeader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.rubric,
    };
  }

  render() {
    const { getClassNameList, mainImage, flytitle, title, rubric } = this.props;
    return (
      <div className={classnames(getClassNameList(`ArticleTemplate--imagecontainer`))}>
        <div className={classnames(getClassNameList(`ArticleTemplate--imagecontainer-inner`))}>
          <ArticleHeaderContainer getClassNameList={getClassNameList}>
            { flytitle ? <FlyTitle getClassNameList={getClassNameList}>{flytitle}</FlyTitle> : '' }
            {mainImage ?
              <img
                className={classnames(getClassNameList(`ArticleTemplate--image`))}
                src={`${mainImage.src['1.0x']}`}
                srcSet={getSrcSet(mainImage.src)}
                alt={mainImage.alt}
                itemProp="image"
              />
            : ''}
            { title ? <Title getClassNameList={getClassNameList}>{title}</Title> : '' }
            { rubric ? <Rubric getClassNameList={getClassNameList}>{rubric}</Rubric> : '' }
          </ArticleHeaderContainer>
        </div>
      </div>
    );
  }
}
