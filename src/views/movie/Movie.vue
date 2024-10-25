<template>
  <div class="image-gallery">
    <GWSearchCondition>
      <template v-slot:search-items>
        <div class="search-item">
          <el-select
            v-model="category"
            clearable
            placeholder="分类"
            style="width: 150px"
          >
            <el-option
              v-for="item in categories"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
      </template>
    </GWSearchCondition>
    <GWFlexContainer style="min-height: calc(100% - 100px)">
      <template v-slot:flex-items>
        <GWFlexImage  v-for="(movie, index) in movies"
          :click="clickThis"
          :play="playThis"
          :title="movie.title"
          :item-data="movie"
          :src="getWebsiteApiBaseUrl() + movie.coverUrl"
        ></GWFlexImage>
      </template>
    </GWFlexContainer>
    <!-- 图片选择器 -->
    <input
      ref="fileselectRef"
      style="display: none"
      type="file"
      accept="image/*"
      @change="onFileChange"
    />
    <GWPreviewVideo
      v-if="previewShow"
      :url="getWebsiteApiBaseUrl() + currentMovie?.previewUrl"
      :name="currentMovie?.title"
      :on-close="closePreview"
    ></GWPreviewVideo>
    <div style="width: 100%">
            <el-pagination
              style="flex-direction: row-reverse"
              background
              layout="prev, pager, next"
              :total="total"
              :pager-count="5"
              :page-size="pageSize"
              :current-page="pageNo"
              @current-change="handlePageChange"
            />
          </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import type { Movie } from "@/types/gw.resources";
import { getWebsiteApiBaseUrl } from '@/utils/website'
import { movieCoverApi, movieRefreshApi, pageMovieApi, movieCategoriesApi } from "@/api/movie";
import GWFlexContainer from "@/components/GWFlexContainer.vue";
import GWFlexImage from "@/components/GWFlexImage.vue";
import { ElMessage } from "element-plus";
const router = useRouter();

const total = ref(0);
const pageNo = ref(1);
const pageSize = ref(20);

const movies = ref<Movie[]>();

const previewShow = ref<boolean>(false);

const currentMovie = ref<Movie>();

const categories = ref<string[]>();

const category = ref<string>();

const clickThis = (item: Movie) => {
  currentMovie.value = item;
  fileselectRef.value.click();
};

const playThis = (item: Movie) => {
  currentMovie.value = item;
  previewShow.value = true;
};

const handlePageChange = (newPage: number) => {
  pageNo.value = newPage;
  refreshData();
};

const refreshData = async () => {
  await pageMovieApi({
    pageNo: pageNo.value,
    pageSize: pageSize.value,
    folderName: category.value
  }).then((rsp) => {
    movies.value = rsp.data.result;
    total.value = rsp.data.total;
  });
};

const fileselectRef = ref();

// 处理文件选择，转换为Base64格式进行预览
const onFileChange = async (event: Event) => {
  if (currentMovie.value) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
       let image ;
      reader.onload = (e: ProgressEvent<FileReader>) => {
        image = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
      let formData = new FormData();
      formData.append("file", input.files[0]);
      formData.append("id", currentMovie.value.id + "");
      await movieCoverApi(formData)
        .then((rsp) => {
          debugger;
          if(rsp.data){
            ElMessage({
              type: "info",
              message: "电影海报已更新，请刷新页面查看",
            });
          }
        })
        .finally(() => {});
    }
  }
};

// 关闭预览
const closePreview = () => {
  previewShow.value = false;
};
watch(
  () => category.value,
  () => {
    refreshData();
  },
  { deep: true, immediate: true }
);
// 挂载处理
onMounted(async () => {
  refreshData();
  await movieCategoriesApi().then((rsp) => {
    categories.value = rsp.data;
  });
  movieRefreshApi();
});
</script>

<style scoped lang="scss">
.image-gallery {
  background-color: var(--gw-bg-color);
  width: calc(100%);
  height: calc(100% - 50px);
  padding: 0 20px;
  overflow: scroll;
}
</style>
