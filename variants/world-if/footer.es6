import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';

import { ArticleFooterContainer } from '../../footer';
import { defaultGenerateClassNameList, getSrcSet } from '../../utils';

const WifTabView = ({ generateClassNameList = defaultGenerateClassNameList, id, sections }) => {
  const notCurrentArticle = (article) => {
    const currentArticleId = id;
    return currentArticleId !== article.id;
  };

  const sectionNames = Object.keys(sections);
  const TabViewDefaultClassName = 'TabView';
  return (
    <TabView generateClassNameList={generateClassNameList}>
      {sectionNames.map((title, key) => (
        <div title={title} key={key} itemScope itemType="http://schema.org/itemList">
          <div
            className={classnames(
              generateClassNameList(`${TabViewDefaultClassName}--Views--Tint`)
            )}
          ></div>
          {sections[title].filter(notCurrentArticle).map((article, articleKey) => (
            <a key={articleKey} href={`/article/${article.id}/${article.attributes.slug}`} itemProp="url">
              <figure
                className={classnames(
                  generateClassNameList(`${TabViewDefaultClassName}--View--Content`)
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
      generateClassNameList: PropTypes.func,
      sections: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList } = this.props;
    return (
      <ArticleFooterContainer generateClassNameList={generateClassNameList}>
        <WifTabView {...this.props} />
      </ArticleFooterContainer>
    );
  }
}
