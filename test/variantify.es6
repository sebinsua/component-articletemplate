
xdescribe('variantify', () => {

  it('the composition of the HOCs should be exposed as default', () => {

  });

  describe('withVariedInnerComponents', () => {

    describe('props.components', () => {

      it('should be passed into the composed component', () => {

      });

      describe('with no components in composed component\'s defaultProps and no matching variantTypeComponents', () => {

        it('should pass in an empty object', () => {

        });

      });

      describe('with components in composed component\'s defaultProps and no matching variantType or default', () => {

        it('should pass in the defaultProps components', () => {

        });

      });

      describe('with no components in composed component\'s defaultProps and matching variantType', () => {

        it('should pass in the matching variantTypeComponents object', () => {

        });

      });

      describe('with no components in composed component\'s defaultProps and matching default', () => {

        it('should pass in the default variantTypeComponents object', () => {

        });

      });

    });

  });

  describe('withVariantClassNameList', () => {

    describe('props.generateClassNameList', () => {

      it('should be passed into the composed component', () => {

      });

      describe('should generate a list containing', () => {

        it('the class that is passed in', () => {

        });

        it('a variant-specific class from the class that is passed in; iff variantType', () => {

        });

        it('no variant-specific class from the class that is passed in; iff no variantType', () => {

        });

      });

    });

  });

});
