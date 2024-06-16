# Nuxt Microfrontend

## What are micro-frontends?

Micro-frontends are one or more websites composed of independently deployed composable pieces, which are then combined at runtime. 

They are commonly confused with micro-sites, which are multiple deployments to the same domain, with certain path patterns assigned to each deployment (for example, `site.com/blog` pointing to one deployment, and `site.com/shop` pointing to another). This allows for breaking up the website, but also creates inconsistency between the slices (such as an inconsistent navbar). 

## Demo app

Check out [./app](./app/) for the demo application, which uses both local and remote layers

## How does it work?

This project demonstrates how you can use [Nuxt Layers](https://nuxt.com/docs/getting-started/layers), combined with [unjs/giget](https://github.com/unjs/giget) to create a version of micro-frontends. 

Essentially, it pulls down all remote sources at compile time, then runs as a normal app. Depending on your use case, this **may not be** the ideal goal, as remote sources being updated will require local sources to be re-built, but this gives the dependent layers a chance to review + detect breaking changes. Find out more below, in the pros + cons section

The important parts of code are the `extends` within [nuxt.config.ts](./app/nuxt.config.ts), and the reference to the remote component 

### Pros

- Can organise by domains, employing DDD across multiple repositories, and deploy indepdendantly
- Teams can decide what components to make public for consumers, and what to keep private
- Breaking changes are handled at compile time, not in production
- Great DX. You'll still get type-safety, intellisense, and compilers checking your code's compatibility with the remote code
  - A caveat here is that Ctrl+click for "go to definition" breaks down when using remote sources
- Handling failure states (one dependent frontend site is down, or cannot be rendered successfully) is a non-issue, the compiler will simply reject the build if it can't access the depended upon layer's source
- Can version things via git branches and tags. [Reference](https://github.com/unjs/giget?tab=readme-ov-file#examples)

### Cons

- Changes will not be immediately deployed everywhere, unless triggers are setup manually in your CI/CD for cross-project deployments
  - Something like `dependabot` is more common, but this will mean there's lag when shipping updates
- No need to manage packages
- Layers aren't versioned by default, so unless consumers opt-in to versioning, they'll track the latest code in the default branch

### Closing thoughts

- Generally, if you're reaching for layers because you want a consistent style, you should consider local layers + use a monorepo. 
- If you're reaching for layers because you want loosely coupled components that are distributed between services, consider remote layers + a poly-repo approach
  - You might also want to consider packages, but remote layers are likely much simpler
