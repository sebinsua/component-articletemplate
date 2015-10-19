import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from '../../utils';

const Rubric = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
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

export class WifSubheader extends React.Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      rubric: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, rubric } = this.props;
    return (
      <Rubric generateClassNameList={generateClassNameList}>{rubric}</Rubric>
    );
  }
}
