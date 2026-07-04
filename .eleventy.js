/**
 * Eleventy 配置文件
 *
 * 目录结构说明：
 *   docs/           → 输入目录（Markdown 源文件 + 模板）
 *   _site/          → 输出目录（构建产物，git-ignored）
 *   style/          → 静态资源，通过 passthrough 直接复制到 _site/style/
 *
 * Permalink 规则（在 docs/docs.json 中配置）：
 *   - 有 tags 的页面：{tag}/{slug}.html（如 blog/blog-1.html）
 *   - 无 tags 的页面：{slug}.html（如 index.html）
 */
module.exports = function (eleventyConfig) {
    // 允许处理的模板格式：Markdown + Nunjucks
    eleventyConfig.setTemplateFormats(['md', 'njk']);

    // 将 style/ 目录原样复制到输出目录，不经过模板引擎处理
    // 这样 _site/style/style.css 就可以直接被页面引用
    eleventyConfig.addPassthroughCopy('style');

    return {
        dir: {
            input: 'docs',           // 源文件目录
            output: '_site',         // 构建输出目录
            includes: '_includes'    // 模板布局目录（相对于 input）
        },
        markdownTemplateEngine: 'njk'  // Markdown 中可以使用 Nunjucks 语法
    };
};
