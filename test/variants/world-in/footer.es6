/* eslint id-match: 0, id-length: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinFooter } from '../../../variants/world-in/footer';

import $ from 'teaspoon';
import chai from 'chai';
const should = chai.should();
describe('variants/world-in/footer', () => {

  it('has WinFooter exposed', () => {
    should.exist(WinFooter);
  });

  describe('WinFooter', () => {

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

      // NOTE: Switched off until we begin passing data in.
      xit('should contain the data passed in within its HTML structure', () => {
        renderer.render(<WinFooter />, {});
        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--byline').text().should.equal('Zanny Minton Beddoes');
        out.first('.ArticleTemplate--byline-details').text().should.equal('business affairs editor, The Economist');
      });

    });

  });

});
