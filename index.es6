import ArticleTemplate from './template';

import variants from './variants';
import { withVariedInnerComponents, withVariantClassNameList } from './variantify';

import { WifHeader, WifSubheader, WifFooter } from './variants/world-if';
import { WinHeader, WinPredictorsHeader, WinLeaderSubheader, WinSubheader, WinFooter } from './variants/world-in';
import ArticleBody from './body';

const variantTypeComponents = {
  'world-if': {
    ArticleHeader: WifHeader,
    ArticleSubheader: WifSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WifFooter,
  },
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

export default withVariantClassNameList(variants)(withVariedInnerComponents(variantTypeComponents)(ArticleTemplate));
