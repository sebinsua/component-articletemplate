import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ArticleBody from './body';
import { WifArticleHeader, WifTabView } from './variants/world-if';
import { WinArticleHeader, WinSubheader } from './variants/world-in';

import variants from './variants';
import variantify from './variantify';

export const ArticleHeader = variantify(variants)(({ getClassNameList, children }) => {
  return (
    <header className={classnames(getClassNameList('ArticleTemplate--header'))}>
      {children}
    </header>
  );
});

export const getSrcSet = (image) => Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');

@variantify(variants)
class ArticleTemplate extends React.Component {

  static get propTypes() {
    return {
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      flytitle: PropTypes.string.isRequired,
      rubric: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.array.isRequired,
      sections: PropTypes.object.isRequired,
    };
  }

  renderHeader = () => {
    // TODO: Simplify renderHeader.

    let image = null;
    if (this.props.mainImage) {
      image = (
        <img
          className={classnames(
            this.props.getClassNameList(`ArticleTemplate--image`)
          )}
          src={`${this.props.mainImage.src['1.0x']}`}
          srcSet={getSrcSet(this.props.mainImage.src)}
          alt={this.props.mainImage.alt}
          itemProp="image"
        />
      );
    }

    let innerHeader;
    if (this.props.variantType === 'world-if') {
      innerHeader = (
        <WifArticleHeader
          variantType={this.props.variantType}
          section={this.props.section}
          flytitle={this.props.flytitle}
          title={this.props.title}
        />
      );
    } else {
      innerHeader = (
        <WinArticleHeader
          variantType={this.props.variantType}
          flytitle={this.props.flytitle}
          title={this.props.title}
          rubric={this.props.rubric}
        />
      );
    }

    return (
      <div
        className={classnames(
          this.props.getClassNameList(`ArticleTemplate--imagecontainer`)
        )}
      >
        <div
          className={classnames(
            this.props.getClassNameList(`ArticleTemplate--imagecontainer-inner`)
          )}
        >

          {this.props.variantType !== 'world-in-predictors' ?
            image
          : ''}

          {innerHeader}
        </div>
      </div>
    );
  }

  renderSubheader = () => {
    if (this.props.variantType === 'world-if') {
      return (
        <p
          className={classnames(
            this.props.getClassNameList(`ArticleTemplate--rubric`),
            'margin-l-1',
            'gutter-l',
            'col-10'
          )}
          itemProp="description"
        >
          {this.props.rubric}
        </p>
      );
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
      return <WifTabView {...this.props} />;
    } else {
      return (
        <div
          className={classnames(
            this.props.getClassNameList(`ArticleTemplate--byline-footer`),
            'margin-l-1',
            'gutter-l',
            'col-10'
          )}
        >
          <h3
            className={classnames(
              this.props.getClassNameList(`ArticleTemplate--byline`),
              'margin-l-1',
              'gutter-l',
              'col-10'
            )}
            itemProp="byline"
          >
            Zanny Minton Beddoes
          </h3>
          <span
            className={classnames(
              this.props.getClassNameList(`ArticleTemplate--byline-details`),
              'gutter-l',
              'col-10'
            )}
            itemProp="bylinedetails"
          >
          business affairs editor, The Economist
          </span>
        </div>
      );
    }
  }

  render() {
    const title = this.props.title || this.props.slug;
    return (
      <article
        className={classnames(
          this.props.getClassNameList(`ArticleTemplate--container`)
        )}
        data-section={this.props.sectionName}
        itemScope
        itemType="http://schema.org/NewsArticle"
      >
        {this.renderHeader()}
        {this.renderSubheader()}
        {this.renderBody()}
        {this.renderFooter()}
      </article>
    );
  }
}

export default ArticleTemplate;
