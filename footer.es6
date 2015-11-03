import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './variantify';

function ArticleFooterContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <footer className={classnames(generateClassNameList('ArticleTemplate--footer'))}>
      {children}
    </footer>
  );
}
ArticleFooterContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export { ArticleFooterContainer };
