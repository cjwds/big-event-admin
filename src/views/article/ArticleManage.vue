<script setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { artGetArticleList } from '@/api/articles'
import ChannelSelect from './components/ChannelSelect.vue'
import { formatTime } from '@/utils/format'
import ArticleEdit from './components/ArticleEdit.vue'
const params = ref({
  pagenum: 1,
  pagesize: 3,
  cate_id: '',
  state: ''
})
const loading = ref(false)
const total = ref(0)
const articleList = ref([])
const getArticleList = async () => {
  loading.value = true
  const res = await artGetArticleList(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
getArticleList()

const articleEdit = ref()
const onAddArticle = () => {
  articleEdit.value.open({})
}
const onSuccess = (type) => {
  if (type === 'add') {
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
  }
  getArticleList()
}
const onEdit = (row) => {
  articleEdit.value.open(row)
}
const onDelete = (row) => {
  console.log(row)
}

const handleSizeChange = () => {
  params.value.pagenum = 1
  getArticleList()
}
const handleCurrentChange = (page) => {
  params.value.pagenum = page
  getArticleList()
}

const onSearch = () => {
  params.value.pagenum = 1
  getArticleList()
}
const onReset = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button @click="onAddArticle" type="primary">添加文章</el-button>
    </template>
    <el-form inline>
      <el-form-item label="文章分类：">
        <ChannelSelect v-model="params.cate_id"></ChannelSelect>
      </el-form-item>
      <el-form-item label="发布状态：">
        <el-select style="width: 200px" v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSearch" type="primary">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="articleList">
      <el-table-column label="文章标题" prop="title"></el-table-column>
      <el-table-column label="分类" prop="cate_name"></el-table-column>
      <el-table-column label="发表时间" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button
            circle
            plain
            :icon="Edit"
            @click="onEdit(row)"
            type="primary"
          ></el-button>
          <el-button
            circle
            plain
            :icon="Delete"
            @click="onDelete(row)"
            type="danger"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-loading="loading"
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[1, 3, 5, 10]"
      :background="true"
      layout="jumper, total, sizes, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="margin-top: 20px; justify-content: flex-end"
    />

    <ArticleEdit ref="articleEdit" @success="onSuccess"></ArticleEdit>
  </PageContainer>
</template>
