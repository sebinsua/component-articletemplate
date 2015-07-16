import React from 'react';
import TabView from '@economist/component-tabview';
import AnimatedPanel from '@economist/component-animatedpanel';
import ArticleStore from '@economist/component-articlestore';

const articleStore = new ArticleStore('/content');
const articleComponent = {
  Image: 'img',
  PullQuote: 'blockquote',
  ArticleSubHead: 'h3',
};
export default class ArticleTemplate extends React.Component {

  static get propTypes() {
    return {
      params: React.PropTypes.object.isRequired,
    };
  }

  static get store() {
    return articleStore;
  }

  static addComponentType(component, name) {
    articleComponent[name || component.name] = component;
  }

  get articleid() {
    const id = ((this.props || {}).params || {}).id;
    if (!id) {
      throw new Error('ArticleTemplate does not have ID');
    }
    return id;
  }

  renderJSONContents(contents) {
    return contents.map((contentPiece, key) => {
      if (typeof contentPiece === 'string') {
        return (
          <p key={key}>
            {contentPiece}
          </p>
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
      .getWhere((item) => item.id !== this.articleid)
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
    const article = articleStore.get(this.articleid);
    if (!article) {
      if (this.state && this.state.requested) {
        throw new Error('Already requested article id, but failed');
      }
      this.state = { requesting: true };
      articleStore.fetch(this.articleid).then(() => this.setState({ requesting: false, requested: true }));
      return (
        <div className="ArticleTemplate--loading">
          Loading
        </div>
      );
    }
    const contents = this.renderJSONContents(article.attributes.content);
    const tabs = this.renderTabView();
    return (
      <div className="article-container-inner">
        <div className="section group">
          <div className="span_12 article-image-container">
            <div className="article-image-container-content">
              <div className="article-title-container">
                <h2 className="article-section margin_1">{article.attributes.section}</h2>
                <h1 className="article-flytitle margin_1 span_10 ">{article.attributes.flytitle}</h1>
                <h3 className="article-title margin_1 span_10 ">{article.attributes.title}</h3>
              </div>
              <img src={article.attributes.mainimage} className="article-image" />
            </div>
          </div>
        </div>
        <div className="section group">
          <h4 className="span_10 margin_1 article-rubric">{article.attributes.rubric}</h4>
        </div>
        <div className="section group">
          {contents}
        </div>
        <AnimatedPanel/>
        {tabs}
      </div>
    );
  }
}
