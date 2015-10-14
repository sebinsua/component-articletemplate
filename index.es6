import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';

import ArticleBody from './body';

import variants from './variants';
import variantify from './variantify';

const getSrcSet = (image) => Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');

const WinSubheader = (props) => {

  return <header
    className={classnames(
      props.getClassNameList(`${props.className}--subheader`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >

{props.variantType !== 'world-if' ?
<div>

{props.variantType !== 'world-in-leader' ?
    <h2
      className={classnames(
        props.getClassNameList(`${props.className}--byline`),
        'margin-l-1',
        'gutter-l',
        'col-10'
      )}
      itemProp="byline"
    >
      By-line to follow
    </h2>
        : ''}

    <h2
      className={classnames(
        props.getClassNameList(`${props.className}--pubdate`),
        'margin-l-1',
        'gutter-l',
        'col-10'
      )}
      itemProp="publishdate"
    >
      Publish date to follow
    </h2>

    <h2
      className={classnames(
        props.getClassNameList(`${props.className}--section-section`),
        'margin-l-1',
        'gutter-l',
        'col-10'
      )}
      itemProp="section"
    >
      {props.section}
    </h2>
</div>
      : ''}


  </header>
};

const WinHeader = ({ getClassNameList, className, flytitle, title, rubric }) => {
  let flytitleEl = null;
  let titleEl = null;
  let rubricEl = null;
  if (flytitle) {
    flytitleEl = (
      <h1
        className={classnames(
          getClassNameList(`${className}--flytitle`),
          'gutter-l',
          'col-10'
        )}
        itemProp="headline"
      >
        {flytitle}
      </h1>
    );
  }
  if (title) {
    titleEl = (
      <h3
        className={classnames(
          getClassNameList(`${className}--title`),
          'gutter-l',
          'col-10'
        )}
        itemProp="alternativeHeadline"
      >
        {title}
      </h3>
    );
  }
  if (rubric) {
    rubricEl = (
      <h3
        className={classnames(
          getClassNameList(`${className}--rubric`),
          'gutter-l',
          'col-10'
        )}
        itemProp="rubric"
      >
        {rubric}
      </h3>
    );
  }
  return (
    <header
      className={classnames(getClassNameList(`${className}--header`))}
    >
      {flytitleEl}
      {titleEl}
      {rubricEl}
    </header>
  );
};

const WifHeader = (props) => {
  let section = null;
  let flytitle = null;
  let title = null;
  if (props.flytitle) {
    flytitle = (
      <h1
        className={classnames(
          props.getClassNameList(`${props.className}--flytitle`),
          'margin-l-1',
          'gutter-l',
          'col-10'
        )}
        itemProp="headline"
      >
        {props.flytitle}
      </h1>
    );
  }
  if (props.title) {
    title = (
      <h3
        className={classnames(
          props.getClassNameList(`${props.className}--title`),
          'margin-l-1',
          'gutter-l',
          'col-10'
        )}
        itemProp="alternativeHeadline"
      >
        {props.title}
      </h3>
    );
  }
  if (flytitle || title) {
    if (props.section) {
      section = (
        <h2
          className={classnames(
            props.getClassNameList(`${props.className}--header-section`),
            'margin-l-1',
            'gutter-l'
          )}
          itemProp="articleSection"
        >
          {props.section}
        </h2>
      );
    }
    return (
      <header
        className={classnames(
          props.getClassNameList(`${props.className}--header`)
        )}
      >
        {section}
        {flytitle}
        {title}
      </header>
    );
  }
};

const WifTabView = (props) => {
  const notCurrentArticle = (article) => {
    const currentArticleId = props.id;
    return currentArticleId !== article.id;
  };

  const sections = props.sections;
  const TabViewDefaultClassName = TabView.defaultClassName || 'TabView';
  return (
    <TabView
      variantType={props.variantType}
    >
      {Object.keys(sections).map((title, key) => (
        <div title={title} key={key} itemScope itemType="http://schema.org/itemList">
          <div
            className={classnames(
              props.getClassNameList(`${TabViewDefaultClassName}--Views--Tint`)
            )}
          ></div>
          {sections[title].filter(notCurrentArticle).map((article) => (
            <a href={`/article/${article.id}/${article.attributes.slug}`} itemProp="url">
              <figure
                className={classnames(
                  props.getClassNameList(`${TabViewDefaultClassName}--View--Content`)
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
}

@variantify('ArticleTemplate', variants)
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
    if (this.props.variantType === 'world-if') {
      return <WifHeader {...this.props} />;
    } else {
      return <WinHeader {...this.props} />;
    }
  }

  render() {
    const title = this.props.title || this.props.slug;

    let image = null;
    if (this.props.mainImage) {
      image = (
        <img
          className={classnames(
            this.props.getClassNameList(`${this.props.className}--image`)
          )}
          src={`${this.props.mainImage.src['1.0x']}`}
          srcSet={getSrcSet(this.props.mainImage.src)}
          alt={this.props.mainImage.alt}
          itemProp="image"
        />
      );
    }
    return (
      <article
        className={classnames(
          this.props.getClassNameList(`${this.props.className}--container`)
        )}
        data-section={this.props.sectionName}
        itemScope
        itemType="http://schema.org/NewsArticle"
      >
        <div
          className={classnames(
            this.props.getClassNameList(`${this.props.className}--imagecontainer`)
          )}
        >
          <div
            className={classnames(
              this.props.getClassNameList(`${this.props.className}--imagecontainer-inner`)
            )}
          >

          {this.props.variantType !== 'world-in-predictors' ?
            image
            : ''}

            {this.renderHeader()}
          </div>
        </div>
        <WinSubheader {...this.props} />

        {this.props.variantType === 'world-if' ?

          <p
            className={classnames(
              this.props.getClassNameList(`${this.props.className}--rubric`),
              'margin-l-1',
              'gutter-l',
              'col-10'
            )}
            itemProp="description"
          >
            {this.props.rubric}
          </p>

        : ''}

        <ArticleBody
          variantType={this.props.variantType}
          content={this.props.content}
        />

          {this.props.variantType !== 'world-if' ?


          <div
            className={classnames(
              this.props.getClassNameList(`${this.props.className}--byline-footer`),
              'margin-l-1',
              'gutter-l',
              'col-10'
            )}
          >
            <h3
              className={classnames(
                this.props.getClassNameList(`${this.props.className}--byline`),
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
                this.props.getClassNameList(`${this.props.className}--byline-details`),
                'gutter-l',
                'col-10'
              )}
              itemProp="bylinedetails"
            >
            business affairs editor, The Economist
            </span>
          </div>
            : ''}


        <WifTabView {...this.props} />
      </article>
    );
  }
}

export default ArticleTemplate;
