import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleSubheaderContainer } from '../../subheader';

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
      <ArticleSubheaderContainer getClassNameList={getClassNameList}>
        <Byline getClassNameList={getClassNameList}>By-line to follow</Byline>
        <PublishDate getClassNameList={getClassNameList}>Publish date to follow</PublishDate>
        <Section getClassNameList={getClassNameList}>{sectionName}</Section>
      </ArticleSubheaderContainer>
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
      <ArticleSubheaderContainer getClassNameList={getClassNameList}>
        <PublishDate getClassNameList={getClassNameList}>Publish date to follow</PublishDate>
        <Section getClassNameList={getClassNameList}>{sectionName}</Section>
      </ArticleSubheaderContainer>
    );
  }
}
