<script setup>
import kdan_logo from '../assets/img/kdan_logo.svg'
import titan_logo from '../assets/img/titan_logo.svg'
import blockstudio_logo from '../assets/img/blockstudio_logo.svg'
import { ref, onMounted } from 'vue'
import { gsap } from '../utils/GSAP.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const section6 = ref(null)
const section6_title = ref(null)
const section6_body = ref(null)

onMounted(() => {
    gsap.set(section6.value, { opacity: 0, visibility: 'hidden' })
    let needInit = false

    // 偵測滾動範圍觸發動畫
    ScrollTrigger.create({
        //以section3作為觸發時機
        trigger: section6.value,
        start: 'top 8%',

        //向下滾動進入start點時觸發callback
        onEnter: function () {
            gsap.set(section6.value, { opacity: 1, visibility: 'visible' })
            if (!needInit) {
                needInit = true

                // title淡入
                gsap.from(section6_title.value, {
                    x: 100,
                    y: 100,
                    opacity: 0,
                    duration: 0.7,
                })
                // title淡入
                gsap.from(section6_body.value, {
                    y: 50,
                    duration: 0.7,
                })
            }
        },
    })
})
</script>
<template>
    <section class="Section6 mb-10" ref="section6">
        <div class="Section6__title clip-each--Section6_title" ref="section6_title">
            <h2>
                區區修練<br class="Section6__title__breakLine" />已經沒辦法滿足了嗎 ?
                <br />
                還有比賽等著你 !
            </h2>
        </div>
        <div class="Section6__container container" ref="section6_body">
            <div class="Section6__competitionFlow">
                <h3 class="Section6__competitionFlow__title mb-7">評審機制</h3>
                <ul>
                    <li class="Section6__competitionFlow__eachFlow">
                        <h4><span>初選</span></h4>
                        <p>將由六角學院前端、UI 評審進行第一波篩選。</p>
                    </li>
                    <li class="Section6__competitionFlow__eachFlow">
                        <h4><span>決選</span></h4>
                        <p>
                            由六角學院與贊助商討論，進行最後篩選。<br />
                            12/30(五) 由評審直播公布名單!
                        </p>
                    </li>
                </ul>
            </div>
            <div class="Section6__competitionAwards">
                <h3 class="Section6__competitionAwards__title">獎項</h3>
                <ul class="Section6__competitionAwards__content">
                    <li>初選佳作 共六十位<span>|</span>數位獎狀</li>
                    <li>個人企業獎 共六位<span>|</span>NTD 3,000 / 位</li>
                    <li>團體企業獎 共三組<span>|</span>NTD 10,000 / 組</li>
                </ul>
                <p class="Section6__competitionAwards__note">以上皆提供完賽數位獎狀</p>
            </div>
            <div class="Section6__sponsors">
                <h3 class="Section6__sponsors__title">贊助單位</h3>

                <div class="Section6__sponsor__beehive__wrapper">
                    <div
                        class="beehive-mask"
                        onclick="window.open('https://titansoft.com/tw','titansoft');"
                    >
                        <div class="Section6__sponsor__beehive clip-each--hexagon">
                            <img style="width: 55%" :src="titan_logo" alt="鈦坦科技" />
                        </div>
                    </div>
                </div>
                <div class="Section6__sponsor__beehive__wrapper">
                    <div
                        class="beehive-mask"
                        onclick="window.open('https://www.kdanmobile.com/zh-tw','kdanmobile');"
                    >
                        <div class="Section6__sponsor__beehive clip-each--hexagon">
                            <img style="width: 55%" :src="kdan_logo" alt="凱鈿行動科技" />
                        </div>
                    </div>

                    <div
                        class="beehive-mask"
                        onclick="window.open('https://blockstudio.tw/','blockstudio');"
                    >
                        <div class="Section6__sponsor__beehive clip-each--hexagon">
                            <img style="width: 55%" :src="blockstudio_logo" alt="板塊設計" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss"></style>
