import React from 'react';
import TabView from '@economist/component-tabview';
import AnimatedPanel from '@economist/component-animatedpanel';
import ArticleStore from '@economist/component-articlestore';
import Gobbet from '@economist/component-wifgobbet';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';

const articleStore = new ArticleStore('/content');
const articleComponent = {
  Image: 'img',
  PullQuote: 'blockquote',
  ArticleSubHead: 'h3',
  Gobbet,
  ImageCaption,
  Video,
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
        <div className="ArticleTemplate--imagecontainer">
          <div className="ArticleTemplate--imagecontainer-inner">
            <img src={article.attributes.mainimage} className="ArticleTemplate--image" />
            <header className="ArticleTemplate--header">
              <h2 className="ArticleTemplate--header-section margin-l-1 gutter-l">{article.attributes.section}</h2>
              <h1 className="ArticleTemplate--flytitle margin-l-1 gutter-l col-10">{article.attributes.flytitle}</h1>
              <h3 className="ArticleTemplate--title margin-l-1 gutter-l col-10">{article.attributes.title}</h3>
            </header>
          </div>
        </div>
        <p className="margin-l-1 gutter-l ArticleTemplate--rubric col-10">{article.attributes.rubric}</p>
        <section className="ArticleTemplate--section">
          {contents}
        </section>
        <AnimatedPanel/>
        {tabs}
      </article>
    );
  }
}
