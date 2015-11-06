import React, { PropTypes } from 'react';

import { defaultGenerateClassNameList } from './utils';

function ArticleHeaderContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <header className={generateClassNameList('ArticleTemplate--header').join(' ')}>
      {children}
    </header>
  );
}
ArticleHeaderContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

function ImageContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <div className={generateClassNameList(`ArticleTemplate--imagecontainer`).join(' ')}>
      <div className={generateClassNameList(`ArticleTemplate--imagecontainer-inner`).join(' ')}>
        {children}
      </div>
    </div>
  );
}
ImageContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export { ArticleHeaderContainer, ImageContainer };
