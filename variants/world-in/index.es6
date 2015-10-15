import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ArticleHeader } from '../..';

import variants from '..';
import variantify from '../../variantify';

const ArticleHeaderItem = variantify(variants)(({ getClassNameList, HeaderItemComponent = h1, className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      getClassNameList(className),
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
));
const FlyTitle = ({ variantType, children }) => (
  <ArticleHeaderItem
    variantType={variantType}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem>
);
const Title = ({ variantType, children }) => (
  <ArticleHeaderItem
    variantType={variantType}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </ArticleHeaderItem>
);
const Rubric = ({ variantType, children }) => (
  <ArticleHeaderItem
    variantType={variantType}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--rubric"
    itemProp="rubric">
    {children}
  </ArticleHeaderItem>
);

export const WinArticleHeader = ({ variantType, flytitle, title, rubric }) => {
  return (
    <ArticleHeader variantType={variantType}>
      { flytitle ? <FlyTitle variantType={variantType}>{flytitle}</FlyTitle> : '' }
      { title ? <Title variantType={variantType}>{title}</Title> : '' }
      { rubric ? <Rubric variantType={variantType}>{rubric}</Rubric> : '' }
    </ArticleHeader>
  );
};
export const WinSubheader = (props) => {
  return (
    <header
      className={classnames(
        props.getClassNameList(`ArticleTemplate--subheader`),
        'margin-l-1',
        'gutter-l',
        'col-10'
      )}
    >
      {props.variantType !== 'world-in-leader' ?
        <h2
          className={classnames(
            props.getClassNameList(`ArticleTemplate--byline`),
            'margin-l-1',
            'gutter-l',
            'col-10'
          )}
          itemProp="byline"
        >
          By-line to follow
        </h2> : ''}

        <h2
          className={classnames(
            props.getClassNameList(`ArticleTemplate--pubdate`),
            'margin-l-1',
            'gutter-l',
            'col-10'
          )}
          itemProp="publishdate"
        >
          Publish date to follow
        </h2>

        <h2
          className={classnames(
            props.getClassNameList(`ArticleTemplate--section-section`),
            'margin-l-1',
            'gutter-l',
            'col-10'
          )}
          itemProp="section"
        >
          {props.section}
        </h2>
    </header>
  );
};
