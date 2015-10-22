/* eslint react/no-multi-comp: 0, id-length: 0, id-match: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import variantify, { withVariedInnerComponents, withVariantClassNameList } from '../variantify';

import chai from 'chai';
const should = chai.should();
describe('variantify', () => {

  it('the composition of the HOCs should be exposed as default', () => {
    should.exist(variantify);
  });

  describe('withVariedInnerComponents', () => {

    describe('props.components', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      describe('with no components in composed component\'s defaultProps and no matching variantTypeComponents', () => {

        it('should pass in an empty object', () => {
          class ComposedComponent extends React.Component {
            render() {
              return <div>Hello there <span>fellow developer</span>.</div>;
            }
          }

          const variantTypeComponents = {
            'variant-not-matched': {
              'ArticleHeader': 'component-goes-here',
            },
          };
          const defaultVariantType = 'default-variant';
          const VariantComponent = withVariedInnerComponents(
            variantTypeComponents,
            defaultVariantType
          )(ComposedComponent);
          renderer.render(<VariantComponent variantType="default-variant" />);
          const renderOutput = renderer.getRenderOutput();
          renderOutput.type.should.equal(ComposedComponent);
          renderOutput.props.components.should.deep.equal({});
        });

      });

      describe('with components in composed component\'s defaultProps and no matching variantType or default', () => {

        it('should pass in the defaultProps components', () => {
          class ComposedComponent extends React.Component {
            static get defaultProps() {
              return {
                'components': {
                  'default-variant': {
                    'ArticleHeader': 'component-found-here',
                  },
                },
              };
            }

            render() {
              return <div>Hello there <span>fellow developer</span>.</div>;
            }
          }

          const variantTypeComponents = {
            'variant-not-matched': {
              'ArticleHeader': 'component-goes-here',
            },
          };
          const defaultVariantType = 'default-variant';
          const VariantComponent = withVariedInnerComponents(
            variantTypeComponents,
            defaultVariantType
          )(ComposedComponent);
          renderer.render(<VariantComponent variantType="default-variant" />);
          const renderOutput = renderer.getRenderOutput();
          renderOutput.type.should.equal(ComposedComponent);
          renderOutput.props.components.should.deep.equal(ComposedComponent.defaultProps.components);
        });

      });

      describe('with no components in composed component\'s defaultProps and matching variantType', () => {

        it('should pass in the matching variantTypeComponents object', () => {
          class ComposedComponent extends React.Component {
            render() {
              return <div>Hello there <span>fellow developer</span>.</div>;
            }
          }

          const variantTypeComponents = {
            'default-variant': {
              'ArticleHeader': 'component-goes-here',
            },
            'picked-variant': {
              'ArticleHeader': 'picked-component',
            },
          };
          const defaultVariantType = 'default-variant';
          const variantType = 'picked-variant';
          const VariantComponent = withVariedInnerComponents(
            variantTypeComponents,
            defaultVariantType
          )(ComposedComponent);
          renderer.render(<VariantComponent variantType={variantType} />);
          const renderOutput = renderer.getRenderOutput();
          renderOutput.type.should.equal(ComposedComponent);
          renderOutput.props.components.should.deep.equal(variantTypeComponents[variantType]);
        });

      });

      describe('with no components in composed component\'s defaultProps and matching default', () => {

        it('should pass in the default variantTypeComponents object', () => {
          class ComposedComponent extends React.Component {
            render() {
              return <div>Hello there <span>fellow developer</span>.</div>;
            }
          }

          const variantTypeComponents = {
            'default-variant': {
              'ArticleHeader': 'component-goes-here',
            },
          };
          const defaultVariantType = 'default-variant';
          const VariantComponent = withVariedInnerComponents(
            variantTypeComponents,
            defaultVariantType
          )(ComposedComponent);
          renderer.render(<VariantComponent variantType="does-not-match" />);
          const renderOutput = renderer.getRenderOutput();
          renderOutput.type.should.equal(ComposedComponent);
          renderOutput.props.components.should.deep.equal(variantTypeComponents[defaultVariantType]);
        });

      });

    });

  });

  describe('withVariantClassNameList', () => {

    describe('props.generateClassNameList', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should be passed into the composed component', () => {
        class ComposedComponent extends React.Component {
          render() {
            return <div>Hello there <span>fellow developer</span>.</div>;
          }
        }

        const VariantComponent = withVariantClassNameList({
          variantTypes: [ 'variant-a', 'variant-b', 'variant-c' ],
          defaultVariantType: 'variant-a',
        })(ComposedComponent);
        renderer.render(<VariantComponent variantType="variant-a" />);
        const renderOutput = renderer.getRenderOutput();
        renderOutput.type.should.equal(ComposedComponent);
        renderOutput.props.generateClassNameList.should.be.a('function');
      });

      describe('should generate a list containing', () => {

        it('the class that is passed in', () => {
          class ComposedComponent extends React.Component {
            render() {
              return <div>Hello there <span>fellow developer</span>.</div>;
            }
          }

          const VariantComponent = withVariantClassNameList({
            variantTypes: [ 'variant-a', 'variant-b', 'variant-c' ],
            defaultVariantType: 'variant-a',
          })(ComposedComponent);
          renderer.render(<VariantComponent variantType="variant-a" />);
          const renderOutput = renderer.getRenderOutput();
          const generateClassNameList = renderOutput.props.generateClassNameList;
          generateClassNameList('ClassName').should.include('ClassName');
        });

        it('a variant-specific class from the class that is passed in; iff variantType', () => {
          class ComposedComponent extends React.Component {
            render() {
              return <div>Hello there <span>fellow developer</span>.</div>;
            }
          }

          const VariantComponent = withVariantClassNameList({
            variantTypes: [ 'variant-a', 'variant-b', 'variant-c' ],
            defaultVariantType: 'variant-a',
          })(ComposedComponent);
          renderer.render(<VariantComponent variantType="variant-a" />);
          const renderOutput = renderer.getRenderOutput();
          const generateClassNameList = renderOutput.props.generateClassNameList;
          generateClassNameList('ClassName').should.include('variant-a-ClassName');
        });

        it('no variant-specific class from the class that is passed in; iff no variantType', () => {
          class ComposedComponent extends React.Component {
            render() {
              return <div>Hello there <span>fellow developer</span>.</div>;
            }
          }

          const VariantComponent = withVariantClassNameList({
            variantTypes: [ 'variant-a', 'variant-b', 'variant-c' ],
            defaultVariantType: null,
          })(ComposedComponent);
          renderer.render(<VariantComponent />);
          const renderOutput = renderer.getRenderOutput();
          const generateClassNameList = renderOutput.props.generateClassNameList;
          generateClassNameList('ClassName').should.not.include('variant-a-ClassName');
        });

      });

    });

  });

});
