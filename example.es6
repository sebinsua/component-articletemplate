import React from 'react';
import ArticleTemplate from './index.es6';

import article from './test/data/article';
import sections from './test/data/sections';

// TODO: `tileimage` and some other properties are required to render the sections.
// TODO: At some point before data is passed in we should 404 if no article.
// TODO: Split the individual `render*()` methods within into their own components.

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
