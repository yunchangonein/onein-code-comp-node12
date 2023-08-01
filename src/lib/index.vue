<template>
    <div class="container">
        <h2 class="title">{{ todoTitle }}</h2>
        <p class="datatime">{{ time }}</p>
        <div class="head">
            <el-input v-model="title" clearable></el-input>
            <el-button class="addBtn" @click="addTodo" type="primary"><img class="img"
                    src="../assets/images/add.png" /></el-button>
        </div>
        <div v-for="(item, index) in listData">
            <ListItem class="list" v-model="listData[index]" @on-delete="handleDelte(index)">
            </ListItem>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";
import ListItem from "../components/ListItem.vue";
import "../assets/js/day.js"

const listData = ref<{ text: string, isCheck: boolean }[]>([]);
const title = ref("");

const time = ref("")

const props = withDefaults(
    defineProps<{
        todoTitle: string
    }>(),
    {
        todoTitle: 'todoList'
    }
)

setInterval(() => { time.value = window.dayjs().format("YYYY-MM-DD HH:mm:ss") }, 1000)

// 事件
const _emits = defineEmits(['addTodo']);

const addTodo = () => {
    title.value && listData.value.push({ text: title.value, isCheck: false });
    title.value = ""
    _emits('addTodo', title.value)
};

const handleDelte = (index: number) => {
    listData.value.splice(index, 1);
};
</script>
<style lang="scss" scoped>
@import "../assets/css/style.scss";

.datatime {
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>