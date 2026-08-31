<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <main class="home-hero">
    <p class="eyebrow">AI PRODUCT PLAYBOOK · 2026</p>
    <h1>AI 产品经理<br />实践手册</h1>
    <p class="subtitle">从模型能力，到 Agent 平台，再到真实产品应用。</p>
    <p class="intro">不追逐模型新闻，也不提供万能答案。这里记录模型边界如何影响产品设计，怎样把不稳定能力封装成可靠系统，以及这些系统如何在真实任务中产生价值。</p>
    <div class="home-tags" aria-label="内容主题">
      <span>模型能力与边界</span>
      <span>Agent 系统与平台</span>
      <span>产品与应用</span>
    </div>
    <div class="home-links">
      <a class="start" :href="withBase('/model/01-designing-with-model-boundaries')">从第一章开始 <span aria-hidden="true">→</span></a>
      <a class="directory-link" href="#contents">按目录浏览 <span aria-hidden="true">↓</span></a>
      <a class="github-link" href="https://github.com/yaowenhu-pm/ai-product-playbook">GitHub <span aria-hidden="true">↗</span></a>
    </div>
    <VisitStats />
  </main>
</template>
