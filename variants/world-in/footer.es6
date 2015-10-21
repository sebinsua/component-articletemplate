import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleFooterContainer } from '../../footer';
import { defaultGenerateClassNameList } from '../../utils';

const extendedFooterBylineClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
const extendedFooterBylineDetailsClasses = [
  'gutter-l',
  'col-10',
];
const BylineFooterContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <div className={classnames(generateClassNameList(`ArticleTemplate--byline-footer`), ...extendedFooterBylineClasses)}>
    {children}
  </div>
);
export class WinFooter extends React.Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList } = this.props;
    return (
      <ArticleFooterContainer generateClassNameList={generateClassNameList}>
        <BylineFooterContainer generateClassNameList={generateClassNameList}>
          <h3
            itemProp="byline"
            className={classnames(generateClassNameList(`ArticleTemplate--byline`), ...extendedFooterBylineClasses)}
          >
            Zanny Minton Beddoes (TODO: Put byline in the data)
          </h3>
          <span
            itemProp="bylinedetails"
            className={classnames(generateClassNameList(`ArticleTemplate--byline-details`),
                                  ...extendedFooterBylineDetailsClasses)}
          >
            business affairs editor, The Economist (TODO: Put byline details in the data)
          </span>
        </BylineFooterContainer>
      </ArticleFooterContainer>
    );
  }
}
