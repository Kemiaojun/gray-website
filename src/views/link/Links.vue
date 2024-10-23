<template>
  <div class="gray-link-root">
    <GWLinkCard
      v-for="(group, index) in linkGroups"
      :tsize="getFontSize(group.name)"
      :key="index"
      :title="group.name"
      :items="group.links"
    ></GWLinkCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import GWLinkCard from "@/components/GWLinkCard.vue";
import {
  groupLinkApi
} from "@/api/link";
import type { Link } from "@/types/gw.resources";

const linkGroups = ref<any>([]);

onMounted( async () => {
  await groupLinkApi().then((rsp) => {
    linkGroups.value = rsp.data;
  });
});

// 使用 computed 属性来计算过滤后的列表
// const filteredLinks = linkGroups.value.map(group => {
//   return {
//     ...group,
//     links: group.links.filter(link => link.title.trim() !== ""),
//   };
// });

const getFontSize = (name: string) => {
  if (name.length >= 10) {
    return 18;
  }
  return 24;
};
</script>

<style scoped lang="scss">
.gray-link-root {
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  @include flex(row, flex-start, flex-start);
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: scroll;
  padding: 20px;
}
</style>
