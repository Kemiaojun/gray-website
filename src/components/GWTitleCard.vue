<template>
  <div class="card">
    <div class="card_image">
      <img :src="image" />
    </div>
    <div class="card_title title-white">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, toRaw, computed } from "vue";

interface CardProps {
  image: string;
  title: string;
  cardData?: any; // 组件对应的数据
  clickT?: (data: any) => void | Promise<void>;
}

const props = defineProps<CardProps>();

const { image, title } = toRefs(props);

</script>

<style scoped lang="scss">
.card {
  margin: 20px auto;
  width: 150px;
  height: 150px;
  border-radius: 40px;
box-shadow: 5px 5px 20px 7px rgba(0,0,0,0.25), -5px -5px 20px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-top: -80px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 20px 15px rgba(0,0,0,0.25), 
    -5px -5px 20px 15px rgba(0,0,0,0.22);
}

</style>
