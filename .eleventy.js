module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(['md', 'njk']);

    return {
        dir: {
            input: 'docs',
            output: 'pages',
            includes: '_includes'
        },
        markdownTemplateEngine: 'njk'
    };
};
