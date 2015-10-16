# component-articletemplate
> An article template.

- [ ] Come up with a better one-liner description.
- [ ] Describe what it does.
- [ ] Describe the components architecture in two or three sentences.

## Goals

- [ ] Write the goals here as a checklist with some emojis thrown in for good measure.

## Refactor

- [ ] `variants/index.es6` currently sets up the defaults, but the defaults should not be shared; world-in might have some world-if might have others. The `variantDefaults` should be moved internally into this. Some `defaultProps` with sensible values for these properties should exist within `withVariantClassNameList`.
- [ ] `index.es6` currently composes the different variants, but it shouldn't since it is variants which should pass in their variants. `index.es6` should just expose the `ArticleTemplate` itself which should have defaults.
- [ ] `example.es6` should:
      (1.) Load the standard ArticleTemplate from `index.es6`
      (2.) Load the standard WorldIf variant from `variants/world-if/index.es6`
      (3.) Load the standard WorldIn variant from `variants/world-in/index.es6`
- [ ] `ArticleTemplate` should have `defaultProps` `components`.
- [ ] Remove the commented out code from `ArticleTemplate` after checking that the `propTypes` exist in their correct variant components.
- [ ] `withVariantClassNameList` should be only used inside `ArticleTemplate` (the edge). - - [ ] `withVariedInnerComponents` should be used for generating variant versions of both `ArticleTemplate` and `ArticleBodyTemplate`.
- [ ] `ArticleBody` should be called `ArticleBodyTemplate`.
- [ ] `ArticleBodyTemplate` should use `withVariedInnerComponents`.
- [ ] Document what `passthroughComponentPropTypesOnly` does and move it into `utils.es6`.
- [ ] `ArticleHeader`, `ArticleSubheader`, `ArticleFooter` should belong to files named `header.es6`, `subheader.es6` and `footer.es6`, etc.
- [ ] `ArticleContainer` should stay where it is within `template.es6`.
- [ ] `ArticleBodyContainer` should stay where it is.
- [ ] `getSrcSet` should belong to `utils.es6`.
- [ ] `body.es6#L27` should have the content PropType defined in utils to be used earlier on within the template, too.
- [ ] `getClassNameList` should be renamed to `generateClassNameList`.
- [ ] `generateClassNameList` should have a sensible default in `utils.es6` for components that have not had it set correctly.
- [ ] `renderJSONContents` from within the `body.es6` should be moved into its own file. It could even be a component (though I do not know whether stateless components can recurse or not).
- [ ] `variants/${variant-name}/index.es6` should be similar to `index.es6` in that it should only contain a single variant of the template. This is its only job.
- [ ] The contents of `variants/${variant-name}/index.es6` should end up within `variants/${variant-name}/items.es6`, `variants/${variant-name}/header.es6`, `variants/${variant-name}/subheader.es6` and `variants/${variant-name}/footer.es6`.
- [ ] Encapsulate some of the variants components more.
- [ ] Refactor the generic items and wrappers by removing the grid styling which was applied to them.
- [ ] Take some of the inner modules inside and create new repos for them.
