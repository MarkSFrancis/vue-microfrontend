// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: [
    // Grab a layer from a remote GitHub repository. This one is from the repository https://github.com/manniL/alexander-lichter-nuxt-layers, and its `/base` subfolder (which contains a layer), using the latest version from in the `main` branch
    // Reference: https://github.com/unjs/giget?tab=readme-ov-file#examples
    "gh:manniL/alexander-lichter-nuxt-layers/base#main",
    // Grab a layer from a local folder. This one is the localbase folder that's a sibling to this project
    "../localbase",
  ],
});
