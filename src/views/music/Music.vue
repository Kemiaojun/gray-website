<template>
  <div class="root-container">
    <el-container class="layout-container-demo">
      <el-aside>
        <el-menu :default-active="activeIndex" @select="handleSelect">
          <el-menu-item
            index="1"
            :class="activeIndex === '1' ? 'selectTab' : ''"
          >
            <template #title>
              <el-icon> <List /> </el-icon>歌曲
            </template></el-menu-item
          >
          <el-menu-item
            index="2"
            :class="activeIndex === '2' ? 'selectTab' : ''"
            ><template #title>
              <el-icon> <Collection /> </el-icon>专辑
            </template></el-menu-item
          >
          <el-menu-item
            index="3"
            :class="activeIndex === '3' ? 'selectTab' : ''"
          >
            <template #title>
              <el-icon> <List /> </el-icon>播放列表
            </template></el-menu-item
          >
        </el-menu>
      </el-aside>

      <el-container class="right-container">
        <div v-if="activeIndex === '3'" class="tab-body">3</div>
        <div v-else-if="activeIndex === '2'" class="tab-body">2</div>
        <div v-else="activeIndex === '1'" class="tab-body">1</div>
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
              <div ref="soundProgressBarRef" class="progress-bar sound-progress-bar">
                <span @click="adjustSound" class="duration-bar sound-duration"></span>
                <span ref="soundProgressRef" class="progress sound-progress">
                  <span @mousedown="roundMouseDown" ref="roundRef" class="round"></span>
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
                  src="/favicon.png"
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
                  <span ref="musicNameRef" class="name">Letting go</span>
                  <span ref="musicAuthorRef" class="musician"
                    >汪苏泷/金若晨</span
                  >
                </div>
                <div class="playback-setting">
                  <span
                    @click="previousMusic"
                    class="iconfont icon-next previous"
                  ></span>
                  <span
                    ref="playRef"
                    class="iconfont icon-bofang"
                    @click="playMusic"
                  ></span>
                  <span
                    ref="stopRef"
                    class="iconfont icon-zanting1"
                    @click="pauseMusic"
                  ></span>
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
              <span ref="musicTimeRef" class="time">03:22</span>
            </div>
          </div>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// 获取路由对象
const route = useRoute();

const activeIndex = ref("1");

// 选择菜单
const handleSelect = function (key: any, keyPath: any) {
  activeIndex.value = key;
};

const showLyrics = ref<boolean>(false);

const playRef = ref();
const stopRef = ref();
const audioRef = ref();
const musicImgRef = ref();
const musicNameRef = ref();
const musicAuthorRef = ref();
const lyricContentRef = ref();

const musicInfoRef = ref();
const infoLeftRef = ref();
const lyricMaskRef = ref();
const playerProgressRef = ref();
const musicTimeRef = ref();

const soundProgressRef = ref();
const roundRef = ref();
const soundProgressBarRef = ref();

//变量
let duration,
  nowPlayIndex = 0;

const musicList = ref<any[]>([
  {
    name: "111",
    url: "http://192.168.192.66:8081/website-api/preview/1/audio_effect/SUNO/%E7%AB%A5%E5%B9%B4%E8%89%B2%E5%BD%A9%20(Childhood%20Colors)%20.mp3",
    img: "/favicon.png",
    author: "aaaaaa",
  },
  {
    name: "222",
    url: "http://192.168.192.66:8081/website-api/preview/1/audio_effect/SUNO/Cherry%20Blossoms.mp3",
    img: "/favicon.png",
    author: "abadads",
  },
]);

// 获取歌词
let timeArr: string[] = [];
let lrcArr: string[] = [];
const lyricStr = `[00:00.00]Letting go
[00:00.00]原唱 : 蔡健雅
[00:00.63]制作人 : 汪苏泷/金若晨
[00:03.79]Letting go
[00:06.28]我终于舍得为你放开手
[00:10.48]因为爱你爱到我心痛
[00:15.80]但你却不懂
[00:20.25]这是一封离别信
[00:24.01]写下我该离开的原因
[00:27.58]我在你生命中扮演的角色太模糊了
[00:34.71]对我曾忽冷忽热
[00:38.14]我到底是情人还是朋友
[00:41.64]爱你是否不该太认真
[00:45.71]That’s why
[00:47.75]I'm letting go
[00:50.48]我终于舍得为你放开手
[00:54.52]因为爱你爱到我心痛
[00:59.64]但你却不懂
[01:02.07]Letting go
[01:04.60]你对一切都软弱与怠惰
[01:08.43]让人怀疑你是否爱过我 真的爱过我
[01:18.92]Letting go
[01:22.67]Letting go
[01:31.43]Letting go
[01:36.53]你是呼吸的空气
[01:40.10]脱离不了的地心引力
[01:43.29]你在我生命中 曾经是我存在的原因
[01:50.49]也许就像他们说
[01:54.13]爱情只会让人变愚蠢
[01:57.38]自作多情 爱得太天真
[02:01.43]That’s why
[02:03.74]I’m letting go
[02:06.30]我终于舍得为你放开手
[02:10.04]因为爱你爱到我心痛
[02:15.07]但你却不懂
[02:18.18]Letting go
[02:20.51]你对一切都软弱与怠惰
[02:24.03]让人怀疑你是否爱过我 真的爱过我
[02:33.43]为你再也找不到借口
[02:36.95]That’s when we should let it go
[02:43.90]That’s when we should let it go
[02:45.55]在夜深人静里想着
[02:49.20]心不安 却越沸腾
[02:52.86]我无助 我无助 好想哭 好想哭
[02:56.62]我找不到退路
[02:59.75]在夜深人静里写着
[03:03.50]心慢慢 就越变冷（心不安 却越沸腾）
[03:06.72]我不恨 我不恨 也不哭 也不哭
[03:10.45]我的眼泪 早已哭干了
[03:17.26]Coz I’m letting go
[03:20.41]我终于舍得为你放开手
[03:24.06]因为爱你爱到我心痛
[03:29.78]但你却不懂
[03:32.13]Letting go
[03:34.68]你对一切都软弱与怠惰
[03:38.60]让人怀疑你是否爱过我 真的爱过我
[03:46.31]Letting go
[03:48.75]你对一切都软弱与怠惰
[03:52.74]让人怀疑你是否爱过我
[03:58.17]That’s when we should let it go
[04:05.09]That’s when we should let it go
[04:08.60]That’s when we should let it go
[04:12.17]That’s when we should let it go`;

// 处理时间显示进度条
function timeAndProgress() {
  playerProgressRef.value.style.width =
    (audioRef.value.currentTime / audioRef.value.duration) * 100 + "%";
  let time: number = audioRef.value.duration - audioRef.value.currentTime;
  let minue = parseInt(time / 60);
  let second = parseInt(time % 60);
  let str = `${minue < 10 ? "0" + minue : minue}:${
    second < 10 ? "0" + second : second
  }`;
  musicTimeRef.value.innerHTML = str;
  lycSlide();
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
    lyricContentRef.value.style.top = index * -12 + 150 + "px";
    [...lyricContentRef.value.children].forEach((item) => {
      item.style.color = "var(--gw-font-color)";
    });
    lyricContentRef.value.children[index].style.color = "darkseagreen";
  }
}

function lyricInit() {
  // 获取歌词
  let insertLrcStr = "";
  const str = lyricStr.split("\n");
  str.forEach((item) => {
    const splitLyc = item.split("]");
    timeArr.push(timeFormat(splitLyc[0].substr(1, splitLyc[0].length - 4)));
    lrcArr.push(splitLyc[1]);
    insertLrcStr += `<li>${lrcArr[lrcArr.length - 1]}</li>`;
  });
  lyricContentRef.value.innerHTML = insertLrcStr;
}

// 设置播放的音乐和图片
function setMusic(index: number) {
  musicImgRef.value.src = musicList.value[index].img;
  audioRef.value.src = musicList.value[index].url;
  musicAuthorRef.value.innerHTML = musicList.value[index].author;
  musicNameRef.value.innerHTML = musicList.value[index].name;
  lyricInit();
  playMusic();
}
// 播放音乐
function playMusic() {
  audioRef.value.play();
  playRef.value.style.display = "none";
  stopRef.value.style.display = "block";
}

// 暂停音乐
function pauseMusic() {
  audioRef.value.pause();
  playRef.value.style.display = "block";
  stopRef.value.style.display = "none";
}

// 上一首
function previousMusic() {
  if (nowPlayIndex == 0) {
    nowPlayIndex = musicList.value.length - 1;
  } else {
    nowPlayIndex--;
  }
  setMusic(nowPlayIndex);
}

// 下一首
function nextMusic() {
  if (nowPlayIndex == musicList.value.length - 1) {
    nowPlayIndex = 0;
  } else {
    nowPlayIndex++;
  }
  setMusic(nowPlayIndex);
}
// 格式化时间
function timeFormat(timeStr: string) {
  if (timeStr) {
    const timeStrArr = timeStr.split(":");
    const minute = timeStrArr[0][0] == "0" ? timeStrArr[0][1] : timeStrArr[0];
    const second = timeStrArr[1][0] == "0" ? timeStrArr[1][1] : timeStrArr[1];
    return parseInt(minute) * 60 + parseInt(second);
  }
}

// 二分查找
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return left - 1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

// 加载完MP3需要设置时间显示与进度条监听
function canPlay() {
  duration = audioRef.value.duration;
  setInterval(function () {
    timeAndProgress();
  }, 1000);
}

function adjustProgress(e) {
  audioRef.value.currentTime = (e.offsetX / e.target.offsetWidth) * duration;
  debugger;
  timeAndProgress();
}

// 点击声音条更改声音大小
function adjustSound(e){
  audioRef.value.volume = e.offsetX / e.target.offsetWidth;
  soundProgressRef.value.style.width = e.offsetX / e.target.offsetWidth * 100 + '%';
}

    // 声音拖动
function roundMouseDown(){
  let soundBarLength = soundProgressBarRef.value.offsetWidth

// 鼠标移动
document.onmousemove = function (ev) {
    let myEvent = ev || event
    let disX = myEvent.clientX - soundProgressBarRef.value.getBoundingClientRect().left
    if (disX > soundBarLength) {
        disX = soundBarLength
    } else if (disX == 0) {
        disX = 0
    }
    soundProgressRef.value.style.width = disX / soundBarLength * 100 + '%'
    audioRef.value.volume = disX / soundBarLength
}

// 鼠标抬起
document.onmouseup = function () {
    document.onmousemove = null
    document.onmouseup = null
}
}

   

onMounted(() => {
  setMusic(0);
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
</style>
