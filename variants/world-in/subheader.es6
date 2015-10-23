/* eslint react/no-multi-comp: 0 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleSubheaderContainer } from '../../subheader';
import { defaultGenerateClassNameList } from '../../utils';

const extendedSubheaderItemClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
const Byline = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <h2
    itemProp="byline"
    className={classnames(generateClassNameList('ArticleTemplate--byline'), ...extendedSubheaderItemClasses)}
  >
    {children}
  </h2>
);
const PublishDate = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <h2
    itemProp="publishdate"
    className={classnames(generateClassNameList('ArticleTemplate--pubdate'), ...extendedSubheaderItemClasses)}
  >
    {children}
  </h2>
);
const Section = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <h2
    itemProp="section"
    className={classnames(generateClassNameList('ArticleTemplate--section-section'), ...extendedSubheaderItemClasses)}
  >
    {children}
  </h2>
);
export class WinSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName } = this.props;
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <Byline generateClassNameList={generateClassNameList}>TODO: Put byline in the data</Byline>
        <PublishDate generateClassNameList={generateClassNameList}>TODO: Put publish date in the data</PublishDate>
        <Section generateClassNameList={generateClassNameList}>{sectionName}</Section>
      </ArticleSubheaderContainer>
    );
  }
}
export class WinLeaderSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName } = this.props;
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <PublishDate generateClassNameList={generateClassNameList}>TODO: Put publish date in the data</PublishDate>
        <Section generateClassNameList={generateClassNameList}>{sectionName}</Section>
      </ArticleSubheaderContainer>
    );
  }
}
