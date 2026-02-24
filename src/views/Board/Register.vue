<script setup>

import { reactive } from 'vue'
import api from '@/api/board'

const boardForm = reactive({
  title: '',
  content: '',
})

const register = async ()=>{
    const res = await api.register(boardForm);
    console.log(res);
}
</script>

<template>
<h3>게시글 작성하기</h3>
<div>
  <p>제목</p>
  <p> <input type="text" v-model="boardForm.title" width="715px" placeholder="제목을 입력하세요"/></p>
  <p>내용</p>
  <p><textarea v-model="boardForm.content" cols="100"rows="20" placeholder="내용을 입력하세요"></textarea></p>
  <p><button @click="register()">작성하기</button></p>
</div>
</template>

<style scoped>

</style>