import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { WifHeader as DefaultArticleHeader } from './variants/world-if/header';
import { WifSubheader as DefaultArticleSubheader } from './variants/world-if/subheader';
import { WifFooter as DefaultArticleFooter } from './variants/world-if/footer';
import DefaultArticleBody from './body';

import { passthroughComponentPropTypesOnly } from './utils';
import { defaultGenerateClassNameList } from './variantify';
import { isComponent, isImage, isSectionArticles } from './proptypes';

function ArticleContainer({ generateClassNameList, sectionName, children }) {
  return (
    <article
      className={classnames(generateClassNameList(`ArticleTemplate--container`))}
      data-section={sectionName}
      itemScope
      itemType="http://schema.org/NewsArticle"
    >
      {children}
    </article>
  );
}
ArticleContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  sectionName: PropTypes.string,
  children: PropTypes.node,
};

const defaultVariant = '';
class ArticleTemplate extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      variantName: PropTypes.string,
      components: PropTypes.shape({
        ArticleHeader: isComponent,
        ArticleSubheader: isComponent,
        ArticleBody: isComponent,
        ArticleFooter: isComponent,
      }),

      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      flytitle: PropTypes.string.isRequired,
      rubric: PropTypes.string.isRequired,
      mainImage: isImage.isRequired,
      content: PropTypes.array.isRequired,
      sectionName: PropTypes.string.isRequired,
      sections: isSectionArticles,
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
      sections: [],
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
