module.exports = {
  pages: {
    index: {
      entry: "example/main.js",
    },
  },
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
};
