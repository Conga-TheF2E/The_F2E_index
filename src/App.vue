<script setup>
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import Section3 from './components/Section3.vue'
import Section4 from './components/Section4.vue'
import Section6 from './components/Section6.vue'

import { gsap } from './utils/GSAP.js'
import { ref, onMounted } from 'vue'

//變數需與 template ref 的名稱一樣
const hello_GSAP = ref(null)
onMounted(() => {
    gsap.to(hello_GSAP.value, {
        duration: 1.5,
        y: 50,
        yoyo: true,
        repeat: -1,
    })
})
</script>

<template>
    <section>
        <!-- <div ref="hello_GSAP" id="el">灰色為各種大小螢幕呈現內容，請調整視窗大小~</div> -->
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section6 />
    </section>
</template>

<style scoped></style>
