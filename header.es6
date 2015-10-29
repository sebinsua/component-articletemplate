import React, { PropTypes } from 'react';
import classnames from 'classnames';

import {
  defaultGenerateClassNameList,
  isChildren,
} from './utils';

const ArticleHeaderContainer = ({ generateClassNameList = defaultGenerateClassNameList, children }) => (
  <header className={classnames(generateClassNameList('ArticleTemplate--header'))}>
    {children}
  </header>
);
ArticleHeaderContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: isChildren,
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
  children: isChildren,
};

export { ArticleHeaderContainer, ImageContainer };
