# mantoujun12 的个人网站

[![GitHub Pages](https://img.shields.io/github/deployments/mantoujun12/mantoujun12.github.io/github-pages)](https://mantoujun12.github.io)
[![许可证](https://img.shields.io/github/license/mantoujun12/mantoujun12.github.io)](https://github.com/mantoujun12/mantoujun12.github.io/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/mantoujun12/mantoujun12.github.io?style=social)](https://github.com/mantoujun12/mantoujun12.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Eleventy](https://img.shields.io/badge/Eleventy-000000?style=flat&logo=eleventy&logoColor=white)](https://www.11ty.dev)

你好！这是我的个人网站，从零开始搭建，也是我的第一个 Web 项目。

## 关于

一个托管在 GitHub Pages 上的静态个人网站，使用原生 HTML/CSS 编写，由 [Eleventy](https://www.11ty.dev/) 作为静态站点生成器驱动。简洁、快速，无框架开销。

## 技术栈

- **HTML5 / CSS3** — 核心结构与样式
- **JavaScript** — 轻量交互
- **Eleventy** — 静态站点生成
- **GitHub Actions** — 自动化部署
- **GitHub Pages** — 托管

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run serve

# 生产构建
npm run build
```

## 项目结构

```
├── docs/               # 源内容（Markdown 与模板）
│   ├── _includes/      # 布局与局部模板
│   └── docs.json       # 目录级数据（永久链接、布局）
├── pages/              # 构建输出（已 git 忽略）
├── style/              # CSS 样式表
├── .eleventy.js        # Eleventy 配置
└── .github/workflows/  # CI/CD 流水线
```

## 许可证

本项目基于 [MIT 许可证](LICENSE) 授权。

> 内容包含 AI 生成内容。
