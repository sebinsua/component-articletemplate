import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinFooter } from '../../../variants/world-in/footer';

import chai from 'chai';
const should = chai.should();
describe('variants/world-in/footer', () => {

  it('has WinFooter exposed', () => {
    should.exist(WinFooter);
  });

  xdescribe('WinFooter', () => {

    it('is compatible with React.Component', () => {
      WinFooter.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinFooter />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(<WinFooter />, {});
        const renderOutput = renderer.getRenderOutput();
        renderOutput.should.deep.equal(
          <div></div>
        );
      });

    });

  });

});
