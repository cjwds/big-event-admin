import request from '@/utils/request'

// 分类：获取文章分类
export const artGetPageChannel = () => request.get('/my/cate/list')
// 分类：添加文章分类
export const artAddChannel = (data) => request.post('/my/cate/add', data)
// 分类：编辑文章分类
export const artEditChannel = (data) => request.put('/my/cate/info', data)
// 分类：删除文章分类
export const artDelChannel = (id) =>
  request.delete(`/my/cate/info`, { params: { id } })

// 文章：获取文章列表
export const artGetArticleList = (params) =>
  request.get('/my/article/list', { params })
// 文章：发布文章
export const artPublishArticle = (data) => request.post('/my/article/add', data)
// 文章：获取文章详情
export const artGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })
// 文章：编辑文章
export const artEditService = (data) => request.put('my/article/info', data)
