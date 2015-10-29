import React, { PropTypes } from 'react';
import classnames from 'classnames';

import {
  defaultGenerateClassNameList,
  isChildren,
} from './utils';

const ArticleSubheaderContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <header
    className={classnames(
      generateClassNameList('ArticleTemplate--subheader'),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >
    {children}
  </header>
);
ArticleSubheaderContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: isChildren,
};

export { ArticleSubheaderContainer };
