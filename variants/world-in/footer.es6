import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleFooterContainer } from '../../footer';

const BylineFooter = ({ generateClassNameList }) => (
  <div
    className={classnames(
      generateClassNameList(`ArticleTemplate--byline-footer`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >
    <h3
      className={classnames(
        generateClassNameList(`ArticleTemplate--byline`),
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
        generateClassNameList(`ArticleTemplate--byline-details`),
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
      generateClassNameList: PropTypes.func,
    };
  }

  render() {
    const { generateClassNameList } = this.props;
    return (
      <ArticleFooterContainer generateClassNameList={generateClassNameList}>
        <BylineFooter generateClassNameList={generateClassNameList} />
      </ArticleFooterContainer>
    );
  }
}
