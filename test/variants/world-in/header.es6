/* eslint id-match: 0, id-length: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinHeader, WinPredictorsHeader } from '../../../variants/world-in/header';

import $ from 'teaspoon';
import chai from 'chai';
const should = chai.should();
describe('variants/world-in/header', () => {

  it('has WinHeader exposed', () => {
    should.exist(WinHeader);
  });

  it('has WinFooter exposed', () => {
    should.exist(WinPredictorsHeader);
  });

  describe('WinHeader', () => {

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
        renderer.render(
          <WinHeader
            mainImage={{
              'src': {
                '1.0x': '/assets/1cab46323bec@1x.jpg',
              },
            }}
            flytitle={'Pretty fly'}
            title={'For a white guy'}
            rubric={'uno dos tres cuatro cinco cinco seis'}
          />, {});
        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--image')[0].props.src.should.equal('/assets/1cab46323bec@1x.jpg');
        out.first('.ArticleTemplate--flytitle').text().should.equal('Pretty fly');
        out.first('.ArticleTemplate--title').text().should.equal('For a white guy');
        out.first('.ArticleTemplate--rubric').text().should.equal('uno dos tres cuatro cinco cinco seis');
      });

    });

  });

  describe('WinPredictorsHeader', () => {

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
        renderer.render(
          <WinPredictorsHeader
            mainImage={{
              'src': {
                '1.0x': '/assets/1cab46323bec@1x.jpg',
              },
            }}
            flytitle={'Pretty fly'}
            title={'For a white guy'}
            rubric={'uno dos tres cuatro cinco cinco seis'}
          />, {});
        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--image')[0].props.src.should.equal('/assets/1cab46323bec@1x.jpg');
        out.first('.ArticleTemplate--flytitle').text().should.equal('Pretty fly');
        out.first('.ArticleTemplate--title').text().should.equal('For a white guy');
        out.first('.ArticleTemplate--rubric').text().should.equal('uno dos tres cuatro cinco cinco seis');
      });

    });

  });

});
