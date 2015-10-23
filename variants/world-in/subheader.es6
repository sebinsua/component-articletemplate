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
        <h2
          itemProp="byline"
          className={classnames(generateClassNameList('ArticleTemplate--byline'), ...extendedSubheaderItemClasses)}
        >
          TODO: Put byline in the data
        </h2>
        <h2
          itemProp="publishdate"
          className={classnames(generateClassNameList('ArticleTemplate--pubdate'),
                                ...extendedSubheaderItemClasses)}
        >
          TODO: Put publish date in the data
        </h2>
        <h2
          itemProp="section"
          className={classnames(generateClassNameList('ArticleTemplate--section-section'),
                                ...extendedSubheaderItemClasses)}
        >
          {sectionName}
        </h2>
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
        <h2
          itemProp="publishdate"
          className={classnames(generateClassNameList('ArticleTemplate--pubdate'),
                                ...extendedSubheaderItemClasses)}
        >
          TODO: Put publish date in the data
        </h2>
        <h2
          itemProp="section"
          className={classnames(generateClassNameList('ArticleTemplate--section-section'),
                                ...extendedSubheaderItemClasses)}
        >
          {sectionName}
        </h2>
      </ArticleSubheaderContainer>
    );
  }
}
