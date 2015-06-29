import React from 'react';
import TabView from './../component-tabview';
import ImageCaption from './../component-imagecaption';

export default class ArticleTemplate extends React.Component {



   constructor(props) {
    super(props);
  }

   static defaultProps = {
    mainImage: {
      alt: "The Economist",
      src: "http://lorempixel.com/g/1190/669/people"
    }
  };




  render() {
    return (
      <div className="article-container-inner">
      <div className="section group">
        <div className="span_12 article-image-container">
        <div className="article-image-container-content">
          <div className="article-title-container">
            <div className="article-section margin_1">{this.props.section}</div>
            <div className="article-title margin_1">{this.props.title}</div>
          </div>
          <img alt={this.props.mainImage.alt} src={this.props.mainImage.src} className="article-image" />
          </div>
        </div>
      </div>
      <div className="section group">
        <div className="span_10 article-rubric margin_1">Rluptat inctota tisqui asitio molupti quid essita quatur si cus, od esequi sitaspe rsperum es enisderis solor sin repeditae ium sitaspe rsperum es enis deris solor sin repeditae ium</div>
      </div>
      <div className="section group">
        <div className="span_10 article-body margin_1">{this.props.children}</div>
      </div>
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
     <a href="#">
      <figure className="TabView--View--Content">
        <img src="http://lorempixel.com/g/300/169/sports"/>
        <figcaption>this is the caption</figcaption>
      </figure>
     </a>
     <a href="#">
      <figure className="TabView--View--Content">
        <img src="http://lorempixel.com/g/300/169/food"/>
        <figcaption>this is the caption</figcaption>
      </figure>
     </a>
     <a href="#">
      <figure className="TabView--View--Content">
        <img src="http://lorempixel.com/g/300/169/city"/>
        <figcaption>this is the caption</figcaption>
      </figure>
     </a>
    </div>
      </TabView>
    </div>
    );
  }
}
