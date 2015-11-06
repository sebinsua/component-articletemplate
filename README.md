# [component-articletemplate](http://economist-components.github.io/component-library/#@economist/component-articletemplate)
> A template with which to render articles

## Goals

- [x] Stateless.
- [x] Supports different types of article content.
- [x] Developed so that article variants with radically-different HTML can co-exist.
- [x] Separation of styling concerns using variant-specific classes.

## Design

An `ArticleTemplate` is a description of how an `ArticleHeader`,
`ArticleSubheader`, `ArticleBody` and `ArticleFooter` should render a page.

By default it will render a very basic article template, however [the use of the higher-order components within `component-variantify`](http://github.com/economist-components/component-variantify) allow the developer to declaratively specify the different article variants. Both `ArticleTemplate` and `ArticleBodyTemplate` can be wrapped to this effect.

All inner components receive a `generateClassNameList` which can have a class name passed into it so they generate additional variant classes. This function is created from the usage of the higher-order component `withVariantClassNameList`.

Variant-specific `ArticleHeader`, `ArticleSubheader`, `ArticleBody` and `ArticleFooter` components can be made with help from some basic components exposed where the default components are defined.

## Variants

- [`component-wif-articlepage`](http://github.com/economist-components/component-wif-articlepage)
- [`component-win-articlepage`](http://github.com/economist-components/component-win-articlepage)

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
