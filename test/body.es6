/* eslint init-declarations: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import ArticleBodyTemplate, { ArticleBodyContainer } from '../body';

import chai from 'chai';
const should = chai.should();
describe('body', () => {

  it('has ArticleBodyContainer exposed', () => {
    should.exist(ArticleBodyContainer);
  });

  it('has ArticleBodyTemplate exposed as default', () => {
    should.exist(ArticleBodyTemplate);
  });

  describe('ArticleBodyTemplate', () => {

    it('is compatible with React.Component', () => {
      ArticleBodyTemplate.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<ArticleBodyTemplate />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      describe('with default components', () => {

        it('with <p> tags for content strings', () => {
          const content = [
            'A long time ago in a galaxy far, far away....',
            'It is a period of civil war.',
            'Rebel spaceships, striking from a hidden base, ' +
            'have won their first victory against the evil Galactic Empire.',
          ];
          renderer.render(
            <ArticleBodyTemplate
              content={content}
            />, {});
          const renderOutput = renderer.getRenderOutput();
          const paragraphTags = renderOutput.props.children;
          for (const index in content) {
            paragraphTags[index].type.should.equal('p');
            /* eslint-disable no-underscore-dangle */
            paragraphTags[index].props.dangerouslySetInnerHTML.__html.should.equal(content[index]);
            /* eslint-enable no-underscore-dangle */
          }
        });

        it('with unknown component exceptions when not within props.components', () => {
          const content = [
            'A long time ago in a galaxy far, far away....',
            'It is a period of civil war.',
            {
              'component': 'UnknownComponent',
              'props': {},
            },
            'Rebel spaceships, striking from a hidden base, ' +
            'have won their first victory against the evil Galactic Empire.',
          ];
          (() => {
            renderer.render(
              <ArticleBodyTemplate
                content={content}
              />, {});
          }).should.throw(Error, 'Unknown component UnknownComponent');
        });

      });

      describe('with components specified', () => {

        it('with a specific element tag for Specific component defined within props.components', () => {
          const content = [
            'A long time ago in a galaxy far, far away....',
            'It is a period of civil war.',
            {
              'component': 'SpecialComponent',
              'props': {
                'className': 'SpecialComponentDiv',
              },
              'content': [
                'Bang!',
                'Crash!',
              ],
            },
            'Rebel spaceships, striking from a hidden base, ' +
            'have won their first victory against the evil Galactic Empire.',
          ];
          const components = {
            'SpecialComponent': 'div',
          };
          (() => {
            renderer.render(
              <ArticleBodyTemplate
                components={components}
                content={content}
              />, {});
          }).should.not.throw(Error, 'Unknown component SpecialComponent');
          const renderOutput = renderer.getRenderOutput();

          const contentTags = renderOutput.props.children;
          contentTags[2].type.should.equal('div');
          contentTags[2].props.className.should.equal('SpecialComponentDiv');

          const paragraphTags = contentTags[2].props.children;
          for (const index in content[2].content) {
            paragraphTags[index].type.should.equal('p');
            /* eslint-disable no-underscore-dangle */
            paragraphTags[index].props.dangerouslySetInnerHTML.__html.should.equal(content[2].content[index]);
            /* eslint-enable no-underscore-dangle */
          }
        });

      });

    });

  });

});
