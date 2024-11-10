<script setup lang="ts">
const props = defineProps({
  toTop: {
    type: Boolean,
    default: false,
  }
})
const { toTop } = toRefs(props);
const isContainerVisible = ref(false);

const toggleContainer = () => {
  circleTransition();
  isContainerVisible.value = !isContainerVisible.value;
};
const circleTransition = () => {
  const circle = document.querySelector(".rotate-box");
  circle?.classList.add('active');
  setTimeout(function () {
circle?.classList.remove('active');
  }, 1000);
};
// 自定义事件
const emit = defineEmits(['ReadingMode'])

onMounted(()=>{
  console.log(toTop.value);
})


</script>

<template>
  <div class="container_div">
    <div class="hide" :class="{ visible: isContainerVisible }">
    </div>
    <div class="rotate-box" @click="toggleContainer">
      <span style="font-size: 2rem;" class="iconfont icon_moon"></span>
    </div>
    <div class="mb-4">
      <ToTop v-if="toTop"/>
    </div>
    
  </div>
</template>

<style scoped lang="scss">

.container_div {
  z-index: 7777;
  position: fixed;
  bottom: 7rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.hide {
  opacity: 0;
  height: auto;
  transition: all .5s;
  transform: translate(90px,0);
}

.visible {
  height: auto;
  opacity: 1;
  transform: translate(0,0); /* 当添加 .visible 类时，容器滑入 */
  transition: all .5s;
}
.rotate-box {
  animation: rotating 3s linear infinite;
}

.rotate-box.active {
  color: greenyellow;
}
</style>