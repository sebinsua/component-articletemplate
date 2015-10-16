import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';

import { getSrcSet, ArticleHeader, ArticleFooter } from '../../template';
import ArticleBody from '../../body';

import variants from '..';
import { withVariantClassNameList } from '../../variantify';

const ArticleHeaderItem1 = withVariantClassNameList(variants)(({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
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
const ArticleHeaderItem2 = withVariantClassNameList(variants)(({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
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

export class WifHeader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      variantType: PropTypes.string,
      mainImage: PropTypes.object,
      sectionName: PropTypes.string,
      flytitle: PropTypes.string,
      title: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, variantType, mainImage, sectionName, flytitle, title } = this.props;
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
            {sectionName ? <Section>{sectionName}</Section> : ''}
            {flytitle ? <FlyTitle>{flytitle}</FlyTitle> : ''}
            {title ? <Title>{title}</Title> : ''}
          </ArticleHeader>
        </div>
      </div>
    );
  }
}

export const Rubric = withVariantClassNameList(variants)(({ getClassNameList, children }) => (
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
export class WifSubheader extends React.Component {
  static get propTypes() {
    return {
      variantType: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  render() {
    const { variantType, rubric } = this.props;
    return (
      <Rubric variantType={variantType}>{rubric}</Rubric>
    );
  }
}

const WifTabView = ({ getClassNameList, variantType, id, sections }) => {
  const notCurrentArticle = (article) => {
    const currentArticleId = id;
    return currentArticleId !== article.id;
  };

  const sectionNames = Object.keys(sections);
  const TabViewDefaultClassName = TabView.defaultClassName || 'TabView';
  return (
    <TabView
      variantType={variantType}
    >
      {sectionNames.map((title, key) => (
        <div title={title} key={key} itemScope itemType="http://schema.org/itemList">
          <div
            className={classnames(
              getClassNameList(`${TabViewDefaultClassName}--Views--Tint`)
            )}
          ></div>
          {sections[title].filter(notCurrentArticle).map((article, articleKey) => (
            <a key={articleKey} href={`/article/${article.id}/${article.attributes.slug}`} itemProp="url">
              <figure
                className={classnames(
                  getClassNameList(`${TabViewDefaultClassName}--View--Content`)
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

export class WifFooter extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      variantType: PropTypes.string,
      sections: PropTypes.object,
    };
  }

  render() {
    const { variantType } = this.props;
    return (
      <ArticleFooter variantType={this.props.variantType}>
        <WifTabView {...this.props} />
      </ArticleFooter>
    );
  }
}
