<script setup lang="ts">

const emit = defineEmits("update:closeDrawer")

function isClose(){
  emit("update:closeDrawer")
}

</script>
<template>
<div>
  <el-menu
      router
      style="width: 100%;border: none"
      class="menu"
  >
    <el-menu-item index="/" class="index" @click="isClose">
      <el-icon>
        <HomeFilled/>
      </el-icon>
      首页
    </el-menu-item>
  </el-menu>
</div>
</template>

<style scoped lang="scss">

</style>