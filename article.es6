import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { WifHeader as DefaultArticleHeader } from './variants/world-if/header';
import { WifSubheader as DefaultArticleSubheader } from './variants/world-if/subheader';
import { WifFooter as DefaultArticleFooter } from './variants/world-if/footer';
import DefaultArticleBody from './body';

import { passthroughComponentPropTypesOnly, defaultGenerateClassNameList } from './utils';
const defaultVariant = '';

const ArticleContainer = ({ generateClassNameList, sectionName, children }) => (
  <article
    className={classnames(generateClassNameList(`ArticleTemplate--container`))}
    data-section={sectionName}
    itemScope
    itemType="http://schema.org/NewsArticle"
  >
    {children}
  </article>
);
class ArticleTemplate extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      variantName: PropTypes.string,
      components: PropTypes.object,

      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      flytitle: PropTypes.string.isRequired,
      rubric: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        src: PropTypes.object.isRequired,
        alt: PropTypes.string,
      }).isRequired,
      content: PropTypes.array.isRequired,
      sectionName: PropTypes.string.isRequired,
      sections: PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      variantName: defaultVariant,
      generateClassNameList: defaultGenerateClassNameList,
      components: {
        ArticleHeader: DefaultArticleHeader,
        ArticleSubheader: DefaultArticleSubheader,
        ArticleBody: DefaultArticleBody,
        ArticleFooter: DefaultArticleFooter,
      },
    };
  }

  render() {
    const { variantName, generateClassNameList, sectionName, content } = this.props;
    const { ArticleHeader, ArticleSubheader, ArticleBody, ArticleFooter } = this.props.components;
    return (
      <ArticleContainer generateClassNameList={generateClassNameList} sectionName={sectionName}>
        <ArticleHeader {...passthroughComponentPropTypesOnly(ArticleHeader, this.props)} />
        <ArticleSubheader {...passthroughComponentPropTypesOnly(ArticleSubheader, this.props)} />
        <ArticleBody
          variantName={variantName}
          generateClassNameList={generateClassNameList}
          content={content}
        />
        <ArticleFooter {...passthroughComponentPropTypesOnly(ArticleFooter, this.props)} />
      </ArticleContainer>
    );
  }
}

export default ArticleTemplate;
