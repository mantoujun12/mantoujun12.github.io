module.exports = function (eleventyConfig) {
    // Markdown 文件中的 {{ }} 原样保留，不被 Nunjucks 解析
    eleventyConfig.setTemplateFormats(['md', 'njk']);

    return {
        dir: {
            input: 'docs',
            output: 'pages',
            includes: '_includes'
        }
    };
};
