import React from 'react';
import ArticleTemplate from './variants/world-in';

import article from './test/data/article';
import sections from './test/data/sections';

export default (
  <ArticleTemplate
    variantType={'world-in-portrait'}
    id={article.id}
    slug={article.attributes.slug}
    title={article.attributes.title}
    flytitle={article.attributes.flytitle}
    rubric={article.attributes.rubric}
    mainImage={{
      src: article.attributes.mainimage,
      alt: article.attributes.imagealt,
    }}
    content={article.attributes.content}
    sectionName={article.attributes.section}
    sections={sections}
  />
);
