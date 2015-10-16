export default function passthroughComponentPropTypesOnly(Component, props) {
  const propTypeKeys = Object.keys(Component.propTypes || {});
  let newProps = {};
  for (const propKey in props) {
    if (propTypeKeys.indexOf(propKey) !== -1) {
      newProps[propKey] = props[propKey];
    }
  }
  return newProps;
}
