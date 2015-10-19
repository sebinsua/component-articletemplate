export const defaultGenerateClassNameList = (defaultClassName) => [defaultClassName];

export const getSrcSet = (image) => Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');

/**
 * Given a `Component` and some `props`, this will return only the `props`
 * defined within the `Component`s `propTypes`.
 *
 * It should be used whether you would normally use `...this.props` and
 * don't wish to accidentally send unexpected data through.
 */
export function passthroughComponentPropTypesOnly(Component, props) {
  const propTypeKeys = Object.keys(Component.propTypes || {});
  let newProps = {};
  for (const propKey in props) {
    if (propTypeKeys.indexOf(propKey) !== -1) {
      newProps[propKey] = props[propKey];
    }
  }
  return newProps;
}
