<script setup>
// import HandLeftIcon from '../assets/img/hand_left.svg'
// import HandRightIcon from '../assets/img/hand_right.svg'
import { gsap } from '../utils/GSAP.js'
import { ref, onMounted } from 'vue'

const activityTotalNum = ref(null)
const attendIndividualCompetitionNum = ref(null)
const attendTeamCompetitionNum = ref(null)

const hoverBox__inner = ref(null)
let innerBoxAnimation

function innerBoxAnimationPlay() {
    innerBoxAnimation.play()
}
function innerBoxAnimationReverse() {
    innerBoxAnimation.reverse()
}

onMounted(() => {
    innerBoxAnimation = gsap.fromTo(
        hoverBox__inner.value,
        { width: 0, height: 0 },
        { width: '110%', height: '110%', duration: 1, paused: true },
    )
    // 數字跳動
    gsap.to(activityTotalNum.value, {
        innerText: 1034,
        duration: 4,
        snap: {
            innerText: 1,
        },

        ease: 'Circ.easeOut',
    })
    gsap.to(attendIndividualCompetitionNum.value, {
        innerText: 999,
        duration: 4,
        snap: {
            innerText: 1,
        },

        ease: 'Circ.easeOut',
    })
    gsap.to(attendTeamCompetitionNum.value, {
        innerText: 33,
        duration: 4,
        snap: {
            innerText: 1,
        },

        ease: 'Circ.easeOut',
    })
})
</script>
<template>
    <section class="Section1">
        <div class="Section1__activityTitle">
            <h1>THE F2E 4TH</h1>
            <p>互動式網頁設計</p>
        </div>
        <div class="Section1__hoverBox">
            <div class="Section1__hoverBox__wrapper clip-each--hexagon">
                <div class="Section1__hoverBox__inner clip-each--hexagon" ref="hoverBox__inner">
                    <!-- <img class="cat cat_left" :src="HandLeftIcon" alt="hand icon" />
                    <img class="cat cat_right" :src="HandRightIcon" alt="hand icon" /> -->
                </div>
            </div>
            <div
                class="Section1__hoverBox__controlAnimate__box clip-each--hexagon"
                @mouseover="innerBoxAnimationPlay"
                @mouseleave="innerBoxAnimationReverse"
            ></div>
            <svg style="position: absolute">
                <defs>
                    <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
                        <polygon
                            points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="Section1__attendActivityPeople">
            <ul>
                <li>
                    <p ref="activityTotalNum">800</p>
                    <h4>總報名人數</h4>
                </li>
                <li>
                    <p ref="attendIndividualCompetitionNum">800</p>
                    <h4>個人賽人數</h4>
                </li>
                <li>
                    <p ref="attendTeamCompetitionNum">0</p>
                    <h4>團體組數</h4>
                </li>
            </ul>
        </div>
    </section>
</template>
<style scoped lang="scss"></style>
