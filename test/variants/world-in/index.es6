import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import WorldInArticle from '../../../variants/world-in';

import chai from 'chai';
const should = chai.should();
describe('variants/world-in/index', () => {

  it('has WorldInArticle exposed as default', () => {
    should.exist(WorldInArticle);
  });

  xdescribe('WorldInArticle', () => {

    it('is compatible with React.Component', () => {
      WorldInArticle.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WorldInArticle />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should render world-in-base by default', () => {
        renderer.render(<WorldInArticle />, {});
        const renderOutput = renderer.getRenderOutput();
        renderOutput.should.deep.equal(
          <div></div>
        );
      });

      it('should render world-in-predictors when passed this as its variantType', () => {
        renderer.render(<WorldInArticle />, {});
        const renderOutput = renderer.getRenderOutput();
        renderOutput.should.deep.equal(
          <div></div>
        );
      });

    });

  });

});
