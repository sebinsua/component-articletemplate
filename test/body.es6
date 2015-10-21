/* eslint init-declarations: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import ArticleBodyTemplate, { ArticleBodyContainer } from '../body';

import chai from 'chai';
const should = chai.should();
describe('body', () => {

  it('has ArticleBodyContainer exposed', () => {
    should.exist(ArticleBodyContainer);
  });

  it('has ArticleBodyTemplate exposed as default', () => {
    should.exist(ArticleBodyTemplate);
  });

  xdescribe('ArticleBodyTemplate', () => {

    it('is compatible with React.Component', () => {
      ArticleBodyTemplate.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<ArticleBodyTemplate />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      describe('with default components', () => {

        it('with <p> tags for content strings', () => {
          renderer.render(<ArticleBodyTemplate />, {});
          const renderOutput = renderer.getRenderOutput();
          renderOutput.should.deep.equal(
            <div></div>
          );
        });

        it('with unknown component exceptions when not within props.components', () => {
          renderer.render(<ArticleBodyTemplate />, {});
          const renderOutput = renderer.getRenderOutput();
          renderOutput.should.deep.equal(
            <div></div>
          );
        });

      });

      describe('with components specified', () => {

        it('with a specific element tag for Special component defined within props.components', () => {
          renderer.render(<ArticleBodyTemplate />, {});
          const renderOutput = renderer.getRenderOutput();
          renderOutput.should.deep.equal(
            <div></div>
          );
        });

      });

    });

  });

});
