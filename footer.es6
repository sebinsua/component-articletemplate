import React from 'react';
import classnames from 'classnames';

export const ArticleFooterContainer = ({ generateClassNameList, children }) => (
  <footer className={classnames(generateClassNameList('ArticleTemplate--footer'))}>
    {children}
  </footer>
);
