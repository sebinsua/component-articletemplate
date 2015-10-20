import { WifHeader } from './header';
import { WifSubheader } from './subheader'
import ArticleBody from '../../body';
import { WifFooter } from './footer';

import compose from 'lodash.compose';
import { withVariantClassNameList, withVariedInnerComponents } from '../../variantify';
import ArticleTemplate from '../../template';

export const defaults = {
  defaultVariantType: 'world-if',
  variantTypes: [
    'world-if',
  ],
};

export const variantInnerComponents = {
  'world-if': {
    ArticleHeader: WifHeader,
    ArticleSubheader: WifSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WifFooter,
  },
};

const vary = compose(
  withVariantClassNameList(defaults),
  withVariedInnerComponents(variantInnerComponents, defaults.defaultVariantType)
);
export default vary(ArticleTemplate);
