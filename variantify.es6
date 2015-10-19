import React, { PropTypes } from 'react';

export function withVariedInnerComponents(variantTypeComponents = {}) {
  return (ComposedComponent) => class VariedComponent extends React.Component {
    render() {
      const { variantType, ...remainingProps } = this.props;
      const components = variantTypeComponents[variantType] || {};
      return (
        <ComposedComponent
          variantType={variantType}
          components={components}
          {...remainingProps}
        />
      );
    }
  };
}

export function withVariantClassNameList({ variantTypes = [], defaultVariantType = '' }) {
  return (ComposedComponent) => class WithVariantClassNameListComponent extends React.Component {

    static get propTypes() {
      return {
        variantType: variantTypes.length ? PropTypes.oneOf(variantTypes) : PropTypes.string,
      };
    }

    static get defaultProps() {
      return {
        variantType: defaultVariantType,
      };
    }

    getVariantClassNameListGetter(variantType) {
      return (specifiedClassName) => {
        const classNameList = [ specifiedClassName ];
        if (variantType) {
          classNameList.unshift(`${variantType}-${specifiedClassName}`);
        }
        return classNameList;
      };
    }

    render() {
      const { variantType, ...remainingProps } = this.props;
      const getClassNameList = this.getVariantClassNameListGetter(variantType);
      return (
        <ComposedComponent
          variantType={variantType}
          getClassNameList={getClassNameList}
          {...remainingProps}
        />
      );
    }
  };
}
