import React, { PropTypes } from 'react';
import classnames from 'classnames';

import variants from './variants';
import { withVariantClassNameList } from './variantify';

import passthroughComponentPropTypesOnly from './passthrough';

export const ArticleHeader = withVariantClassNameList(variants)(({ getClassNameList, children }) => (
  <header className={classnames(getClassNameList('ArticleTemplate--header'))}>
    {children}
  </header>
));
export const ArticleSubheader = withVariantClassNameList(variants)(({ getClassNameList, children }) => (
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
export const ArticleFooter = withVariantClassNameList(variants)(({ getClassNameList, children }) => (
  <footer className={classnames(getClassNameList('ArticleTemplate--footer'))}>
    {children}
  </footer>
));
export const ArticleContainer = withVariantClassNameList(variants)(({ getClassNameList, sectionName, children }) => (
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
@withVariantClassNameList(variants)
class ArticleTemplate extends React.Component {

  static get propTypes() {
    return {
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

  /*
  renderHeader = () => {
    if (this.props.variantType === 'world-if') {
      return (
        <WifHeader
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
        <WinPredictorsHeader
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
        <WinHeader
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
  */

  render() {
    const { variantType, sectionName } = this.props;
    const { ArticleHeader, ArticleSubheader, ArticleBody, ArticleFooter } = this.props.components;
    return (
      <ArticleContainer variantType={variantType} sectionName={sectionName}>
        <ArticleHeader {...passthroughComponentPropTypesOnly(ArticleHeader, this.props)} />
        <ArticleSubheader {...passthroughComponentPropTypesOnly(ArticleSubheader, this.props)} />
        <ArticleBody {...passthroughComponentPropTypesOnly(ArticleBody, this.props)} />
        <ArticleFooter {...passthroughComponentPropTypesOnly(ArticleFooter, this.props)} />
      </ArticleContainer>
    );
  }
}

export default ArticleTemplate;
