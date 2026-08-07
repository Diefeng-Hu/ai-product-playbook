<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import PanelToggle from "./components/PanelToggle.vue";
</script>

<template>
  <component :is="DefaultTheme.Layout">
    <template #nav-bar-content-after>
      <PanelToggle
        storage-key="playbook-sidebar-collapsed"
        html-class="sidebar-collapsed"
        button-class="sidebar-toggle"
        collapse-label="收起目录"
        expand-label="展开目录"
        icon-path="M5 6h10M5 12h10M5 18h10M19 8v8M16 12h5"
      />
      <PanelToggle
        storage-key="playbook-outline-collapsed"
        html-class="outline-collapsed"
        button-class="outline-toggle"
        collapse-label="收起本页目录"
        expand-label="展开本页目录"
        icon-path="M7 6h10M7 12h10M7 18h10M5 8v8M3 12h5"
      />
    </template>
  </component>
</template>
