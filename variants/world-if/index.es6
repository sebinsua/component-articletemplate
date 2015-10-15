import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';

import { ArticleHeader, ArticleFooter, getSrcSet } from '../..';

import variants from '..';
import variantify from '../../variantify';

const ArticleHeaderItem1 = variantify(variants)(({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
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
const ArticleHeaderItem2 = variantify(variants)(({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
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
const Section = ({ variantType, children }) => (
  <ArticleHeaderItem2
    variantType={variantType}
    HeaderItemComponent={'h2'}
    className="ArticleTemplate--header-section"
    itemProp="articleSection"
  >
    {children}
  </ArticleHeaderItem2>
);
const FlyTitle = ({ variantType, children }) => (
  <ArticleHeaderItem1
    variantType={variantType}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem1>
);
const Title = ({ variantType, children }) => (
  <ArticleHeaderItem1
    variantType={variantType}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </ArticleHeaderItem1>
);

export const WifArticleHeader = ({ getClassNameList, variantType, mainImage, section, flytitle, title }) => {
  return (
    <div
      className={classnames(
        getClassNameList(`ArticleTemplate--imagecontainer`)
      )}
    >
      <div
        className={classnames(
          getClassNameList(`ArticleTemplate--imagecontainer-inner`)
        )}
      >

        {mainImage ?
          <img
            className={classnames(
              getClassNameList(`ArticleTemplate--image`)
            )}
            src={`${mainImage.src['1.0x']}`}
            srcSet={getSrcSet(mainImage.src)}
            alt={mainImage.alt}
            itemProp="image"
          />
        : ''}

        <ArticleHeader variantType={variantType}>
          {section ? <Section>{section}</Section> : ''}
          {flytitle ? <FlyTitle>{flytitle}</FlyTitle> : ''}
          {title ? <Title>{title}</Title> : ''}
        </ArticleHeader>
      </div>
    </div>
  );
};

export const Rubric = variantify(variants)(({ getClassNameList, children }) => (
  <p
    className={classnames(
      getClassNameList(`ArticleTemplate--rubric`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp="description"
  >
    {children}
  </p>
));

// TODO: Currently we cannot place that in ArticleSubheader as that
//       already assumes margins, padding, etc.
export const WifSubheader = ({ variantType, rubric }) => (
  <Rubric variantType={variantType}>{rubric}</Rubric>
);

const WifTabView = (props) => {
  const notCurrentArticle = (article) => {
    const currentArticleId = props.id;
    return currentArticleId !== article.id;
  };

  const sections = props.sections;
  const sectionNames = Object.keys(sections);
  const TabViewDefaultClassName = TabView.defaultClassName || 'TabView';
  return (
    <TabView
      variantType={props.variantType}
    >
      {sectionNames.map((title, key) => (
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
};

export const WifFooter = (props) => (
  <ArticleFooter variantType={props.variantType}>
    <WifTabView {...props} />
  </ArticleFooter>
);
