import React from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './utils';

export const ArticleSubheaderContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
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
