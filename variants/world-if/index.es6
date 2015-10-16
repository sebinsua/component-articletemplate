import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';

import { getSrcSet, ArticleHeader, ArticleFooter } from '../../template';
import ArticleBody from '../../body';

const ArticleHeaderItem1 = ({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
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
);
const ArticleHeaderItem2 = ({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
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
);
const Section = ({ getClassNameList, children }) => (
  <ArticleHeaderItem2
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h2'}
    className="ArticleTemplate--header-section"
    itemProp="articleSection"
  >
    {children}
  </ArticleHeaderItem2>
);
const FlyTitle = ({ getClassNameList, children }) => (
  <ArticleHeaderItem1
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem1>
);
const Title = ({ getClassNameList, children }) => (
  <ArticleHeaderItem1
    getClassNameList={getClassNameList}
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
      mainImage: PropTypes.object,
      sectionName: PropTypes.string,
      flytitle: PropTypes.string,
      title: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, mainImage, sectionName, flytitle, title } = this.props;
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

          <ArticleHeader getClassNameList={getClassNameList}>
            {sectionName ? <Section>{sectionName}</Section> : ''}
            {flytitle ? <FlyTitle>{flytitle}</FlyTitle> : ''}
            {title ? <Title>{title}</Title> : ''}
          </ArticleHeader>
        </div>
      </div>
    );
  }
}

export const Rubric = ({ getClassNameList, children }) => (
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
);

// TODO: Currently we cannot place that in ArticleSubheader as that
//       already assumes margins, padding, etc.
export class WifSubheader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      rubric: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, rubric } = this.props;
    return (
      <Rubric getClassNameList={getClassNameList}>{rubric}</Rubric>
    );
  }
}

const WifTabView = ({ getClassNameList, id, sections }) => {
  const notCurrentArticle = (article) => {
    const currentArticleId = id;
    return currentArticleId !== article.id;
  };

  const sectionNames = Object.keys(sections);
  const TabViewDefaultClassName = TabView.defaultClassName || 'TabView';
  return (
    <TabView getClassNameList={getClassNameList}>
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
      sections: PropTypes.object,
    };
  }

  render() {
    const { getClassNameList } = this.props;
    return (
      <ArticleFooter getClassNameList={getClassNameList}>
        <WifTabView {...this.props} />
      </ArticleFooter>
    );
  }
}
