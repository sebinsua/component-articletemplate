import React from 'react';
import TabView from '@economist/component-tabview';
import AnimatedPanel from '@economist/component-animatedpanel';
import ArticleStore from '@economist/component-articlestore';
import Gobbet from '@economist/component-gobbet';
import ImageCaption from '@economist/component-imagecaption';

const articleStore = new ArticleStore('/content');
const articleComponent = {
  Image: 'img',
  PullQuote: 'blockquote',
  ArticleSubHead: 'h3',
  Gobbet,
  ImageCaption,
};
export default class ArticleTemplate extends React.Component {

  static get propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
    };
  }

  static get store() {
    return articleStore;
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
    const sections = articleStore
      .getWhere((item) => item.id !== this.props.id)
      .reduce((total, article) => {
        const section = article.attributes.section;
        total[section] = total[section] || [];
        total[section].push(article);
        return total;
      }, {});
    return (
      <TabView>
        {Object.keys(sections).map((title, key) => (
          <div title={title} key={key}>
            <div className="TabView--Views--Tint"></div>
            {sections[title].map((article) => (
              <a href={`/article/${article.id}`}>
                <figure className="TabView--View--Content">
                  <img src={article.attributes.mainimage}/>
                  <figcaption>{article.attributes.title}</figcaption>
                </figure>
              </a>
            ))}
          </div>
        ))}
      </TabView>
    );
  }

  render() {
    const article = articleStore.get(this.props.id);
    if (!article) {
      if (this.state && this.state.requested) {
        throw new Error('Already requested article id, but failed');
      }
      this.state = { requesting: true };
      articleStore.fetch(this.props.id).then(() => this.setState({ requesting: false, requested: true }));
      return (
        <div className="ArticleTemplate--loading">
          Loading
        </div>
      );
    }
    const contents = this.renderJSONContents(article.attributes.content);
    const tabs = this.renderTabView();
    return (
      <article className="ArticleTemplate--container">
        <div className="span_12 ArticleTemplate--imagecontainer">
          <div className="ArticleTemplate--imagecontainer-inner">
            <header className="ArticleTemplate--header">
              <h2 className="ArticleTemplate--header-section margin_1">{article.attributes.section}</h2>
              <h1 className="ArticleTemplate--flytitle margin_1 span_11">{article.attributes.flytitle}</h1>
              <h3 className="ArticleTemplate--title margin_1 span_11">{article.attributes.title}</h3>
            </header>
            <img src={article.attributes.mainimage} className="ArticleTemplate--image" />
          </div>
        </div>
        <p className="span_10 margin_1 ArticleTemplate--rubric">{article.attributes.rubric}</p>
        <section className="ArticleTemplate--section group margin_1 span_11">
          {contents}
        </section>
        <AnimatedPanel/>
        {tabs}
      </article>
    );
  }
}
