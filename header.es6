import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './utils';

function ArticleHeaderContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <header className={classnames(generateClassNameList('ArticleTemplate--header'))}>
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
    <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer`))}>
      <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer-inner`))}>
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
