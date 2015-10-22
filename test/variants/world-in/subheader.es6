import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinSubheader, WinLeaderSubheader } from '../../../variants/world-in/subheader';

import chai from 'chai';
const should = chai.should();
describe('variants/world-in/subheader', () => {

  it('has WinSubheader exposed', () => {
    should.exist(WinSubheader);
  });

  it('has WinLeaderSubheader exposed', () => {
    should.exist(WinLeaderSubheader);
  });

  xdescribe('WinSubheader', () => {

    it('is compatible with React.Component', () => {
      WinSubheader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinSubheader />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(<WinSubheader />, {});
        const renderOutput = renderer.getRenderOutput();
        renderOutput.should.deep.equal(
          <div></div>
        );
      });

    });

  });

  xdescribe('WinLeaderSubheader', () => {

    it('is compatible with React.Component', () => {
      WinLeaderSubheader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinLeaderSubheader />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(<WinLeaderSubheader />, {});
        const renderOutput = renderer.getRenderOutput();
        renderOutput.should.deep.equal(
          <div></div>
        );
      });

    });

  });

});
