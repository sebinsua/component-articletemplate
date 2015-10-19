import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { getSrcSet, passthroughComponentPropTypesOnly } from './utils';

import {
  WifHeader as DefaultArticleHeader,
  WifSubheader as DefaultArticleSubheader,
  WifFooter as DefaultArticleFooter
} from './variants/world-if';
import DefaultArticleBody from './body';

const defaultVariantType = '';
const defaultGenerateClassNameList = (defaultClassName) => [defaultClassName];

export const ArticleContainer = ({ generateClassNameList, sectionName, children }) => (
  <article
    className={classnames(generateClassNameList(`ArticleTemplate--container`))}
    data-section={sectionName}
    itemScope
    itemType="http://schema.org/NewsArticle"
  >
    {children}
  </article>
);

class ArticleTemplate extends React.Component {

  static get propTypes() {
    return {
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
      variantType: defaultVariantType,
      generateClassNameList: defaultGenerateClassNameList,
      components: {
        ArticleHeader: DefaultArticleHeader,
        ArticleSubheader: DefaultArticleSubheader,
        ArticleBody: DefaultArticleBody,
        ArticleFooter: DefaultArticleBody,
      }
    };
  }

  /*
  renderHeader = () => {
    if (this.props.variantType === 'world-if') {
      return (
        <WifHeader
          generateClassNameList={this.props.generateClassNameList}
          variantType={this.props.variantType}
          mainImage={this.props.mainImage}
          section={this.props.section}
          flytitle={this.props.flytitle}
          title={this.props.title}
        />
      );
    } else if (this.props.variantType === 'world-in-predictors') {
      return (
        <WinPredictorsHeader
          generateClassNameList={this.props.generateClassNameList}
          variantType={this.props.variantType}
          mainImage={this.props.mainImage}
          flytitle={this.props.flytitle}
          title={this.props.title}
          rubric={this.props.rubric}
        />
      );
    } else {
      return (
        <WinHeader
          generateClassNameList={this.props.generateClassNameList}
          variantType={this.props.variantType}
          mainImage={this.props.mainImage}
          flytitle={this.props.flytitle}
          title={this.props.title}
          rubric={this.props.rubric}
        />
      );
    }
  }

  renderSubheader = () => {
    if (this.props.variantType === 'world-if') {
      return <WifSubheader {...this.props} />;
    } else if (this.props.variantType === 'world-in-leader') {
      return <WinLeaderSubheader {...this.props} />;
    } else {
      return <WinSubheader {...this.props} />;
    }
  }

  renderBody = () => {
    return (
      <ArticleBody
        variantType={this.props.variantType}
        content={this.props.content}
      />
    );
  }

  renderFooter = () => {
    if (this.props.variantType === 'world-if') {
      return <WifFooter {...this.props} />
    } else {
      return <WinFooter {...this.props} />;
    }
  }
  */

  render() {
    const { generateClassNameList, sectionName } = this.props;
    const { ArticleHeader, ArticleSubheader, ArticleBody, ArticleFooter } = this.props.components;
    return (
      <ArticleContainer generateClassNameList={generateClassNameList} sectionName={sectionName}>
        <ArticleHeader {...passthroughComponentPropTypesOnly(ArticleHeader, this.props)} />
        <ArticleSubheader {...passthroughComponentPropTypesOnly(ArticleSubheader, this.props)} />
        <ArticleBody {...passthroughComponentPropTypesOnly(ArticleBody, this.props)} />
        <ArticleFooter {...passthroughComponentPropTypesOnly(ArticleFooter, this.props)} />
      </ArticleContainer>
    );
  }
}

export default ArticleTemplate;
