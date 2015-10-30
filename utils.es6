import { PropTypes } from 'react';

import pick from 'lodash.pick';

export const isComponent = PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]);

export const defaultGenerateClassNameList = (defaultClassName) => [ defaultClassName ];

export const getSrcSet = (image) => Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');

/**
 * Given a `Component` and some `props`, this will return only the `props`
 * defined within the `Component`s `propTypes`.
 *
 * It should be used whether you would normally use `...this.props` and
 * don't wish to accidentally send unexpected data through.
 */
export function passthroughComponentPropTypesOnly({ propTypes = {} }, props) {
  return pick(props, Object.keys(propTypes));
}
