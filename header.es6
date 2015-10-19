import React from 'react';
import classnames from 'classnames';

export const ArticleHeaderContainer = ({ generateClassNameList, children }) => (
  <header className={classnames(generateClassNameList('ArticleTemplate--header'))}>
    {children}
  </header>
);
