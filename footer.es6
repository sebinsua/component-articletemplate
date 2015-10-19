import React from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './utils';

export const ArticleFooterContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <footer className={classnames(generateClassNameList('ArticleTemplate--footer'))}>
    {children}
  </footer>
);
