import React from 'react';
import TabView from '@economist/component-tabview';
import AnimatedPanel from '@economist/component-animatedpanel';

export default class ArticleTemplate extends React.Component {


  static get propTypes() {
    return {
      section: React.PropTypes.string,
      flytitle: React.PropTypes.string,
      title: React.PropTypes.string,
      mainimage: React.PropTypes.node,
      children: React.PropTypes.node,
    };
  }

  render() {
    return (
      <div className="article-container-inner">
        <div className="section group">
          <div className="span_12 article-image-container">
            <div className="article-image-container-content">
              <div className="article-title-container">
                <h2 className="article-section margin_1">{this.props.section}</h2>
                <h1 className="article-flytitle margin_1 span_10 ">{this.props.flytitle}</h1>
                <h3 className="article-title margin_1 span_10 ">{this.props.title}</h3>
              </div>
              <img src={this.props.mainimage} className="article-image" />
            </div>
          </div>
        </div>
        <div className="section group">
          <h4 className="span_10 margin_1 article-rubric">Rluptat inctota tisqui asitio molupti quid essita quatur si
          cus, od esequi sitaspe rsperum es enisderis solor sin repeditae ium sitaspe rsperum es enis deris solor sin
          repeditae ium</h4>
        </div>
        <div className="section group">
          <div className="span_12 article-body">{this.props.children}</div>
        </div>
        <AnimatedPanel/>
        <TabView>
          <div title="Politics">
            <div className="TabView--Views--Tint"></div>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/cats"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/people"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/city"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/fashion"/>
                  <figcaption>this is the caption</figcaption>
              </figure>
            </a>
          </div>
          <div title="Business & Economics">
            <div className="TabView--Views--Tint"></div>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/food"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/nightlife"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/sports"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/nature"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
          </div>
          <div title="Science & technology">
            <div className="TabView--Views--Tint"></div>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/transport"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/abstract"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/technics"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure className="TabView--View--Content">
                <img src="http://lorempixel.com/g/300/169/cats"/>
                <figcaption>this is the caption</figcaption>
              </figure>
            </a>
          </div>
          <div title="History">
            <div className="TabView--Views--Tint"></div>
              <a href="#">
                <figure className="TabView--View--Content">
                  <img src="http://lorempixel.com/g/300/169/nightlife"/>
                  <figcaption>this is the caption</figcaption>
                </figure>
              </a>
          </div>
        </TabView>
      </div>
    );
  }
}
