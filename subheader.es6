import React, { PropTypes } from 'react';

import { defaultGenerateClassNameList } from './utils';

const extendedSubheaderClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
function ArticleSubheaderContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <header
      className={[ ...generateClassNameList('ArticleTemplate--subheader'), ...extendedSubheaderClasses ].join(' ')}
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
