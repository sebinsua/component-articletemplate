# component-articletemplate
> An article template.

## TODO

- [ ] `data-section={this.props.section}` This is not what it's meant to do.
- [ ] Standard ArticleTemplate `render()` is not very clean. Need to lose
      `if-else` mess and separate into smaller components.
- [ ] `variantTypes` needs to be shared in the files it is used. See `Variant`
      definitions.
- [ ] `variantify` might handle some of the classnames stuff? The
      interface within the child is hella messy currently.
- [ ] `renderHeader()` and other `if-else`ing parts should not exist.
      Instead we should pick up the correct `Header` from a definition that is
      passed into the `ArticleTemplate`.
- [ ] Move everything into `template.es6` so that `index.es6` can just pass in
      Variant key-value definitions (see above).
- [ ] All of this `Variant` definition stuff should live within `variants/` to
      begin with.
- [ ] Find a way for the relationship between the HOC and the child to be more
      explicit.
