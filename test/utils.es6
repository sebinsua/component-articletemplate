import { defaultGenerateClassNameList, getSrcSet, passthroughComponentPropTypesOnly } from '../utils';

import chai from 'chai';
const should = chai.should();
describe('utils', () => {

  it('has defaultGenerateClassNameList exposed', () => {
    should.exist(defaultGenerateClassNameList);
  });

  it('has getSrcSet exposed', () => {
    should.exist(getSrcSet);
  });

  it('has passthroughComponentPropTypesOnly exposed', () => {
    should.exist(passthroughComponentPropTypesOnly);
  });

  xdescribe('defaultGenerateClassNameList', () => {

    it('should return an array containing the element passed in', () => {

    });

  });

  xdescribe('getSrcSet', () => {

    it('should return a valid srcSet', () => {

    });

  });

  xdescribe('passthroughComponentPropTypesOnly', () => {

    it('should return an empty object when given a component with no propTypes', () => {

    });

    it('should return an object containing only the propTypes of a component with propTypes', () => {

    });

  });

});
