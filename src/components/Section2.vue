<script setup>
import { onMounted } from 'vue';
import { gsap } from '../utils/GSAP.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


onMounted(() => {
    gsap.set('.Section2', { opacity: 0, visibility: 'hidden' })
    let needInit = false

    // 偵測滾動範圍觸發動畫
    ScrollTrigger.create({
        trigger: '.Section2',
        start: 'top 40%',

        //向下滾動進入start點時觸發callback
        onEnter: function () {
            gsap.set('.Section2', { opacity: 1, visibility: 'visible' })
            if (!needInit) {
                needInit = true

                gsap.from('.questionTitle', {
                    y: -100,
                    opacity: 0,
                    duration: 0.7,
                })
                gsap.from('.question1', {
                    x: 100,
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.7,
                })
                gsap.from('.question2', {
                    x: -100,
                    opacity: 0,
                    duration: 0.5,
                    delay: 1.2,
                })
                gsap.from('.question3', {
                    x: 100,
                    opacity: 0,
                    duration: 0.5,
                    delay: 1.7,
                })
                gsap.from('.pointer', {
                    y: -50,
                    opacity: 0,
                    duration: 0.5,
                    delay: 2.2,
                })
                gsap.to('.pointer', {
                    y: -10,
                    duration: 0.5,
                    repeat: -1,
                    delay: 2.7,
                    yoyo: true,
                })
            }
        },
    })
})
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
