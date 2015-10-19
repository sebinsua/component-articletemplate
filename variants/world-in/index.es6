import { WinHeader, WinPredictorsHeader} from './header';
import { WinSubheader, WinLeaderSubheader } from './subheader';
import ArticleBody from '../../body';
import { WinFooter } from './footer';

import { withVariantClassNameList, withVariedInnerComponents } from '../../variantify';
import ArticleTemplate from '../../template';

export const defaults = {
  defaultVariantType: 'world-in-base',
  variantTypes: [
    'world-in-base',
    'world-in-portrait',
    'world-in-leader',
    'world-in-predictors',
  ],
};

export const variantInnerComponents = {
  'world-in-base': {
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

export default withVariantClassNameList(defaults)(withVariedInnerComponents(variantInnerComponents)(ArticleTemplate));
