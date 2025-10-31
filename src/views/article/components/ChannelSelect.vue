<script setup>
import { artGetPageChannel } from '@/api/articles'
import { ref } from 'vue'
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetPageChannel()
  channelList.value = res.data.data
}
getChannelList()
defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: [String]
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <el-select
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    style="width: 200px"
  >
    <el-option
      v-for="ele in channelList"
      :key="ele.id"
      :label="ele.cate_name"
      :value="ele.id"
    ></el-option>
  </el-select>
</template>
