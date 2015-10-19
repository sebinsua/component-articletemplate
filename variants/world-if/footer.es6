import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';

import { getSrcSet } from '../../utils';

import { ArticleFooterContainer } from '../../footer';

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
      <ArticleFooterContainer getClassNameList={getClassNameList}>
        <WifTabView {...this.props} />
      </ArticleFooterContainer>
    );
  }
}
