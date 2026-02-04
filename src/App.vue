<template>
  <div id="app">
    <ComponentShowcase />
  </div>
</template>

<script setup>
import ComponentShowcase from './examples/ComponentShowcase.vue'
</script>

<style>
#app {
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
}
</style>
