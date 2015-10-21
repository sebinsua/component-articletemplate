/* eslint init-declarations: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinHeader, WinPredictorsHeader } from '../../../variants/world-in/header';

import chai from 'chai';
const should = chai.should();
describe('variants/world-in/header', () => {

  it('has WinHeader exposed', () => {
    should.exist(WinHeader);
  });

  it('has WinFooter exposed', () => {
    should.exist(WinPredictorsHeader);
  });

  xdescribe('WinHeader', () => {

    it('is compatible with React.Component', () => {
      WinHeader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinHeader />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(<WinHeader />, {});
        const renderOutput = renderer.getRenderOutput();
        renderOutput.should.deep.equal(
          <div></div>
        );
      });

    });

  });

  xdescribe('WinPredictorsHeader', () => {

    it('is compatible with React.Component', () => {
      WinPredictorsHeader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinPredictorsHeader />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(<WinPredictorsHeader />, {});
        const renderOutput = renderer.getRenderOutput();
        renderOutput.should.deep.equal(
          <div></div>
        );
      });

    });

  });

});
