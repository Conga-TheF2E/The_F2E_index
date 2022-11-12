<script setup>
import { onMounted } from 'vue';
import { gsap } from '../utils/GSAP.js'

// const titleT1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".Section2", // 決定scrolltrigger要以哪一個元素作為觸發基準點
//         markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
//         start: 'top 35%', // 決定動畫開始點的位置
//         end: 'top 0%',
//         scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
//     },
// })

// onMounted(() => {
//     titleTl.from('.questionTitle', {
//         opacity: "0",
//         y: "100"
//     })
// })
</script>
<template>
    <section class="Section2 container">
        <div class="questionTitle">你是否也有以下困擾</div>
        <div class="question1"><img src="../assets/img/問題1.svg" alt=""></div>
        <div class="question2"><img src="../assets/img/問題2.svg" alt=""></div>
        <div class="question3"><img src="../assets/img/問題3.svg" alt=""></div>
        <div class="pointer"><img src="../assets/img/箭頭.svg" alt=""></div>
    </section>
</template>
<style scoped lang="scss">

</style>
