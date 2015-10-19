import React, { PropTypes } from 'react';

export function withVariedInnerComponents(variantTypeComponents = {}) {
  return (ComposedComponent) => class VariedComponent extends React.Component {
    render() {
      const { variantType, ...remainingProps } = this.props;
      // If variant-specific omponents were found then passthrough,
      // otherwise just pass the remainingProps and variantType.
      const components = variantTypeComponents[variantType];
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
        variantType: PropTypes.oneOf(variantTypes),
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
      const generateClassNameList = this.getVariantClassNameListGetter(variantType);
      return (
        <ComposedComponent
          variantType={variantType}
          generateClassNameList={generateClassNameList}
          {...remainingProps}
        />
      );
    }
  };
}
