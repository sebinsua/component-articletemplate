import React from 'react';

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
    </div>
    );
  }


    _handleClick(selectedIndex, event) {
      if(selectedIndex >= this.props.children.length){
        selectedIndex = 0;
      }
     this.setState({
      selectedIndex
      });
  }
}