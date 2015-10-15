import React, { PropTypes } from 'react';

export default function variantify({ variantTypes = [], defaultVariantType = '' }) {
  return (ComposedComponent) => class VariantComponent extends React.Component {

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

    getSpecifiedClassNamesGetter(variantType) {
      return (specifiedClassName) => {
        const classNameList = [ specifiedClassName ];
        if (variantType) {
          classNameList.unshift(`${variantType}-${specifiedClassName}`);
        }
        return classNameList;
      };
    }

    render() {
      const variantType = this.props.variantType;
      const getClassNameList = this.getSpecifiedClassNamesGetter(variantType);
      return (
        <ComposedComponent
          variantType={variantType}
          getClassNameList={getClassNameList}
          {...this.props}
        />
      );
    }
  };
}
