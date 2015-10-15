# component-articletemplate
> An article template.

## TODO

- [ ] Is there a benefit in using `variantify` in more places?
- [ ] Find a way for the relationship between the HOC and the child to be more
      explicit.
- [ ] Do all `<div>`s need to be components for className stuff to be nice?
- [ ] Standard `ArticleTemplate` `render()` is not very clean. Need to lose
      `if-else` mess and separate into smaller components.
```
      What is a ArticleTemplate?

      ArticleHeader
        -> ImageContainer (ArticleHeader)
        -> ArticleSubheader
      ArticleBody
      ArticleFooter
       -> ArticleByline
          ArticleSeeMore
```
- [ ] `renderHeader()` and other `if-else`ing parts should not exist.
      Instead we should pick up the correct `Header` from a definition that is
      passed into the `ArticleTemplate`.
- [ ] Move everything into `template.es6` so that `index.es6` can just pass in
      Variant key-value definitions (see above).
- [ ] All of this `Variant` definition stuff should live within `variants/` to
      begin with.
