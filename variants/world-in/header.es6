import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { getSrcSet } from '../../utils';
import { ArticleHeaderContainer } from '../../header';

const ArticleHeaderItem = ({ generateClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      generateClassNameList(className),
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
);
const FlyTitle = ({ generateClassNameList, children }) => (
  <ArticleHeaderItem
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem>
);
const Title = ({ generateClassNameList, children }) => (
  <ArticleHeaderItem
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </ArticleHeaderItem>
);
const Rubric = ({ generateClassNameList, children }) => (
  <ArticleHeaderItem
    generateClassNameList={generateClassNameList}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--rubric"
    itemProp="rubric">
    {children}
  </ArticleHeaderItem>
);

export class WinHeader extends React.Component {
  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;
    return (
      <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer`))}>
        <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer-inner`))}>
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
            { flytitle ? <FlyTitle generateClassNameList={generateClassNameList}>{flytitle}</FlyTitle> : '' }
            { title ? <Title generateClassNameList={generateClassNameList}>{title}</Title> : '' }
            { rubric ? <Rubric generateClassNameList={generateClassNameList}>{rubric}</Rubric> : '' }
          </ArticleHeaderContainer>
        </div>
      </div>
    );
  }
}

export class WinPredictorsHeader extends React.Component {
  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.rubric,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;
    return (
      <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer`))}>
        <div className={classnames(generateClassNameList(`ArticleTemplate--imagecontainer-inner`))}>
          <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
            { flytitle ? <FlyTitle generateClassNameList={generateClassNameList}>{flytitle}</FlyTitle> : '' }
            {mainImage ?
              <img
                className={classnames(generateClassNameList(`ArticleTemplate--image`))}
                src={`${mainImage.src['1.0x']}`}
                srcSet={getSrcSet(mainImage.src)}
                alt={mainImage.alt}
                itemProp="image"
              />
            : ''}
            { title ? <Title generateClassNameList={generateClassNameList}>{title}</Title> : '' }
            { rubric ? <Rubric generateClassNameList={generateClassNameList}>{rubric}</Rubric> : '' }
          </ArticleHeaderContainer>
        </div>
      </div>
    );
  }
}
