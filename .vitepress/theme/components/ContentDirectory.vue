<script setup lang="ts">
import { withBase } from "vitepress";
import { contentCount, contentGroups, supplementaryCount } from "../../generated/content-index";
</script>

<template>
  <section id="contents" class="content-directory">
    <p class="eyebrow">CONTENTS · {{ contentCount }} 章正文 · {{ supplementaryCount }} 篇工具与案例</p>
    <h2>从实践中整理出的<br />AI 产品工作方法</h2>
    <div v-for="group in contentGroups" :key="group.directory" class="content-group">
      <div class="group-heading">
        <span>{{ group.kicker }}</span>
        <h3>{{ group.text }}</h3>
        <small>{{ group.chapterLabel }}</small>
      </div>
      <ul>
        <li v-for="item in group.items" :key="item.link"><a :href="withBase(item.link)">{{ item.text }}</a></li>
      </ul>
    </div>
    <footer class="home-signature">
      <p>胡耀文</p>
      <span>持续记录 AI 产品实践中的有效判断与真实问题。</span>
    </footer>
  </section>
</template>
