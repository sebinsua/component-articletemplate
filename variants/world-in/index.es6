import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { getSrcSet, ArticleHeader, ArticleSubheader, ArticleFooter } from '../../template';

import variants from '..';
import { withVariantClassNameList } from '../../variantify';

const ArticleHeaderItem = withVariantClassNameList(variants)(({ getClassNameList, HeaderItemComponent = 'h1', className, itemProp, children }) => (
  <HeaderItemComponent
    className={classnames(
      getClassNameList(className),
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </HeaderItemComponent>
));
const FlyTitle = ({ variantType, children }) => (
  <ArticleHeaderItem
    variantType={variantType}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--flytitle"
    itemProp="headline"
  >
    {children}
  </ArticleHeaderItem>
);
const Title = ({ variantType, children }) => (
  <ArticleHeaderItem
    variantType={variantType}
    HeaderItemComponent={'h1'}
    className="ArticleTemplate--title"
    itemProp="alternativeHeadline"
  >
    {children}
  </ArticleHeaderItem>
);
const Rubric = ({ variantType, children }) => (
  <ArticleHeaderItem
    variantType={variantType}
    HeaderItemComponent={'h3'}
    className="ArticleTemplate--rubric"
    itemProp="rubric">
    {children}
  </ArticleHeaderItem>
);

export class WinHeader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      variantType: PropTypes.string,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, variantType, mainImage, flytitle, title, rubric } = this.props;
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

          <ArticleHeader variantType={variantType}>
            { flytitle ? <FlyTitle variantType={variantType}>{flytitle}</FlyTitle> : '' }
            { title ? <Title variantType={variantType}>{title}</Title> : '' }
            { rubric ? <Rubric variantType={variantType}>{rubric}</Rubric> : '' }
          </ArticleHeader>
        </div>
      </div>
    );
  }
}

export class WinPredictorsHeader extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      variantType: PropTypes.string,
      mainImage: PropTypes.object,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.rubric,
    };
  }

  render() {
    const { getClassNameList, variantType, mainImage, flytitle, title, rubric } = this.props;
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
          <ArticleHeader variantType={variantType}>
            { flytitle ? <FlyTitle variantType={variantType}>{flytitle}</FlyTitle> : '' }
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
            { title ? <Title variantType={variantType}>{title}</Title> : '' }
            { rubric ? <Rubric variantType={variantType}>{rubric}</Rubric> : '' }
          </ArticleHeader>
        </div>
      </div>
    );
  }
}

const ArticleSubheaderItem = withVariantClassNameList(variants)(({ getClassNameList, SubheaderItemComponent = 'h2', className, itemProp, children }) => (
  <SubheaderItemComponent
    className={classnames(
      getClassNameList(className),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
    itemProp={itemProp}
  >
    {children}
  </SubheaderItemComponent>
));
const Byline = ({ variantType, children }) => (
  <ArticleSubheaderItem
    variantType={variantType}
    SubheaderItemComponent={'h2'}
    className="ArticleTemplate--byline"
    itemProp="byline">
    {children}
  </ArticleSubheaderItem>
);
const PublishDate = ({ variantType, children }) => (
  <ArticleSubheaderItem
    variantType={variantType}
    SubheaderItemComponent={'h2'}
    className="ArticleTemplate--pubdate"
    itemProp="publishdate">
    {children}
  </ArticleSubheaderItem>
);
const Section = ({ variantType, children }) => (
  <ArticleSubheaderItem
    variantType={variantType}
    SubheaderItemComponent={'h2'}
    className="ArticleTemplate--section-section"
    itemProp="section">
    {children}
  </ArticleSubheaderItem>
);

export class WinSubheader extends React.Component {
  static get propTypes() {
    return {
      variantType: PropTypes.string,
      sectionName: PropTypes.string,
    };
  }

  render() {
    const { variantType, sectionName } = this.props;
    return (
      <ArticleSubheader variantType={variantType}>
        <Byline variantType={variantType}>By-line to follow</Byline>
        <PublishDate variantType={variantType}>Publish date to follow</PublishDate>
        <Section variantType={variantType}>{sectionName}</Section>
      </ArticleSubheader>
    );
  }
}

export class WinLeaderSubheader extends React.Component {
  static get propTypes() {
    return {
      variantType: PropTypes.string,
      sectionName: PropTypes.string,
    };
  }

  render() {
    const { variantType, sectionName } = this.props;
    return (
      <ArticleSubheader variantType={variantType}>
        <PublishDate variantType={variantType}>Publish date to follow</PublishDate>
        <Section variantType={variantType}>{sectionName}</Section>
      </ArticleSubheader>
    );
  }
}

const BylineFooter = ({ getClassNameList }) => (
  <div
    className={classnames(
      getClassNameList(`ArticleTemplate--byline-footer`),
      'margin-l-1',
      'gutter-l',
      'col-10'
    )}
  >
    <h3
      className={classnames(
        getClassNameList(`ArticleTemplate--byline`),
        'margin-l-1',
        'gutter-l',
        'col-10'
      )}
      itemProp="byline"
    >
      Zanny Minton Beddoes
    </h3>
    <span
      className={classnames(
        getClassNameList(`ArticleTemplate--byline-details`),
        'gutter-l',
        'col-10'
      )}
      itemProp="bylinedetails"
    >
    business affairs editor, The Economist
    </span>
  </div>
);

export class WinFooter extends React.Component {
  static get propTypes() {
    return {
      getClassNameList: PropTypes.func,
      variantType: PropTypes.string,
    };
  }

  render() {
    const { getClassNameList, variantType } = this.props;
    return (
      <ArticleFooter variantType={variantType}>
        <BylineFooter getClassNameList={getClassNameList} />
      </ArticleFooter>
    );
  }
}
