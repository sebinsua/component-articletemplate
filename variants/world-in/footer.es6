import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleFooterContainer } from '../../footer';
import { defaultGenerateClassNameList } from '../../utils';

const Byline = ({ generateClassNameList = defaultGenerateClassNameList }) => (
  <h3
    className={classnames(
      generateClassNameList(`ArticleTemplate--byline`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp="byline"
  >
    Zanny Minton Beddoes (TODO: Put byline in the data)
  </h3>
);

const BylineDetails = ({ generateClassNameList = defaultGenerateClassNameList }) => (
  <span
    className={classnames(
      generateClassNameList(`ArticleTemplate--byline-details`),
      'gutter-l',
      'col-10'
    )}
    itemProp="bylinedetails"
  >
  business affairs editor, The Economist (TODO: Put byline details in the data)
  </span>
);

const BylineFooter = ({ generateClassNameList = defaultGenerateClassNameList }) => (
  <div
    className={classnames(
      generateClassNameList(`ArticleTemplate--byline-footer`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >
    <Byline generateClassNameList={generateClassNameList} />
    <BylineDetails generateClassNameList={generateClassNameList} />
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
        <BylineFooter generateClassNameList={generateClassNameList} />
      </ArticleFooterContainer>
    );
  }
}
