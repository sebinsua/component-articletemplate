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
    mainImage={article.attributes.mainimage}
    imageAlt={article.attributes.imagealt}
    content={article.attributes.content}
    sections={sections}
  />
);
