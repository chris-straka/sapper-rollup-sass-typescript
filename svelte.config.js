const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    postcss: true,
    scss: true,
    typescript: true
  })
};


/*
|--------------------------------------------------
| The only purpose of this file is to stop IDE errors in vscode
|--------------------------------------------------
*/