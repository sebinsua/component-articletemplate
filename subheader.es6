import React from 'react';
import classnames from 'classnames';

export const ArticleSubheaderContainer = ({ getClassNameList, children }) => (
  <header
    className={classnames(
      getClassNameList('ArticleTemplate--subheader'),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >
    {children}
  </header>
);
