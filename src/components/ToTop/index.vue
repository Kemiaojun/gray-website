<script setup lang="ts">
import { throttle } from "@/utils/optimize";
import { ref } from "vue";

// 距离顶部高度
const top = ref(0);
window.addEventListener(
  "scroll",
  throttle(() => {
    top.value =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  }, 100)
);

// 返回顶部
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <transition name="el-zoom-in-bottom">
    <div
      style="font-size: 2rem; margin-top: 0.5rem"
      v-if="top >= 800"
      @click="backToTop"
    >
      <el-tooltip effect="light" content="回到顶部" placement="left">
        <span class="iconfont icon-caps-unlock-filling"></span>
      </el-tooltip>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.iconfont {
  color: darkgreen;
}
.dark .iconfont {
  color: lightgreen;
}
</style>
