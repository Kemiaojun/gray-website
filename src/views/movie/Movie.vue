<template>
  <div class="image-gallery">
    <GWFlexContainer style="min-height: calc(100% - 100px)">
      <template v-slot:flex-items>
        <GWFlexImage  v-for="(movie, index) in movies"
          :click="clickThis"
          :play="playThis"
          :title="movie.title"
          :item-data="movie"
          :src="image"
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
      :url="currentMovie?.previewUrl"
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { Movie } from "@/types/gw.resources";
import { movieCoverApi, movieRefreshApi, pageMovieApi } from "@/api/movie";
import GWFlexContainer from "@/components/GWFlexContainer.vue";
import GWFlexImage from "@/components/GWFlexImage.vue";

const router = useRouter();

const total = ref(0);
const pageNo = ref(1);
const pageSize = ref(20);

const movies = ref<Movie[]>();

const previewShow = ref<boolean>(false);

const currentMovie = ref<Movie>();

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
  }).then((rsp) => {
    movies.value = rsp.data.result;
    total.value = rsp.data.total;
  });
};

const image = ref();
const fileselectRef = ref();

// 处理文件选择，转换为Base64格式进行预览
const onFileChange = async (event: Event) => {
  if (currentMovie.value) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        image.value = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
      let formData = new FormData();
      formData.append("file", input.files[0]);
      formData.append("id", currentMovie.value.id + "");
      await movieCoverApi(formData)
        .then((rsp) => {})
        .finally(() => {});
    }
  }
};

// 关闭预览
const closePreview = () => {
  previewShow.value = false;
};

// 挂载处理
onMounted(async () => {
  refreshData();
  movieRefreshApi();
});
</script>

<style scoped lang="scss">
.image-gallery {
  background-color: var(--gw-bg-color);
  width: calc(100%);
  height: calc(100% - 50px);
  padding: 20px;
  overflow: scroll;
}
</style>
