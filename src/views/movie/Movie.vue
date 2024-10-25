<template>
  <div class="image-gallery">
    <GWSearchCondition>
      <template v-slot:left-items>
        <div class="flex-item">
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
      <template v-slot:right-items>
        
        <div class="flex-item">
          <span style="font-size: small; color: var(--gw-font-color)"
            >影片数量: </span
          ><span
            style="
              font-size: small;
              color: var(--gw-font-color);
              font-style: italic;
              font-weight: bold;
              text-decoration: underline;
            "
            >{{ total }}</span
          >
          <div class="flex-item" style="margin-left: 20px">
            <SvgIcon :size="20" icon-class="m3u8" class="svg-icon" :onclick="handleM3u8" />
            <span width="30px"></span>
            <SvgIcon :size="20" icon-class="refresh" class="svg-icon" :onclick="reloadData" />
          </div>
        </div>
      </template>
    </GWSearchCondition>
    <GWFlexContainer style="min-height: calc(100% - 100px)">
      <template v-slot:flex-items>
        <GWFlexImage
          v-for="(movie, index) in movies"
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
  <!-- 模态框 -->
  <el-dialog
    style="padding: 30px; max-height: 500px; overflow: scroll"
    title="m3u8解析"
    v-model="dialogVisible"
    width="500px"
    @close="handleClose"
  >
    <el-form ref="m3u8FormRef" :model="form" label-width="auto" :rules="rules">
      <el-form-item label="电影名称：" prop="name">
        <!-- 库名称 -->
        <el-input v-model="form.name" placeholder="请输入电影名称"></el-input>
      </el-form-item>
      <el-form-item label="所属分类：" prop="folderName">
        <el-select
          v-model="form.folderName"
          filterable
          placeholder="请选择所属分类"
          style="width: 200px"
        >
          <el-option
            v-for="item in categories"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="解析地址：" prop="url">
        <el-input
          size="small"
          type="textarea"
          placeholder="解析地址"
          v-model="form.url"
          resize="none"
          :rows="4"
        ></el-input>
      </el-form-item>
      <!-- 操作按钮 -->
      <el-form-item style="flex-direction: column">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm(m3u8FormRef)"
          >确定</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import type { Movie } from "@/types/gw.resources";
import { getWebsiteApiBaseUrl } from "@/utils/website";
import {
  movieCoverApi,
  movieRefreshApi,
  pageMovieApi,
  movieCategoriesApi,
  m3u8MovieApi
} from "@/api/movie";
import GWFlexContainer from "@/components/GWFlexContainer.vue";
import GWFlexImage from "@/components/GWFlexImage.vue";
import { ElMessage } from "element-plus";
import type { FormRules, FormInstance } from "element-plus";

const router = useRouter();

const total = ref(0);
const pageNo = ref(1);
const pageSize = ref(20);

const movies = ref<Movie[]>();

const previewShow = ref<boolean>(false);

const currentMovie = ref<Movie>();

const categories = ref<string[]>();
const m3u8FormRef = ref<FormInstance>();
const category = ref<string>();
const form = ref<any>({
  name: "",
  folderName: "",
  url: "",
});

const rules = reactive<FormRules<any>>({
  name: [
    {
      required: true,
      message: "请输入电影名称",
      trigger: "blur",
    },
  ],
  folderName: [
    {
      required: true,
      message: "请选择电影所属分类",
      trigger: "blur",
    },
  ],
  url: [
    {
      required: true,
      message: "请输入m3u8 url地址",
      trigger: "blur",
    },
  ],
});

// 对话框是否可见
const dialogVisible = ref(false);
// 关闭对话框
const handleClose = () => {
  dialogVisible.value = false;
};

const handleM3u8 = () => {
  dialogVisible.value = true;
};

const handleConfirm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      m3u8MovieApi(form.value);
      handleClose();
    } else {
      console.log("error submit!", fields);
    }
  });
};

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
    folderName: category.value,
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
      let image;
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
          if (rsp.data) {
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

const reloadData =() =>{
  movieRefreshApi();
}

// 挂载处理
onMounted(async () => {
  refreshData();
  await movieCategoriesApi().then((rsp) => {
    categories.value = rsp.data;
  });

});
</script>

<style scoped lang="scss">
.image-gallery {
  background-color: var(--gw-bg-color);
  width: calc(100%);
  height: calc(100% - 50px);
  padding: 5px 20px 0 20px;
  overflow: scroll;
}

.flex-item {
  display: inline-flex;
  margin-right: 5px;
}

.svg-icon {
  margin-left: 10px;
  &:hover{
    cursor: pointer;
  }
}
</style>
