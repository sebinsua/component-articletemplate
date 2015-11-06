import ArticleTemplate from '..';

import chai from 'chai';
const should = chai.should();
describe('index', () => {

  it('has ArticleTemplate exposed as the default', () => {
    should.exist(ArticleTemplate);
  });

});
