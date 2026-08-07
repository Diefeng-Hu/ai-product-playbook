<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  storageKey: string;
  htmlClass: string;
  buttonClass: string;
  collapseLabel: string;
  expandLabel: string;
  iconPath: string;
}>();

const collapsed = ref(false);

const applyState = () => document.documentElement.classList.toggle(props.htmlClass, collapsed.value);

const syncFromStorage = (event: StorageEvent) => {
  if (event.key !== props.storageKey) return;
  collapsed.value = event.newValue === "true";
  applyState();
};

onMounted(() => {
  try {
    collapsed.value = localStorage.getItem(props.storageKey) === "true";
  } catch {}
  applyState();
  window.addEventListener("storage", syncFromStorage);
});

onUnmounted(() => window.removeEventListener("storage", syncFromStorage));

function toggle() {
  collapsed.value = !collapsed.value;
  try {
    localStorage.setItem(props.storageKey, String(collapsed.value));
  } catch {}
  applyState();
}
</script>

<template>
  <button
    class="panel-toggle"
    :class="buttonClass"
    type="button"
    :aria-expanded="!collapsed"
    :aria-label="collapsed ? expandLabel : collapseLabel"
    :title="collapsed ? expandLabel : collapseLabel"
    @click="toggle"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path :d="iconPath" />
    </svg>
  </button>
</template>
