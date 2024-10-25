<template>
    <div class="gw-flex-item">
      <div class="gw-flex-card">
        <img
          :onclick="clickThis"
          :src=src
          onerror="this.onerror=null;this.src='/favicon.png';"
          alt="Sorry, something went wrong"
        />
        <div class="gw-flex-info">
          <h3 class="movie-title">{{ title }}</h3>
          <h3 class="movie-play" :onclick="playThis">Play</h3>
        </div>
      </div>
    </div>
   
</template>

<script setup lang="ts">
import { ref, toRefs, toRaw, computed } from "vue";

interface ItemProps {
  title: string;
  src: string;
  itemData?: any ; // 组件对应的数据
  play?: (data: any) => void | Promise<void>;
  click?: (data: any) => void | Promise<void>;
}

const props = defineProps<ItemProps>();

const { src,title } = toRefs(props);

// 点击卡片时调用父组件的回调函数
function clickThis() {
  if (props?.click) {
    const param = props.itemData ? toRaw(props.itemData) : {};
    props.click(param);
  }
}

function playThis() {
  if (props?.play) {
    const param = props.itemData ? toRaw(props.itemData) : {};
    props.play(param);
  }
}
</script>

<style scoped lang="scss">

img {
  overflow-clip-margin: content-box;
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  max-height: 100% !important;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
}

.gw-flex-info {
  background: var(--gw-bg-active-color-5);
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 1rem !important;
  align-items: center !important;
  justify-content: space-between !important;
  display: flex !important;
}

.movie-title {
  color: var(--gw-font-color);
  padding: 0.5rem;
  font-size: 1rem;
}

.movie-play {
  background: var(--gw-bg-active-color);
  color: orange;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .gw-flex-item {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 0 0 50%;
    padding: 0;
    position: relative;
  }
  .gw-flex-card {
    padding: 10px;
  }
}

@media (min-width: 992px) {
  .gw-flex-item {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0;
    position: relative;
  }
  .gw-flex-card {
    padding: 10px;
  }
}

@media (min-width: 1200px) {
  .gw-flex-item {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
    padding: 0;
    position: relative;
  }
  .gw-flex-card {
    padding: 10px;
  }
}
</style>
