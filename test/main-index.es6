import ArticleTemplate from '..';
import { WorldIfArticle, WorldInArticle } from '..';

import chai from 'chai';
const should = chai.should();
describe('index', () => {

  it('has ArticleTemplate exposed as the default', () => {
    should.exist(ArticleTemplate);
  });

  it('has WorldIfArticle exposed', () => {
    should.exist(WorldIfArticle);
  });

  it('has WorldInArticle exposed', () => {
    should.exist(WorldInArticle);
  });

});
