<template>
  <div class="loading loading-active" v-show="loadingStore.isLoading">
    <div class="load-box">
      <div id="loading">
        <span style="--s: 1"></span>
        <span style="--s: 2"></span>
        <span style="--s: 3"></span>
        <span style="--s: 8"></span>
        <span class="hide"></span>
        <span style="--s: 4"></span>
        <span style="--s: 7"></span>
        <span style="--s: 6"></span>
        <span style="--s: 5"></span>
      </div>
      <h1>GRAYTHON</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoadingStore from "@/stores/loading";
const loadingStore = useLoadingStore()

</script>

<style scoped lang="scss">
#loading {
        width: 50vw;
        height: 50vh;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      
      #loading span {
        width: 8vw;
        height: 8vw;
        display: block;
        float: left;
        background: transparent;
        margin: 1vw;
        border-radius: 1vw;
        animation: light 2s linear infinite calc(0.25s * var(--s));
      }
      .hide {
        visibility: hidden;
      }
      @keyframes light {
        20% {
          background: lightsteelblue;
          box-shadow: 0 0 10px #3498db, 0 0 20px #3498db, 0 0 40px #3498db;
        }
      }
      h1 {
        font-family: Arial, Helvetica, sans-serif;
        z-index: -1;
        color: #3498db;
        filter: blur(1vw);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
      }
</style>
