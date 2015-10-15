# component-articletemplate
> An article template.

## TODO

- [ ] Refactor.
- [x] `renderHeader()` and other `if-else`ing parts should not exist.
      Instead we should pick up the correct `Header` from definitions
      passed into the `ArticleTemplate`.
- [x] `variantify` could maybe be something else, for handling multiple components.
- [ ] getClassNameList should not be passed directly into the WifArticleHeader, etc.
- [ ] Encapsulate some components more.
- [ ] Decide where variantify is over-complicating logic.
- [ ] Decide whether the separation between high-level components is correct:
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
- [ ] Work out where we can remove classes, to remove components, and instead using the elements to contain their styling as we are meant to.
