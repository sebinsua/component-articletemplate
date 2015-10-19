import React from 'react';
import classnames from 'classnames';

export const ArticleHeaderContainer = ({ getClassNameList, children }) => (
  <header className={classnames(getClassNameList('ArticleTemplate--header'))}>
    {children}
  </header>
);
