import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { getSrcSet } from '../../utils';

import { ArticleHeaderContainer } from '../../header';

const ArticleHeaderItem1 = ({ generateClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      generateClassNameList(className),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
);
const ArticleHeaderItem2 = ({ generateClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      generateClassNameList(className),
      'margin-l-1',
      'gutter-l'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
);
const Section = ({ generateClassNameList, children }) => (
  <ArticleHeaderItem2
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h2'}
    className="ArticleTemplate--header-section"
    itemProp="articleSection"
  >
    {children}
  </ArticleHeaderItem2>
);
const FlyTitle = ({ generateClassNameList, children }) => (
  <ArticleHeaderItem1
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem1>
);
const Title = ({ generateClassNameList, children }) => (
  <ArticleHeaderItem1
    generateClassNameList={generateClassNameList}
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
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      sectionName: PropTypes.string,
      flytitle: PropTypes.string,
      title: PropTypes.string,
    };
  }

  render() {
    const { generateClassNameList, mainImage, sectionName, flytitle, title } = this.props;
    return (
      <div
        className={classnames(
          generateClassNameList(`ArticleTemplate--imagecontainer`)
        )}
      >
        <div
          className={classnames(
            generateClassNameList(`ArticleTemplate--imagecontainer-inner`)
          )}
        >
          {mainImage ?
            <img
              className={classnames(
                generateClassNameList(`ArticleTemplate--image`)
              )}
              src={`${mainImage.src['1.0x']}`}
              srcSet={getSrcSet(mainImage.src)}
              alt={mainImage.alt}
              itemProp="image"
            />
          : ''}

          <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
            {sectionName ? <Section generateClassNameList={generateClassNameList}>{sectionName}</Section> : ''}
            {flytitle ? <FlyTitle generateClassNameList={generateClassNameList}>{flytitle}</FlyTitle> : ''}
            {title ? <Title generateClassNameList={generateClassNameList}>{title}</Title> : ''}
          </ArticleHeaderContainer>
        </div>
      </div>
    );
  }
}
