<template>
  <div class="root-container">
    <el-container class="layout-container-demo">
      <el-aside>
        <el-menu :default-active="activeIndex" @select="handleSelect">
          <el-menu-item
            index="1"
            :class="activeIndex === '1' ? 'selectTab' : ''"
          >
            <SvgIcon :size="22" icon-class="musician" />
            <div style="margin-left: 10px">歌手专辑</div>
          </el-menu-item>
          <el-menu-item
            index="2"
            :class="activeIndex === '2' ? 'selectTab' : ''"
          >
            <SvgIcon :size="22" icon-class="music" />
            <div style="margin-left: 10px">全部歌曲</div>
          </el-menu-item>
          <el-menu-item
            index="3"
            :class="activeIndex === '3' ? 'selectTab' : ''"
          >
            <SvgIcon :size="22" icon-class="favorite" />
            <div style="margin-left: 10px">我喜欢的</div>
          </el-menu-item>
          <el-menu-item
            index="4"
            :class="activeIndex === '4' ? 'selectTab' : ''"
          >
            <SvgIcon :size="22" icon-class="music-list" />
            <div style="margin-left: 10px">播放列表</div>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container class="right-container">
        <div v-if="activeIndex === '4'" class="tab-body">
          <div
            class="row-card"
            style="
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid var(--gw-font-color-1);
            "
          >
            <el-input v-model="musicName3" placeholder="歌曲名称"> </el-input>
          </div>
          <div
            class="row-card"
            style="border-bottom: 1px solid var(--gw-font-color-1)"
          >
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="previous"
              @click="previousMusic"
            />
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="play"
              @click="playSelectedMusic(filterMusicList)"
            />
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="next"
              @click="nextMusic"
            />
          </div>
          <GWMusicSortableTable
            :table-data="musicList"
            :current-music="currentMusic"
            :click-t="playSelectedMusic"
            :page-change="pageChange"
          ></GWMusicSortableTable>
        </div>
        <div v-else-if="activeIndex === '3'" class="tab-body">
          <div
            class="row-card"
            style="
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid var(--gw-font-color-1);
            "
          >
            <el-input v-model="musicName2" placeholder="歌曲名称" />
          </div>
          <div
            class="row-card"
            style="border-bottom: 1px solid var(--gw-font-color-1)"
          >
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="previous"
              @click="previousMusic"
            />
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="play"
              @click="playSelectedMusic(filterMusicList)"
            />
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="next"
              @click="nextMusic"
            />
          </div>
          <GWMusicSortableTable
            :table-data="allMusic"
            :current-music="currentMusic"
            :click-t="playSelectedMusic"
            :page-change="pageChange"
          ></GWMusicSortableTable>
        </div>

        <div v-else-if="activeIndex === '2'" class="tab-body">
          <div
            class="row-card"
            style="
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid var(--gw-font-color-1);
            "
          >
            <el-input v-model="musicName1" placeholder="歌曲名称" />
          </div>
          <div
            class="row-card"
            style="border-bottom: 1px solid var(--gw-font-color-1)"
          >
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="previous"
              @click="previousMusic"
            />
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="play"
              @click="playSelectedMusic(filterMusicList)"
            />
            <SvgIcon
              style="cursor: pointer"
              :size="20"
              icon-class="next"
              @click="nextMusic"
            />
          </div>
          <GWMusicSortableTable
            :table-data="allMusic"
            :current-music="currentMusic"
            :click-t="playSelectedMusic"
            :page-change="pageChange"
          ></GWMusicSortableTable>
        </div>
        <div v-else="activeIndex === '1'" class="tab-body">
          <div v-if="singerTab == 1">
            <div
              class="row-card"
              style="
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid var(--gw-font-color-1);
              "
            >
              <el-input v-model="singerName" placeholder="歌手名字" />
            </div>
            <div
              class="col-card"
              v-for="singer in filteredList"
              @click="singerCollection(singer)"
            >
              <GWAvatar
                size="xlarge"
                :src="
                  getWebsiteApiBaseUrl() +
                  'thumbnail/music/' +
                  singer.name +
                  '.png'
                "
              >
              </GWAvatar>
              <div class="name">{{ singer.name }}</div>
            </div>
          </div>
          <div v-else-if="singerTab == 2" class="row-card">
            <div
              class="row-card"
              style="
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid var(--gw-font-color-1);
              "
            >
              <GWAvatar
                size="xlarge"
                :src="
                  getWebsiteApiBaseUrl() +
                  'thumbnail/music/' +
                  currentSinger.name +
                  '.png'
                "
              >
              </GWAvatar>
              <div style="flex-grow: 1; font-weight: bold; font-style: italic">
                {{ currentSinger.name }}
              </div>
              <div
                style="
                  background-color: var(--gw-bg-active-color);
                  padding: 5px;
                  border-radius: 5px;
                "
                @click="singerTab = 1"
              >
                <SvgIcon :size="20" icon-class="back" />
              </div>
            </div>
            <div class="row-card">
              <GWTitleCard
                v-for="collection in singerCollectionList"
                :image="
                  getWebsiteApiBaseUrl() +
                  'preview/' +
                  collection.value + '/' + collection.name + 
                  '.jpg'
                "
                :card-data="collection"
                :title="collection.name"
                :click-t="enterCollection"
              ></GWTitleCard>
            </div>
          </div>
          <div v-else>
            <div
              class="row-card"
              style="
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid var(--gw-font-color-1);
              "
            >
              <img
                style="width: 100px; height: 100px; border-radius: 10px"
                :src="
                  getWebsiteApiBaseUrl() +
                  'preview/' +
                  currentCollection.value + '/' + currentCollection.name + '.jpg'
                "
              />
              <div style="flex-grow: 1; font-weight: bold; font-style: italic">
                {{ currentCollection.name }}
              </div>
              <div
                style="
                  background-color: var(--gw-bg-active-color);
                  padding: 5px;
                  border-radius: 5px;
                "
                @click="singerTab = 2"
              >
                <SvgIcon :size="20" icon-class="back" />
              </div>
            </div>
            <div
              class="row-card"
              style="border-bottom: 1px solid var(--gw-font-color-1)"
            >
              <SvgIcon
                style="cursor: pointer"
                :size="20"
                icon-class="previous"
                @click="previousMusic"
              />
              <SvgIcon
                style="cursor: pointer"
                :size="20"
                icon-class="play"
                @click="playSelectedMusic(sortedCollectionMusicList)"
              />
              <SvgIcon
                style="cursor: pointer"
                :size="20"
                icon-class="next"
                @click="nextMusic"
              />
              <SvgIcon
                style="cursor: pointer"
                :size="20"
                icon-class="refresh-music"
                @click="refresh(currentCollection)"
              />
            </div>
            <GWSortableTable
              :current-music="currentMusic"
              :table-data="collectionMusicList"
              :page-change="pageChange"
              :click-t="playSelectedMusic"
            ></GWSortableTable>
          </div>
        </div>
        <div class="music-player-wrapper">
          <div class="music-player">
            <audio
              src=""
              ref="audioRef"
              @timeupdate="lycSlide"
              @canplay="canPlay"
              @ended="nextMusic"
            ></audio>
            <div class="top-bar">
              <span class="iconfont icon-24gl-volumeMiddle"></span>
              <div
                ref="soundProgressBarRef"
                class="progress-bar sound-progress-bar"
              >
                <span
                  @click="adjustSound"
                  class="duration-bar sound-duration"
                ></span>
                <span ref="soundProgressRef" class="progress sound-progress">
                  <span
                    @mousedown="roundMouseDown"
                    ref="roundRef"
                    class="round"
                  ></span>
                </span>
              </div>
              <span
                class="iconfont icon-geciweidianji"
                @click="toogleLyrics"
              ></span>
            </div>

            <div ref="musicInfoRef" class="music-info">
              <div ref="infoLeftRef" class="info-left">
                <img
                  ref="musicImgRef"
                  class="music-img"
                  :src="getArtistThumbnail()"
                  alt=""
                />
                <div ref="lyricMaskRef" class="lyric-mask">
                  <div class="lyric-wrapper">
                    <ul
                      ref="lyricContentRef"
                      id="lyc-content"
                      style="top: 100px"
                    ></ul>
                  </div>
                </div>
              </div>

              <div class="info-right">
                <div class="music-name">
                  <span ref="musicNameRef" class="name"></span>
                  <span ref="musicAuthorRef" class="musician"></span>
                </div>
                <div class="playback-setting">
                  <span
                    @click="previousMusic"
                    class="iconfont icon-next previous"
                  ></span>
                  <SvgIcon v-if="playing"
                    class="iconfont icon-zanting1"
                    style="cursor: pointer"
                    :size="40"
                    icon-class="pause"
                    @click="pauseMusic"
                  />
                  <SvgIcon v-else
                    class="iconfont icon-bofang"
                    style="cursor: pointer"
                    :size="40"
                    icon-class="play1"
                    @click="playMusic"
                  />
                  <span
                    @click="nextMusic"
                    class="iconfont icon-next next"
                  ></span>
                </div>
              </div>
            </div>
            <div
              @click="adjustProgress"
              class="progress-bar player-progress-bar"
            >
              <span class="duration-bar play-duration"></span>
              <span
                ref="playerProgressRef"
                class="progress player-progress"
              ></span>
              <span ref="musicTimeRef" class="time">00:00</span>
            </div>
          </div>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { movieCategoriesApi } from "@/api/movie";
import { musicRefreshApi, musicListApi, pageMusicApi } from "@/api/music";
import GWAvatar from "@/components/GWAvatar.vue";
import GWTitleCard from "@/components/GWTitleCard.vue";
import GWSortableTable from "@/components/GWSortableTable.vue";
import GWMusicSortableTable from "@/components/GWMusicSortableTable.vue";
import { getWebsiteApiBaseUrl } from "@/utils/website";

// 获取路由对象
const route = useRoute();
const regex1 = /^\[(\d{1}):(\d{2})\.(\d+)$/;
const regex2 = /^\[(\d{2}):(\d{2})\.(\d+)$/;
const regex3 = /^\[(\d{1}):(\d{2}):(\d{2})$/;
const activeIndex = ref("1");

// 选择菜单
const handleSelect = function (key: any, keyPath: any) {
  activeIndex.value = key;
  if (key == "1") {
    singerTab.value = 1;
  } else if (key == "2") {
    pageMusic();
  } else if (key == "3") {
    pageMusic({ favorite: 1 });
  } else if (key == "4") {
    pageMusic({ playlist: 1 });
  }
};

async function pageMusic(param?: any) {
  await pageMusicApi({
    pageNo: 1,
    pageSize: 500,
    name: param?.musicName,
    favorite: param?.favorite,
    playlist: param?.playlist,
  }).then((rsp) => {
    allMusic.value = rsp.data.result;
  });
}

const pageMusicName = function (param: any) {
  pageMusic({ musicName: param });
};

const showLyrics = ref<boolean>(false);

const audioRef = ref();
const musicImgRef = ref();
const musicNameRef = ref();
const musicAuthorRef = ref();
const lyricContentRef = ref();
const playing = ref(false);

const musicInfoRef = ref();
const infoLeftRef = ref();
const lyricMaskRef = ref();
const playerProgressRef = ref();
const musicTimeRef = ref();
const currentMusic = ref<any>();
const soundProgressRef = ref();
const roundRef = ref();
const soundProgressBarRef = ref();

//变量
let duration: number,
  nowPlayIndex = 0;
const singerTab = ref<number>(1);
const currentSinger = ref<any>();
const currentCollection = ref<any>();
const singerName = ref<string>("");
const musicSearchName = ref<string>("");
const musicName1 = ref<string>();
const musicName2 = ref<string>();
const musicName3 = ref<string>();

const singerList = ref<any[]>([]);
const collectionMusicList = ref<any[]>([]);
const sortedCollectionMusicList = ref<any[]>([]);

const singerCollectionList = ref<any[]>([]);

const musicList = ref<any[]>([]);
const filterMusicList = ref<any[]>([]);
const allMusic = ref<any[]>([]);
const lyricStr = ref<string>("");

watch(
  () => musicName1.value,
  (newName1) => {
    pageMusicName(newName1);
  }
);
watch(
  () => musicName2.value,
  (newName2) => {
    pageMusicName(newName2);
  }
);
watch(
  () => musicName3.value,
  (newName3) => {
    pageMusicName(newName3);
  }
);

const playSelectedMusic = (rows: any) => {
  musicList.value = rows;
  setMusic(0);
  playMusic();
};
const pageChange = function (musics: any[]) {
  filterMusicList.value = musics;
};

const getArtistThumbnail = ()=> {
  if(currentMusic.value && currentMusic.value.artistThumbnail) return getWebsiteApiBaseUrl() + currentMusic.value.artistThumbnail;
  return '/favicon.png';
}

const singerCollection = async (singer: any) => {
  currentSinger.value = singer;
  singerTab.value = 2;

  await movieCategoriesApi({ type: 4, folderPath: singer.value }).then(
    (rsp) => {
      singerCollectionList.value = rsp.data;
    }
  );
};

const enterCollection = async (collection: any) => {
  singerTab.value = 3;
  currentCollection.value = collection;
  await musicListApi({ folderPath: collection.value }).then((rsp) => {
    collectionMusicList.value = rsp.data;
  });
};

const refresh = (collection: any) => {
  musicRefreshApi({ folderPath: collection.value });
};

// 获取歌词
let timeArr: any[] = [];
let lrcArr: string[] = [];

// 处理时间显示进度条
function timeAndProgress() {
  if (playerProgressRef.value) {
    playerProgressRef.value.style.width =
      (audioRef.value.currentTime / audioRef.value.duration) * 100 + "%";
    let time: number = audioRef.value.duration - audioRef.value.currentTime;
    let minue = parseInt(String(time / 60));
    let second = parseInt(String(time % 60));
    let str = `${minue < 10 ? "0" + minue : minue}:${
      second < 10 ? "0" + second : second
    }`;
    musicTimeRef.value.innerHTML = str;
    lycSlide();
  }
}

function toogleLyrics() {
  if (!showLyrics.value) {
    musicInfoRef.value.style.display = "block";
    lyricMaskRef.value.style.display = "block";
    infoLeftRef.value.style.width = "100%";
    showLyrics.value = true;
  } else {
    musicInfoRef.value.style.display = "flex";
    lyricMaskRef.value.style.display = "none";
    infoLeftRef.value.style.width = "40%";
    showLyrics.value = false;
  }
}

// 歌词正常滚动
function lycSlide() {
  if (showLyrics.value) {
    let index = binarySearch(timeArr, Math.floor(audioRef.value.currentTime));
    lyricContentRef.value.style.top = index * -20 + 100 + "px";
    [...lyricContentRef.value.children].forEach((item) => {
      item.style.color = "var(--gw-font-color)";
    });
    lyricContentRef.value.children[index].style.color = "aqua";
  }
}

function lyricInit() {
  // 获取歌词
  let insertLrcStr = "";
  timeArr = [];
  lrcArr = [];
  const str = lyricStr.value.split("\n");
  str.forEach((item) => {
    const splitLyc = item.split("]");
    if (regex1.test(splitLyc[0])) {
      timeArr.push(timeFormat(splitLyc[0].substr(1, 5)));
    } else if (regex2.test(splitLyc[0])) {
      timeArr.push(timeFormat(splitLyc[0].substr(1, 6)));
    } else if (regex3.test(splitLyc[0])) {
      timeArr.push(timeFormat(splitLyc[0].substr(4, splitLyc[0].length))
      );
    }

    lrcArr.push(splitLyc[1]);
    insertLrcStr += `<li>${lrcArr[lrcArr.length - 1]}</li>`;
  });
  lyricContentRef.value.innerHTML = insertLrcStr;
}

// 设置播放的音乐和图片
function setMusic(index: number) {
  if (musicList.value.length > 0) {
    let music = musicList.value[index];
    currentMusic.value = music;
    // musicImgRef.value.src = music.img;
    audioRef.value.src =
      getWebsiteApiBaseUrl() +
      "preview/" +
      music.folderPath +
      "/" +
      music.fileName;
    musicAuthorRef.value.innerHTML = music.artist;
    musicNameRef.value.innerHTML = music.title;
    lyricStr.value = music.lyrics;
    lyricInit();
  }
}
// 播放音乐
function playMusic() {
  audioRef.value.play();
  playing.value = true;
  
}

// 暂停音乐
function pauseMusic() {
  audioRef.value.pause();
  playing.value = false;
}

// 上一首
function previousMusic() {
  if (nowPlayIndex == 0) {
    nowPlayIndex = musicList.value.length - 1;
  } else {
    nowPlayIndex--;
  }
  setMusic(nowPlayIndex);
  playMusic();
}

// 下一首
function nextMusic() {
  if (nowPlayIndex == musicList.value.length - 1) {
    nowPlayIndex = 0;
  } else {
    nowPlayIndex++;
  }
  setMusic(nowPlayIndex);
  playMusic();
}
// 格式化时间
function timeFormat(timeStr: string) {
  if (timeStr) {
    const timeStrArr = timeStr.split(":");
    const minute = timeStrArr[0];
    const second = timeStrArr[1];
    return parseInt(minute) * 60 + parseInt(second);
  }
}

// 二分查找
function binarySearch(arr: any, target: any, left = 0, right = arr.length - 1) {
  if (left > right) return left - 1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

let timer: any;

// 加载完MP3需要设置时间显示与进度条监听
function canPlay() {
  if (timer) {
    clearInterval(timer);
  }
  duration = audioRef.value.duration;
  timer = setInterval(function () {
    timeAndProgress();
  }, 1000);
}

function adjustProgress(e: any) {
  audioRef.value.currentTime = (e.offsetX / e.target.offsetWidth) * duration;
  timeAndProgress();
}

// 点击声音条更改声音大小
function adjustSound(e: any) {
  audioRef.value.volume = e.offsetX / e.target.offsetWidth;
  soundProgressRef.value.style.width =
    (e.offsetX / e.target.offsetWidth) * 100 + "%";
}

// 声音拖动
function roundMouseDown() {
  let soundBarLength = soundProgressBarRef.value.offsetWidth;

  // 鼠标移动
  document.onmousemove = function (ev) {
    let myEvent = ev || event;
    let disX =
      myEvent.clientX - soundProgressBarRef.value.getBoundingClientRect().left;
    if (disX > soundBarLength) {
      disX = soundBarLength;
    } else if (disX == 0) {
      disX = 0;
    }
    soundProgressRef.value.style.width = (disX / soundBarLength) * 100 + "%";
    audioRef.value.volume = disX / soundBarLength;
  };

  // 鼠标抬起
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
}

let filteredList = computed(() => {
  return singerList.value.filter((singer) => {
    return singer.name.toLowerCase().includes(singerName.value.toLowerCase());
  });
});

onMounted(async () => {
  await movieCategoriesApi({ type: 3 }).then((rsp) => {
    singerList.value = rsp.data;
  });
  await pageMusicApi({
    pageNo: 1,
    pageSize: 5,
    musicName: musicSearchName.value,
    playlist: 1,
  }).then((rsp) => {
    musicList.value = rsp.data.result;
    if (musicList.value.length > 0) {
      setMusic(0);
    }
  });
});
</script>

<style scoped lang="scss">
@import "./style.css";
/* 引入相对路径的 CSS 文件 */
@import "@/assets/iconfont/iconfont.css";
/* 引入相对路径的 CSS 文件 */

.root-container {
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  position: relative;
  overflow: scroll;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 20px 20px 20px;
}

.selectTab {
  background-color: var(--gw-bg-active-color);
}

.layout-container-demo .el-aside {
  color: var(--gw-font-color);
  background: var(--gw-bg-color);
  border-right: 1px solid var(--gw-bg-active-color);
  width: 150px;
  margin-right: 5px;
  height: calc(100vh - 85px);
}

.layout-container-demo {
  height: 100%;

  .el-menu {
    border-right: none;
  }
}

.right-container {
  position: relative;
  color: var(--gw-font-color);
  background: var(--gw-bg-color);
  border-right: 1px solid var(--gw-bg-active-color);
  height: 100%;
  display: flex;
}

.tab-body {
  flex-grow: 1;
  position: relative;
  overflow-y: scroll;
}

.row-card {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  cursor: pointer;
  flex-wrap: wrap;
}

.col-card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.name {
  padding: 5px;
  font-weight: bold;
}

.el-table__row {
  background-color: var(--gw-bg-color) !important;
  /* 设置表格背景透明 */
}

/* 取消悬停行的背景颜色 */
.transparent-table .el-table__row:hover {
  background-color: transparent !important;
  /* 悬停行背景透明 */
}

</style>
