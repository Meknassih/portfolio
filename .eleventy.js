const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("titlecase", function (value) {
    if (value)
      return value[0].toUpperCase() + value.slice(1);
    else return "";
  });

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addPassthroughCopy('src/assets');

  return {

    templateFormats: [
      "md",
      "njk",
    ],

    dir: {
      input: "src/",
      includes: "_includes",
      output: "_site"
    },

    passthroughFileCopy: true

  };
};
