import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Rubric = ({ generateClassNameList, children }) => (
  <p
    className={classnames(
      generateClassNameList(`ArticleTemplate--rubric`),
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
      generateClassNameList: PropTypes.func,
      rubric: PropTypes.string,
    };
  }

  render() {
    const { generateClassNameList, rubric } = this.props;
    return (
      <Rubric generateClassNameList={generateClassNameList}>{rubric}</Rubric>
    );
  }
}
