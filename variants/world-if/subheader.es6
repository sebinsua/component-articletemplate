import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Rubric = ({ getClassNameList, children }) => (
  <p
    className={classnames(
      getClassNameList(`ArticleTemplate--rubric`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp="description"
  >
    {children}
  </p>
);

// TODO: Currently we cannot place that in ArticleSubheader as that
//       already assumes margins, padding, etc.
export class WifSubheader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      rubric: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, rubric } = this.props;
    return (
      <Rubric getClassNameList={getClassNameList}>{rubric}</Rubric>
    );
  }
}
