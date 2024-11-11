<script setup lang="ts">
import {useDark} from "@vueuse/core";

let isDark = useDark();
</script>

<template>
    <div style="margin-bottom: 1rem; " @click="isDark = !isDark;">
      <el-tooltip effect="light" content="日夜切换" placement="left">
        <span v-if="isDark"
          class="iconfont icon-sun"
        ></span>
        <span v-else
          class="iconfont icon-moon1"
        ></span>
      </el-tooltip>
    </div>
</template>

<style scoped lang="scss">
</style>
