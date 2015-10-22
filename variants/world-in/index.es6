/* eslint object-shorthand: 0 */
import { WinHeader, WinPredictorsHeader } from './header';
import { WinSubheader, WinLeaderSubheader } from './subheader';
import ArticleBody from '../../body';
import { WinFooter } from './footer';

import variantify from '../../variantify';
import ArticleTemplate from '../../article';

const defaults = {
  defaultVariantType: 'world-in-main',
  variantTypes: [
    'world-in-main',
    'world-in-portrait',
    'world-in-leader',
    'world-in-predictors',
  ],
};

const variantInnerComponents = {
  'world-in-main': {
    ArticleHeader: WinHeader,
    ArticleSubheader: WinSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
  'world-in-portrait': {
    ArticleHeader: WinHeader,
    ArticleSubheader: WinSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
  'world-in-leader': {
    ArticleHeader: WinHeader,
    ArticleSubheader: WinLeaderSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
  'world-in-predictors': {
    ArticleHeader: WinPredictorsHeader,
    ArticleSubheader: WinSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
};

const vary = variantify(defaults, variantInnerComponents);
export default vary(ArticleTemplate);
