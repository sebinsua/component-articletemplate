/* eslint object-shorthand: 0 */
import { WifHeader } from './header';
import { WifSubheader } from './subheader';
import ArticleBody from '../../body';
import { WifFooter } from './footer';

import variantify from '../../variantify';
import ArticleTemplate from '../../article';

const defaults = {
  defaultVariant: 'world-if',
  variants: [
    'world-if',
  ],
};

const variantInnerComponents = {
  'world-if': {
    ArticleHeader: WifHeader,
    ArticleSubheader: WifSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WifFooter,
  },
};

const vary = variantify(defaults, variantInnerComponents);
export default vary(ArticleTemplate);
