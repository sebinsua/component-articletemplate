# [component-articletemplate](http://economist-components.github.io/component-library/#@economist/component-articletemplate)
> A template with which to render articles.

## Goals

- [x] Stateless.
- [x] Supports different types of article content.
- [x] Allows article variants with radically-different HTML to co-exist.
- [x] Separation of styling concerns using variant-specific classes.  
- [x] Easy switching between variants using a property.

## Design

An `ArticleTemplate` is a description of how an `ArticleHeader`,
`ArticleSubheader`, `ArticleBody` and `ArticleFooter` should render a page.

By default it will render a simple article page, however the use of the
higher-order component `withVariedInnerComponents` allows the developer to
declaratively specify the different article variants. Both `ArticleTemplate`
and `ArticleBodyTemplate` can be wrapped to this effect.

All inner components receive a `generateClassNameList` which can have a
class name passed into it so they generate additional variant classes.
This function is created from the usage of the higher-order component `withVariantClassNameList`.

Variant-specific `ArticleHeader`, `ArticleSubheader`, `ArticleBody` and `ArticleFooter` components can be made with help from some basic components exposed where the default components are defined.

## Usage

[See `example.es6` for usage instructions.](./example.es6)

## Install

```
npm install --save @economist/component-articletemplate;
```

## Run tests

```
npm test;
```

## Creating a new variant

Create an `index.es6` like so:
```javascript
import variantify from '@economist/component-articletemplate/variantify';
import ArticleTemplate from '@economist/component-articletemplate';

import { VariantHeader, VariantSubheader, VariantBody, VariantFooter } from './variant-items';
import { OtherVariantHeader, OtherVariantSubheader, OtherVariantBody, OtherVariantFooter } from './other-variant-items';

const defaults = {
  defaultVariantType: 'variant-name',
  variantTypes: [
    'variant-name',
    'other-variant-name',
  ],
};

const variantInnerComponents = {
  'variant-name': {
    ArticleHeader: VariantHeader,
    ArticleSubheader: VariantSubheader,
    ArticleBody: VariantBody,
    ArticleFooter: VariantFooter,
  },
  'other-variant-name': {
    ArticleHeader: OtherVariantHeader,
    ArticleSubheader: OtherVariantSubheader,
    ArticleBody: OtherVariantBody,
    ArticleFooter: OtherVariantFooter,
  },
};

export default variantify(defaults, variantInnerComponents)(ArticleTemplate);
```

Create an `index.css` like so, and import it in your `App`'s styling:
```css
.variant-name-ArticleTemplate--container {
  // ...
}
```
