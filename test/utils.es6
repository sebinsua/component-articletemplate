/* eslint react/no-multi-comp: 0 */
import React, { Component, PropTypes } from 'react';
import { getSrcSet, passthroughComponentPropTypesOnly } from '../utils';

import chai from 'chai';
const should = chai.should();
describe('utils', () => {

  it('has getSrcSet exposed', () => {
    should.exist(getSrcSet);
  });

  it('has passthroughComponentPropTypesOnly exposed', () => {
    should.exist(passthroughComponentPropTypesOnly);
  });

  describe('getSrcSet', () => {

    it('should return a valid srcSet', () => {
      const images = {
        '1.0x': '/assets/1cab46323bec@1x.jpg',
        '2.0x': '/assets/1cab46323bec@2x.jpg',
        '3.3x': '/assets/1cab46323bec@3.3x.jpg',
      };
      getSrcSet(images).should.equal('/assets/1cab46323bec@1x.jpg 1.0x,' +
                                     '/assets/1cab46323bec@2x.jpg 2.0x,' +
                                     '/assets/1cab46323bec@3.3x.jpg 3.3x');
    });

  });

  describe('passthroughComponentPropTypesOnly', () => {

    it('should return an empty object when given a component with no propTypes', () => {
      class ComponentWithNoPropTypes extends Component {
        render() {
          return <div>Hello world</div>;
        }
      }

      const props = {
        'prop': 'some-text',
        'prop2': 'some-more-text',
        'prop3': 'some-more-text-2',
      };
      passthroughComponentPropTypesOnly(ComponentWithNoPropTypes, props).should.deep.equal({});
    });

    it('should return an object containing only the propTypes of a component with propTypes', () => {
      class ComponentWithPropTypes extends Component {
        static get propTypes() {
          return {
            'prop': PropTypes.string,
            'prop2': PropTypes.string,
          };
        }

        render() {
          return <div>Hello world</div>;
        }
      }

      const props = {
        'prop': 'some-text',
        'prop2': 'some-more-text',
        'prop3': 'some-more-text-2',
      };
      passthroughComponentPropTypesOnly(ComponentWithPropTypes, props).should.deep.equal({
        'prop': 'some-text',
        'prop2': 'some-more-text',
      });
    });

  });

});
