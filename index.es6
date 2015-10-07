import React, { PropTypes } from 'react';
import TabView from '@economist/component-tabview';
import AnimatedPanel from '@economist/component-animatedpanel';
import Gobbet from '@economist/component-wifgobbet';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';
import Omniture from '@economist/component-omniture';
import NotFound from '@economist/component-404';
import Gallery from '@economist/component-gallery';
import Authenticated from '@economist/component-authenticated';

const authenticated = new Authenticated();
const articleComponent = {
  Image: 'img',
  Pullquote: 'blockquote',
  ArticleSubHead: 'h3',
  Gobbet,
  ImageCaption,
  Video,
  AnimatedPanel,
  Gallery,
};
export default class ArticleTemplate extends React.Component {

  static get propTypes() {
    return {
      article: PropTypes.object.isRequired,
      sections: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
  }

  static addComponentType(component, name) {
    articleComponent[name || component.name] = component;
  }

  renderJSONContents(contents) {
    return (contents || []).map((contentPiece, key) => {
      if (typeof contentPiece === 'string') {
        return (
          <p key={key} dangerouslySetInnerHTML={{ __html: contentPiece }} />
        );
      }
      const Component = articleComponent[contentPiece.component];
      if (!Component) {
        throw new Error('Unknown component ' + contentPiece.component);
      }
      const children = this.renderJSONContents(contentPiece.content);
      return (
        <Component key={key} {...contentPiece.props}>
          {children}
        </Component>
      );
    });
  }

  renderTabView() {
    const notCurrentArticle = (article) => {
      const currentArticle = this.props.article;
      return currentArticle.id !== article.id;
    };

    const sections = this.props.sections;
    return (
      <TabView>
        {Object.keys(sections).map((title, key) => (
          <div title={title} key={key} itemScope itemType="http://schema.org/itemList">
            <div className="TabView--Views--Tint"></div>
            {sections[title].filter(notCurrentArticle).map((article) => (
              <a href={`/article/${article.id}/${article.attributes.slug}`} itemProp="url">
                <figure className="TabView--View--Content">
                  <img
                    src={`${article.attributes.tileimage['1.0x']}`}
                    srcSet={this.getSrcSet(article.attributes.tileimage)}
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

  getSrcSet(image) {
    return Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');
  }

  renderHeader(attributes) {
    let section = null;
    let flytitle = null;
    let title = null;
    if (attributes.flytitle) {
      flytitle = (
        <h1 className="ArticleTemplate--flytitle margin-l-1 gutter-l col-10" itemProp="headline">
          {attributes.flytitle}
        </h1>
      );
    }
    if (attributes.title) {
      title = (
        <h3 className="ArticleTemplate--title margin-l-1 gutter-l col-10" itemProp="alternativeHeadline">
          {attributes.title}
        </h3>
      );
    }
    if (flytitle || title) {
      if (attributes.section) {
        section = (
          <h2 className="ArticleTemplate--header-section margin-l-1 gutter-l" itemProp="articleSection">
            {attributes.section}
          </h2>
        );
      }
      return (
        <header className="ArticleTemplate--header">
          {section}
          {flytitle}
          {title}
        </header>
      );
    }
  }

  render() {
    const article = this.props.article;
    if (!article) {
      return (<NotFound/>);
    }
    const contents = this.renderJSONContents(article.attributes.content);
    const tabs = this.renderTabView();
    const title = article.attributes.title || article.attributes.slug;
    const omnitureProps = {
      pageName: `the_world_if|${article.attributes.section}|${title}`,
      server: 'economist.com',
      channel: article.attributes.section,
      prop1: 'the_world_if',
      prop3: 'web',
      prop4: 'article',
      prop5: title,
      prop11: authenticated.getCookie('mm-logged-in-state') ? 'logged_in' : 'not_logged_in',
      prop13: 'anonymous',
      prop31: new Date(),
    };
    let image = null;
    if (article.attributes.mainimage) {
      image = (<img
        className="ArticleTemplate--image"
        src={`${article.attributes.mainimage['1.0x']}`}
        srcSet={this.getSrcSet(article.attributes.mainimage)}
        alt={article.attributes.imagealt}
        itemProp="image"
      />);
    }
    return (
      <article className="ArticleTemplate--container" data-section={article.attributes.section}
      itemScope itemType="http://schema.org/NewsArticle">
        <div className="ArticleTemplate--imagecontainer">
          <div className="ArticleTemplate--imagecontainer-inner">
            {image}
            {this.renderHeader(article.attributes)}
          </div>
        </div>
        <p className="margin-l-1 gutter-l ArticleTemplate--rubric col-10"
        itemProp="description">{article.attributes.rubric}</p>
        <section className="ArticleTemplate--section" itemProp="articleBody">
          {contents}
        </section>
        {tabs}
        <Omniture {...omnitureProps} />
      </article>
    );
  }
}
