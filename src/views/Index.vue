<template>
  <div class="layout-root-container">
    <Header
      v-if="showHeader()"
      :tabs="tabs"
      :selectedTab.sync="selectedTab"
      @update:selectedTab="selectTab"
    />
    <router-view v-slot="{ Component }">
      <keep-alive :include="[includeRouter]">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <ToolBox :toTop=true ></ToolBox>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import router from "@/router";
import { toRoute } from "@/router";
import IndexFooter from "./index/IndexFooter.vue";
import { randomMusicApi } from "@/api/music"
import type { RouteRecordName } from "vue-router";
import Header from "../components/layout/Header.vue";
import type { Tab } from "@/types/gw.props";
import { getWebsiteApiBaseUrl } from '@/utils/website'
import type { Resource } from "@/types/gw.resources";

const tabs = ref<Tab[]>([
  { icon: "icon-wangzhanshouye", name: "Home", title: "首页" },
  { icon: "icon-Bloggericon", name: "Articles", title: "博文" },
  { icon: "icon-wangzhantubiao", name: "Links", title: "导航" },
  { icon: "icon-heji", name: "Resource", title: "资源" },
  { icon: "icon-dianying", name: "Movie", title: "影院" },
  { icon: "icon-18erji-2", name: "Music", title: "音乐" },

]);
const selectedTab = ref("Home");

const includeRouter = ref<any>(["Home"]);
const curRoute = ref<RouteRecordName>("Home");


// key	type	explaination
// name	string	Song name, will appear on song name area.
// id	number	Song id, use Object to collect.
// src	string	Song audio source.
// author	string[] | undefined	Song author.
// album	string | undefined	Song album.
// img	string | undefined	Song thumbnail, will appear at player left.
onMounted( async ()=>{
  const core = window._PlayerCore
  await randomMusicApi(5).then((rsp =>{
    if(rsp.data){
      core.AppendSongList(rsp.data.map((music: any) => {
        return {
          id: music.id,
          name: music.title,
          src: getWebsiteApiBaseUrl() + music.previewUrl,
          img: music.artistThumbnail ? getWebsiteApiBaseUrl() + music.artistThumbnail:""
        }
      }))
      // core.Play();
    }
  }));
});

watch(
  () => router.currentRoute.value,
  (newRoute) => {
    if (newRoute.name) {
      curRoute.value = newRoute.name;
      selectedTab.value = newRoute.name.toString();
    }
    if (
      newRoute.meta.keepAlive &&
      includeRouter.value.indexOf(newRoute.name) === -1
    ) {
      includeRouter.value.push(newRoute.name);
    }
  },
  { immediate: true }
);
const hideHeaderArray = ["Login"];
const showHeader = () => {
  const currentRoute = router.currentRoute.value;
  if (
    currentRoute?.name &&
    hideHeaderArray.find((ele) => ele === currentRoute.name)
  ) {
    return false;
  }
  return true;
};

const selectTab = (name: string) => {
  selectedTab.value = name;
  toRoute(name);
};
</script>
<style scoped lang="scss">
.layout-root-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--gw-bg-color);
  color: var(--gw-font-color);
  min-height: 100vh;
  overflow-y: scroll;
}
</style>
