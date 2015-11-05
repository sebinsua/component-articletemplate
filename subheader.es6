import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from './variantify';

function ArticleSubheaderContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
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
}
ArticleSubheaderContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export { ArticleSubheaderContainer };
