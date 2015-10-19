import React from 'react';
import classnames from 'classnames';

export const ArticleFooterContainer = ({ getClassNameList, children }) => (
  <footer className={classnames(getClassNameList('ArticleTemplate--footer'))}>
    {children}
  </footer>
);
