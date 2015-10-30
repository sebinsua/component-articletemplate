import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './utils';

const ArticleHeaderContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <header className={classnames(generateClassNameList('ArticleTemplate--header'))}>
    {children}
  </header>
);
ArticleHeaderContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

const ImageContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer`))}>
    <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer-inner`))}>
      {children}
    </div>
  </div>
);
ImageContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export { ArticleHeaderContainer, ImageContainer };
