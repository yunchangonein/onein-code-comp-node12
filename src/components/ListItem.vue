<template>
  <div class="listItem">
    <el-checkbox v-model="modelValue.isCheck">
      <p :class="modelValue.isCheck ? 'isDone' : ''">{{ modelValue.text }}</p>
    </el-checkbox>
    <el-button type="danger" @click="delTodo">删除</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ElButton, ElCheckbox } from "element-plus";
import { useVModel } from '@vueuse/core'

export interface listItem {
  text: string
  isCheck: boolean
}

const props = defineProps<{
  modelValue: listItem
}>()

const modelValue = useVModel(props, 'modelValue')
const emit = defineEmits(["onDelete"]);

const delTodo = () => {
  emit("onDelete");
};
</script>

<style lang="scss" scoped>
.listItem {
  color: rgb(98, 98, 98);
  background: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;

  p {
    width: 200px;
    text-align: left;
  }

  .isDone {
    font-style: italic;
    text-decoration: line-through;
  }
}
</style>
