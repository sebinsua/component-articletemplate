import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ArticleBody from './body';
import { WifArticleHeader, WifSubheader, WifFooter } from './variants/world-if';
import { WinArticleHeader, WinPredictorsArticleHeader, WinSubheader, WinFooter } from './variants/world-in';

import variants from './variants';
import variantify from './variantify';

export const ArticleHeader = variantify(variants)(({ getClassNameList, children }) => (
  <header className={classnames(getClassNameList('ArticleTemplate--header'))}>
    {children}
  </header>
));
export const ArticleSubheader = variantify(variants)(({ getClassNameList, children }) => (
  <header
    className={classnames(
      getClassNameList('ArticleTemplate--subheader'),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >
    {children}
  </header>
));
export const ArticleFooter = variantify(variants)(({ getClassNameList, children }) => (
  <footer className={classnames(getClassNameList('ArticleTemplate--footer'))}>
    {children}
  </footer>
));
export const ArticleContainer = variantify(variants)(({ getClassNameList, sectionName, children }) => (
  <article
    className={classnames(getClassNameList(`ArticleTemplate--container`))}
    data-section={sectionName}
    itemScope
    itemType="http://schema.org/NewsArticle"
  >
    {children}
  </article>
));

export const getSrcSet = (image) => Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');

// TODO: Next line can be removed once inner components exist.
@variantify(variants)
class ArticleTemplate extends React.Component {

  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      flytitle: PropTypes.string.isRequired,
      rubric: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        src: PropTypes.object.isRequired,
        alt: PropTypes.string,
      }).isRequired,
      content: PropTypes.array.isRequired,
      sections: PropTypes.object.isRequired,
    };
  }

  renderHeader = () => {
    if (this.props.variantType === 'world-if') {
      return (
        <WifArticleHeader
          getClassNameList={this.props.getClassNameList}
          variantType={this.props.variantType}
          mainImage={this.props.mainImage}
          section={this.props.section}
          flytitle={this.props.flytitle}
          title={this.props.title}
        />
      );
    } else if (this.props.variantType === 'world-in-predictors') {
      return (
        <WinPredictorsArticleHeader
          getClassNameList={this.props.getClassNameList}
          variantType={this.props.variantType}
          mainImage={this.props.mainImage}
          flytitle={this.props.flytitle}
          title={this.props.title}
          rubric={this.props.rubric}
        />
      );
    } else {
      return (
        <WinArticleHeader
          getClassNameList={this.props.getClassNameList}
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

  render() {
    return (
      <ArticleContainer
        variantType={this.props.variantType}
        sectionName={this.props.sectionName}
      >
        {this.renderHeader()}
        {this.renderSubheader()}
        {this.renderBody()}
        {this.renderFooter()}
      </ArticleContainer>
    );
  }
}

export default ArticleTemplate;
