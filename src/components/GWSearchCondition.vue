<template>
  <div class="gw-search-root">
    <slot name="search-items"></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style type="scss" scoped>
/* 样式可以根据需要进行调整 */
.gw-search-root {
  margin: 5px 0;
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: row;
  z-index: 2000;
}

.search-item {
  display: inline-flex;
  margin-right: 5px;
}
</style>
