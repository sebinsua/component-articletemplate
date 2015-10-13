import React from 'react';
import ArticleTemplate from './index.es6';

import article from './test/data/article';
import sections from './test/data/sections';

export default (
  <ArticleTemplate
    id={article.id}
    slug={article.attributes.slug}
    title={article.attributes.title}
    flytitle={article.attributes.flytitle}
    rubric={article.attributes.rubric}
    section={article.attributes.section}
    mainImage={{
      src: article.attributes.mainimage,
      alt: article.attributes.imagealt
    }}
    content={article.attributes.content}
    sections={sections}
  />
);
