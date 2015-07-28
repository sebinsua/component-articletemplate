import React from 'react';
import ArticleTemplate from './index.es6';
import WorldIfContent from '@economist/world-if-assets';

for (const article of WorldIfContent.data[0].relationships.posts.data) {
  ArticleTemplate.store.add(article);
}

export default (
  <ArticleTemplate id="7"/>
);
