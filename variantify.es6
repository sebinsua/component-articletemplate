import React, { PropTypes } from 'react';

// TODO: It would be nice to be able to
//       take a className directly still?
export default function variantify(className, { variantTypes = [], defaultVariantType = '' }) {
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

    static get className() {
      return className;
    }

    get variantClassName() {
      const variantType = this.props.variantType;
      return variantType ? `${variantType}-${className}` : null;
    }

    getSpecifiedClassNamesGetter(variantType) {
      return (specifiedClassName = className) => {
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
      const className = VariantComponent.className;
      const variantClassName = this.variantClassName;
      const classNameList = getClassNameList();
      return (
        <ComposedComponent
          variantType={variantType}
          getClassNameList={getClassNameList}
          className={className}
          variantClassName={variantClassName}
          classNameList={classNameList}
          {...this.props}
        />
      );
    }
  };
}
