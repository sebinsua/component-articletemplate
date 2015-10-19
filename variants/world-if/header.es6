import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { getSrcSet } from '../../utils';

import { ArticleHeaderContainer } from '../../header';

const ArticleHeaderItem1 = ({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      getClassNameList(className),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
);
const ArticleHeaderItem2 = ({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      getClassNameList(className),
      'margin-l-1',
      'gutter-l'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
);
const Section = ({ getClassNameList, children }) => (
  <ArticleHeaderItem2
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h2'}
    className="ArticleTemplate--header-section"
    itemProp="articleSection"
  >
    {children}
  </ArticleHeaderItem2>
);
const FlyTitle = ({ getClassNameList, children }) => (
  <ArticleHeaderItem1
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem1>
);
const Title = ({ getClassNameList, children }) => (
  <ArticleHeaderItem1
    getClassNameList={getClassNameList}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </ArticleHeaderItem1>
);

export class WifHeader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      sectionName: PropTypes.string,
      flytitle: PropTypes.string,
      title: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, mainImage, sectionName, flytitle, title } = this.props;
    return (
      <div
        className={classnames(
          getClassNameList(`ArticleTemplate--imagecontainer`)
        )}
      >
        <div
          className={classnames(
            getClassNameList(`ArticleTemplate--imagecontainer-inner`)
          )}
        >
          {mainImage ?
            <img
              className={classnames(
                getClassNameList(`ArticleTemplate--image`)
              )}
              src={`${mainImage.src['1.0x']}`}
              srcSet={getSrcSet(mainImage.src)}
              alt={mainImage.alt}
              itemProp="image"
            />
          : ''}

          <ArticleHeaderContainer getClassNameList={getClassNameList}>
            {sectionName ? <Section getClassNameList={getClassNameList}>{sectionName}</Section> : ''}
            {flytitle ? <FlyTitle getClassNameList={getClassNameList}>{flytitle}</FlyTitle> : ''}
            {title ? <Title getClassNameList={getClassNameList}>{title}</Title> : ''}
          </ArticleHeaderContainer>
        </div>
      </div>
    );
  }
}
