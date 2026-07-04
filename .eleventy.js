/**
 * Eleventy 配置文件
 *
 * 目录结构说明：
 *   src/           → 输入目录（Markdown 源文件 + 模板）
 *   _site/          → 输出目录（构建产物，git-ignored）
 *   src/style/      → Sass 源文件，编译后输出到 _site/style/style.css
 *   src/style/prism-theme.css → 语法高亮主题，通过 passthrough 直接复制
 *   src/js/         → JS 文件，通过 passthrough 直接复制
 *   assets/img/     → 源图片目录（供 eleventy-img 处理，输出到 _site/img/）
 *
 * Permalink 规则（在 src/src.json 中配置）：
 *   - 有 tags 的页面：{tag}/{slug}.html（如 blog/blog-1.html）
 *   - 无 tags 的页面：{slug}.html（如 index.html）
 */
const sass = require("sass");
const fs = require("fs");
const path = require("path");
const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

// 编译 Sass + PostCSS（Autoprefixer）函数
async function compileSass() {
    try {
        const result = sass.compile("src/style/style.scss", { style: "compressed" });
        const postcssResult = await postcss([autoprefixer()]).process(result.css, { from: "src/style/style.css" });
        fs.mkdirSync("_site/style", { recursive: true });
        fs.writeFileSync("_site/style/style.css", postcssResult.css);
    } catch (error) {
        console.error("[Sass/PostCSS] 编译失败:", error.message || error);
        throw error;
    }
}

module.exports = function (eleventyConfig) {
    // 允许处理的模板格式：Markdown + Nunjucks
    eleventyConfig.setTemplateFormats(['md', 'njk']);

    // 注册语法高亮插件，仅在 Markdown 文件中启用
    eleventyConfig.addPlugin(syntaxHighlight, { templateFormats: ["md"] });

    // Image shortcode for responsive images
    eleventyConfig.addShortcode("image", async function (src, alt, widths = [300, 600]) {
        const fullPath = path.join(path.dirname(this.page.inputPath), src);

        const options = {
            widths: widths,
            formats: ["webp", "jpeg"],
            outputDir: "_site/img/",
            urlPath: "/img/"
        };

        const stats = await Image(fullPath, options);
        const webp = stats.webp;
        const jpeg = stats.jpeg;

        return `<picture>
            ${webp.map((entry) => `<source type="image/webp" srcset="${entry.srcset}">`).join("\n")}
            <img src="${jpeg[0].url}" width="${jpeg[0].width}" height="${jpeg[0].height}" alt="${alt}" loading="lazy" decoding="async">
        </picture>`;
    });

    // 将资源文件原样复制到输出目录
    eleventyConfig.addPassthroughCopy('/js');
    eleventyConfig.addPassthroughCopy('/assets');

    // 构建前编译 Sass
    eleventyConfig.on("beforeBuild", compileSass);

    // 监听 style/ 目录变化
    eleventyConfig.addWatchTarget("src/style/");

    // .scss 文件变化时重新编译
    eleventyConfig.on("watch", async (changedFiles) => {
        if (changedFiles.some(f => f.endsWith(".scss"))) {
            await compileSass();
        }
    });

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            data: '_data'
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: "njk",
        templateFormats: ["njk", "html", "md"]
    };
};
