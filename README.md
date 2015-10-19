# component-articletemplate
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
