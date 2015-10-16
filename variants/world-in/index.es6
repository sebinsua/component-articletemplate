import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { getSrcSet, ArticleHeader, ArticleSubheader, ArticleFooter } from '../../template';

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

          <ArticleHeader getClassNameList={getClassNameList}>
            { flytitle ? <FlyTitle getClassNameList={getClassNameList}>{flytitle}</FlyTitle> : '' }
            { title ? <Title getClassNameList={getClassNameList}>{title}</Title> : '' }
            { rubric ? <Rubric getClassNameList={getClassNameList}>{rubric}</Rubric> : '' }
          </ArticleHeader>
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
          <ArticleHeader getClassNameList={getClassNameList}>
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
          </ArticleHeader>
        </div>
      </div>
    );
  }
}

const ArticleSubheaderItem = ({ getClassNameList, SubheaderItemComponent = 'h2', className, itemProp, children }) => (
  <SubheaderItemComponent
    className={classnames(
      getClassNameList(className),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </SubheaderItemComponent>
);
const Byline = ({ getClassNameList, children }) => (
  <ArticleSubheaderItem
    getClassNameList={getClassNameList}
    SubheaderItemComponent={'h2'}
    className="ArticleTemplate--byline"
    itemProp="byline">
    {children}
  </ArticleSubheaderItem>
);
const PublishDate = ({ getClassNameList, children }) => (
  <ArticleSubheaderItem
    getClassNameList={getClassNameList}
    SubheaderItemComponent={'h2'}
    className="ArticleTemplate--pubdate"
    itemProp="publishdate">
    {children}
  </ArticleSubheaderItem>
);
const Section = ({ getClassNameList, children }) => (
  <ArticleSubheaderItem
    getClassNameList={getClassNameList}
    SubheaderItemComponent={'h2'}
    className="ArticleTemplate--section-section"
    itemProp="section">
    {children}
  </ArticleSubheaderItem>
);

export class WinSubheader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, sectionName } = this.props;
    return (
      <ArticleSubheader getClassNameList={getClassNameList}>
        <Byline getClassNameList={getClassNameList}>By-line to follow</Byline>
        <PublishDate getClassNameList={getClassNameList}>Publish date to follow</PublishDate>
        <Section getClassNameList={getClassNameList}>{sectionName}</Section>
      </ArticleSubheader>
    );
  }
}

export class WinLeaderSubheader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, sectionName } = this.props;
    return (
      <ArticleSubheader getClassNameList={getClassNameList}>
        <PublishDate getClassNameList={getClassNameList}>Publish date to follow</PublishDate>
        <Section getClassNameList={getClassNameList}>{sectionName}</Section>
      </ArticleSubheader>
    );
  }
}

const BylineFooter = ({ getClassNameList }) => (
  <div
    className={classnames(
      getClassNameList(`ArticleTemplate--byline-footer`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >
    <h3
      className={classnames(
        getClassNameList(`ArticleTemplate--byline`),
        'margin-l-1',
        'gutter-l',
        'col-10'
      )}
      itemProp="byline"
    >
      Zanny Minton Beddoes
    </h3>
    <span
      className={classnames(
        getClassNameList(`ArticleTemplate--byline-details`),
        'gutter-l',
        'col-10'
      )}
      itemProp="bylinedetails"
    >
    business affairs editor, The Economist
    </span>
  </div>
);

export class WinFooter extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
    };
  }

  render() {
    const { getClassNameList } = this.props;
    return (
      <ArticleFooter getClassNameList={getClassNameList}>
        <BylineFooter getClassNameList={getClassNameList} />
      </ArticleFooter>
    );
  }
}
