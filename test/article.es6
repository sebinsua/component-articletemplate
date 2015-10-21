/* eslint init-declarations: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import ArticleTemplate from '../article';

import chai from 'chai';
const should = chai.should();
describe('article', () => {

  it('has ArticleTemplate exposed as default', () => {
    should.exist(ArticleTemplate);
  });

  xdescribe('ArticleTemplate', () => {

    it('is compatible with React.Component', () => {
      ArticleTemplate.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<ArticleTemplate />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      describe('with default components', () => {

        it('should contain the data passed in within its HTML structure', () => {
          renderer.render(<ArticleTemplate />, {});
          const renderOutput = renderer.getRenderOutput();
          renderOutput.should.deep.equal(
            <div></div>
          );
        });

        it('should return a default HTML structure', () => {
          renderer.render(<ArticleTemplate />, {});
          const renderOutput = renderer.getRenderOutput();
          renderOutput.should.deep.equal(
            <div></div>
          );
        });

      });

      describe('with components specified', () => {

        it('should return the specified HTML structure', () => {
          renderer.render(<ArticleTemplate />, {});
          const renderOutput = renderer.getRenderOutput();
          renderOutput.should.deep.equal(
            <div></div>
          );
        });

      });

    });

  });
});
