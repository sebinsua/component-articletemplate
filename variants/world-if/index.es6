import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';

import { ArticleHeader, getSrcSet } from '../..';

import variants from '..';
import variantify from '../../variantify';

const WifArticleHeaderItem1 = variantify(variants)(({ getClassNameList, HeaderItemComponent = h1, className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      getClassNameList(className),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
));
const WifArticleHeaderItem2 = variantify(variants)(({ getClassNameList, HeaderItemComponent = h1, className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      getClassNameList(className),
      'margin-l-1',
      'gutter-l'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
));
const WifSection = ({ variantType, children }) => (
  <WifArticleHeaderItem2
    variantType={variantType}
    HeaderItemComponent={'h2'}
    className="ArticleTemplate--header-section"
    itemProp="articleSection"
  >
    {children}
  </WifArticleHeaderItem2>
);
const WifFlyTitle = ({ variantType, children }) => (
  <WifArticleHeaderItem1
    variantType={variantType}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </WifArticleHeaderItem1>
);
const WifTitle = ({ variantType, children }) => (
  <WifArticleHeaderItem1
    variantType={variantType}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </WifArticleHeaderItem1>
);

export const WifTabView = (props) => {
  const notCurrentArticle = (article) => {
    const currentArticleId = props.id;
    return currentArticleId !== article.id;
  };

  const sections = props.sections;
  const TabViewDefaultClassName = TabView.defaultClassName || 'TabView';
  return (
    <TabView
      variantType={props.variantType}
    >
      {Object.keys(sections).map((title, key) => (
        <div title={title} key={key} itemScope itemType="http://schema.org/itemList">
          <div
            className={classnames(
              props.getClassNameList(`${TabViewDefaultClassName}--Views--Tint`)
            )}
          ></div>
          {sections[title].filter(notCurrentArticle).map((article) => (
            <a href={`/article/${article.id}/${article.attributes.slug}`} itemProp="url">
              <figure
                className={classnames(
                  props.getClassNameList(`${TabViewDefaultClassName}--View--Content`)
                )}
              >
                <img
                  src={`${article.attributes.tileimage['1.0x']}`}
                  srcSet={getSrcSet(article.attributes.tileimage)}
                  alt={article.attributes.imagealt}
                  itemProp="image"
                />
                <figcaption itemProp="caption">{article.attributes.toc}</figcaption>
              </figure>
            </a>
          ))}
        </div>
      ))}
    </TabView>
  );
}

export const WifArticleHeader = ({ variantType, section, flytitle, title }) => {
  return (
    <ArticleHeader variantType={variantType}>
      {section ? <WifSection>{section}</WifSection> : ''}
      {flytitle ? <WifFlyTitle>{flytitle}</WifFlyTitle> : ''}
      {title ? <WifTitle>{title}</WifTitle> : ''}
    </ArticleHeader>
  );
}
