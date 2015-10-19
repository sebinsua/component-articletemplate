# component-articletemplate
> An article template.

- [ ] Come up with a better one-liner description.
- [ ] Describe what it does.
- [ ] Describe the components architecture in two or three sentences.

## Goals

- [ ] Write the goals here as a checklist with some emojis thrown in for good measure.

## Refactor

- [ ] Encapsulate some of the variants components more.
- [ ] Refactor the generic items and wrappers by removing the grid styling which was applied to them.
- [ ] `example.es6` should:
      (1.) Load the standard ArticleTemplate from `index.es6`
      (2.) Load the standard WorldIf variant from `variants/world-if/index.es6`
      (3.) Load the standard WorldIn variant from `variants/world-in/index.es6`

## Further thoughts

- [ ] `ArticleBodyTemplate` can also be wrapped with `withVariedInnerComponents`.
- [ ] `renderJSONContents` from within the `body.es6` could be a component (though I do not know whether stateless components can recurse or not).
- [ ] Take some of the inner modules inside and create new repos for them.
