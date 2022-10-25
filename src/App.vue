<script setup>
import { gsap } from './utils/GSAP.js'
import { ref, onMounted } from 'vue'

//變數需與 template ref 的名稱一樣
const hello_GSAP = ref(null)
onMounted(() => {
    gsap.to(hello_GSAP.value, {
        duration: 1.5,
        x: 100,
        repeat: -1,
    })
})
</script>

<template>
    <div ref="hello_GSAP" id="el">hi</div>
</template>

<style scoped></style>
