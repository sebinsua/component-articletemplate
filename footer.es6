import React, { PropTypes } from 'react';
import classnames from 'classnames';

import {
  defaultGenerateClassNameList,
  isChildren,
} from './utils';

const ArticleFooterContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <footer className={classnames(generateClassNameList('ArticleTemplate--footer'))}>
    {children}
  </footer>
);
ArticleFooterContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: isChildren,
};

export { ArticleFooterContainer };
