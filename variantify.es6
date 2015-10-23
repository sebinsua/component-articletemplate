import React, { Component, PropTypes } from 'react';
import compose from 'lodash.compose';

export function withVariedInnerComponents(variantNameComponents = {}, defaultVariantName) {
  return (ComposedComponent) => class WithVariedInnerComponents extends Component {
    render() {
      const { variantName, ...remainingProps } = this.props;
      // If variant-specific omponents were found then passthrough,
      // otherwise just pass the remainingProps and variantName.
      const components = Object.assign(
        (ComposedComponent.defaultProps || {}).components || {},
        variantNameComponents[variantName] || variantNameComponents[defaultVariantName]
      );
      return (
        <ComposedComponent
          variantName={variantName}
          components={components}
          {...remainingProps}
        />
      );
    }
  };
}

export function withVariantClassNameList({ variantNames = [], defaultVariantName }) {
  return (ComposedComponent) => class WithVariantClassNameListComponent extends Component {

    static get propTypes() {
      return {
        variantName: PropTypes.oneOf(variantNames),
      };
    }

    static get defaultProps() {
      return {
        variantName: defaultVariantName,
      };
    }

    getVariantClassNameListGetter(variantName) {
      return (specifiedClassName) => {
        const classNameList = [ specifiedClassName ];
        if (variantName) {
          classNameList.unshift(`${variantName}-${specifiedClassName}`);
        }
        return classNameList;
      };
    }

    render() {
      const { variantName, ...remainingProps } = this.props;
      const generateClassNameList = this.getVariantClassNameListGetter(variantName);
      return (
        <ComposedComponent
          variantName={variantName}
          generateClassNameList={generateClassNameList}
          {...remainingProps}
        />
      );
    }
  };
}

export default function variantify(defaults = {}, variantNameComponents = {}) {
  return compose(
    withVariedInnerComponents(variantNameComponents, defaults.defaultVariantName),
    withVariantClassNameList(defaults)
  );
}
