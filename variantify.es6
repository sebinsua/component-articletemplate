import React, { PropTypes } from 'react';

export default function variantify(defaultClassName, variantTypes = [], defaultVariantType = '') {
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

    get defaultClassName() {
      return defaultClassName;
    }

    getVariantClassNamesGetter(variantType) {
      return (className = defaultClassName) => {
        return !variantType ? [ className ] : [ className, `${variantType}-${className}` ];
      };
    }

    render() {
      const variantType = this.props.variantType;

      return (
        <ComposedComponent
          defaultClassName={this.defaultClassName}
          getVariantClassNames={this.getVariantClassNamesGetter(variantType)}
          {...this.props}
        />
      );
    }
  };
}
