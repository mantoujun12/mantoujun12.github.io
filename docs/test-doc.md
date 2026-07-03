---
title: 文章测试
layout: main.njk
---

{% from "card.njk" import card %}

# 一级标题
## 二级标题
文章内容
<section class="cardzone">
    {{ card("卡片标题", "卡片内容", "/pages/article1.html", "阅读") }}
    {{ card("另一篇文章", "这是另一篇的内容", "/pages/article2.html") }}
</section>