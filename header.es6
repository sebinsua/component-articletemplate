import React from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './utils';

export const ArticleHeaderContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <header className={classnames(generateClassNameList('ArticleTemplate--header'))}>
    {children}
  </header>
);

export const ImageContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer`))}>
    <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer-inner`))}>
      {children}
    </div>
  </div>
);
