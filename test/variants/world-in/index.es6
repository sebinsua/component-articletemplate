import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import article from '../../data/article';
import sections from '../../data/sections';
import WorldInArticle from '../../../variants/world-in';

import chai from 'chai';
const should = chai.should();
describe('variants/world-in/index', () => {

  it('has WorldInArticle exposed as default', () => {
    should.exist(WorldInArticle);
  });

  describe('WorldInArticle', () => {

    it('is compatible with React.Component', () => {
      WorldInArticle.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(
        <WorldInArticle
          id={article.id}
          slug={article.attributes.slug}
          title={article.attributes.title}
          flytitle={article.attributes.flytitle}
          rubric={article.attributes.rubric}
          mainImage={{
            src: article.attributes.mainimage,
            alt: article.attributes.imagealt,
          }}
          content={article.attributes.content}
          sectionName={article.attributes.section}
          sections={sections}
        />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should render world-in-base by default', () => {
        renderer.render(
          <WorldInArticle
            id={article.id}
            slug={article.attributes.slug}
            title={article.attributes.title}
            flytitle={article.attributes.flytitle}
            rubric={article.attributes.rubric}
            mainImage={{
              src: article.attributes.mainimage,
              alt: article.attributes.imagealt,
            }}
            content={article.attributes.content}
            sectionName={article.attributes.section}
            sections={sections}
          />, {});
        const renderOutput = renderer.getRenderOutput();
        const variantName = renderOutput.props.variantName;
        const components = renderOutput.props.components;
        variantName.should.equal('world-in-main');
        components.ArticleHeader.name.should.equal('WinHeader');
        components.ArticleSubheader.name.should.equal('WinSubheader');
        components.ArticleBody.name.should.equal('ArticleBodyTemplate');
        components.ArticleFooter.name.should.equal('WinFooter');
      });

      it('should render world-in-predictors when passed this as its variantName', () => {
        renderer.render(
          <WorldInArticle
            variantName={'world-in-predictors'}

            id={article.id}
            slug={article.attributes.slug}
            title={article.attributes.title}
            flytitle={article.attributes.flytitle}
            rubric={article.attributes.rubric}
            mainImage={{
              src: article.attributes.mainimage,
              alt: article.attributes.imagealt,
            }}
            content={article.attributes.content}
            sectionName={article.attributes.section}
            sections={sections}
          />, {});
        const renderOutput = renderer.getRenderOutput();
        const variantName = renderOutput.props.variantName;
        const components = renderOutput.props.components;
        variantName.should.equal('world-in-predictors');
        components.ArticleHeader.name.should.equal('WinPredictorsHeader');
        components.ArticleSubheader.name.should.equal('WinSubheader');
        components.ArticleBody.name.should.equal('ArticleBodyTemplate');
        components.ArticleFooter.name.should.equal('WinFooter');
      });

    });

  });

});
