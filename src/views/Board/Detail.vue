<script setup>
import { ref } from 'vue'
import api from '@/api/board'
import { useRoute } from 'vue-router';

const board = ref();
const route = useRoute();
const idx = route.params.idx;

const getDetail = async ()=>{
    try {
        const res = await api.detail(idx);
        console.log(res.data);
        board.value = res.data; 
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
    }
}

getDetail();
</script>

<template>
    <div v-if="board">
    <h1> 제목 : {{ board.title }}</h1>
    <p>내용 : {{ board.content }}</p>
    </div>
    <div v-else></div>
</template>

<style scoped>

</style>