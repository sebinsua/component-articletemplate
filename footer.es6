import React, { PropTypes } from 'react';

import { defaultGenerateClassNameList } from './utils';

function ArticleFooterContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <footer className={generateClassNameList('ArticleTemplate--footer').join(' ')}>
      {children}
    </footer>
  );
}
ArticleFooterContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export { ArticleFooterContainer };
