import { ArticleHeaderContainer, ImageContainer } from '../header';

import chai from 'chai';
const should = chai.should();
describe('header', () => {

  it('has ArticleHeaderContainer exposed', () => {
    should.exist(ArticleHeaderContainer);
  });

  it('has ImageContainer exposed', () => {
    should.exist(ImageContainer);
  });

});
