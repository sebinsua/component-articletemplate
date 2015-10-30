import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './utils';

const ArticleFooterContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <footer className={classnames(generateClassNameList('ArticleTemplate--footer'))}>
    {children}
  </footer>
);
ArticleFooterContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export { ArticleFooterContainer };
