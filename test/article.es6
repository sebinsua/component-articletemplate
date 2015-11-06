/* eslint init-declarations: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import article from './data/article';
import ArticleTemplate from '../article';

import chai from 'chai';
const should = chai.should();
describe('article', () => {

  it('has ArticleTemplate exposed as default', () => {
    should.exist(ArticleTemplate);
  });

  describe('ArticleTemplate', () => {

    it('is compatible with React.Component', () => {
      ArticleTemplate.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(
        <ArticleTemplate
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
        />
      ).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      describe('with default components', () => {

        it('should contain the data passed in within its HTML structure', () => {
          renderer.render(
            <ArticleTemplate
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
            />, {});
          const renderOutput = renderer.getRenderOutput();
          const sectionName = renderOutput.props.sectionName;
          const content = renderOutput.props.children[2].props.content;
          sectionName.should.equal('Politics');
          content.should.deep.equal(article.attributes.content);
        });

        it('should return a default HTML structure', () => {
          renderer.render(
            <ArticleTemplate
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
            />, {});
          const renderOutput = renderer.getRenderOutput();
          const childrenContained = renderOutput.props.children;
          childrenContained[0].type.should.equal('div');
          childrenContained[1].type.should.equal('div');
          childrenContained[2].type.name.should.equal('ArticleBodyTemplate');
          childrenContained[3].type.should.equal('div');
        });

      });

      describe('with components specified', () => {

        it('should return the specified HTML structure', () => {
          renderer.render(
            <ArticleTemplate
              components={{
                ArticleHeader: 'h1',
                ArticleSubheader: 'h2',
                ArticleBody: 'section',
                ArticleFooter: 'footer',
              }}

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
            />, {});
          const renderOutput = renderer.getRenderOutput();
          const childrenContained = renderOutput.props.children;
          childrenContained[0].type.should.equal('h1');
          childrenContained[1].type.should.equal('h2');
          childrenContained[2].type.should.equal('section');
          childrenContained[3].type.should.equal('footer');
        });

      });

    });

  });
});
