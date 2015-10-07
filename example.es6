import React from 'react';
import ArticleTemplate from './index.es6';
import WorldIfContent from '@economist/world-if-assets';

import article from './test/data/article';

// ArticleTemplate.store.setContent(WorldIfContent);

/*
const sections = articleStore
  .getWhere((item) => item.id !== this.props.id)
  .reduce((total, article) => {
    const section = article.attributes.section;
    total[section] = total[section] || [];
    total[section].push(article);
    return total;
  }, {});
*/

const sections = {};

export default (
  <ArticleTemplate
    article={article}
    sections={sections}
  />
);
