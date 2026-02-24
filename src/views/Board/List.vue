<script setup>
import { reactive } from 'vue'
import api from '@/api/board'

const boardList = reactive([]);

const getList = async ()=>{
    const res = await api.list();
    boardList.push(...res.data);
}

getList();
</script>

<template>
<table>
    <thead>
        <tr>
            <th>idx></th>
            <th>제목</th>
            <th>내용</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="board in boardList">
            <td>{{ board.idx }}</td>
            <td>{{ board.title }}</td>
            <td>{{ board.content }}</td>
        </tr>
    </tbody>
</table>
</template>

<style scoped>

</style>