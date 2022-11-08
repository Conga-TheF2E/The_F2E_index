<script setup>
// import HandLeftIcon from '../assets/img/hand_left.svg'
// import HandRightIcon from '../assets/img/hand_right.svg'
import { gsap } from '../utils/GSAP.js'
import { ref, onMounted } from 'vue'

const activityTotalNum = ref(null)
const attendIndividualCompetitionNum = ref(null)
const attendTeamCompetitionNum = ref(null)
const leftHand = ref(null)
const rightHand = ref(null)

const hoverBox__inner = ref(null)
let innerBoxAnimation
let leftHandAnimation
let rightHandAnimation

function innerBoxAnimationPlay() {
    innerBoxAnimation.play()
    leftHandAnimation.play()
    rightHandAnimation.play()
}
function innerBoxAnimationReverse() {
    innerBoxAnimation.reverse()
    leftHandAnimation.reverse()
    rightHandAnimation.reverse()
}

onMounted(() => {
    innerBoxAnimation = gsap.fromTo(
        hoverBox__inner.value,
        { width: 0, height: 0 },
        { width: '110%', height: '110%', duration: 0.5, paused: true },
    )
    leftHandAnimation = gsap.fromTo(
        leftHand.value,
        { x: -200, opacity: 0.2 },
        { x: 200, opacity: 1, delay: 0.1, duration: 0.5, paused: true },
    )
    rightHandAnimation = gsap.fromTo(
        rightHand.value,
        { x: 200, opacity: 0.2 },
        { x: -200, opacity: 1, delay: 0.1, duration: 0.5, paused: true },
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
    <section class="Section1 container">
        <div class="Section1__activityTitle">
            <h1>THE F2E 4TH</h1>
            <p>互動式網頁設計</p>
        </div>
        <div class="Section1__hoverBox">
            <div class="Section1__hoverBox__wrapper clip-each--hexagon">
                <div class="Section1__hoverBox__inner clip-each--hexagon" ref="hoverBox__inner">
                    <img
                        class="Section1__hoverBox__inner__leftHand"
                        src="../assets/img/hand_left.svg"
                        alt="hand icon"
                        ref="leftHand"
                    />
                    <img
                        class="Section1__hoverBox__inner__rightHand"
                        src="../assets/img/hand_right.svg"
                        alt="hand icon"
                        ref="rightHand"
                    />
                </div>
            </div>
            <div
                class="Section1__hoverBox__controlAnimate__box clip-each--hexagon"
                @mouseover="innerBoxAnimationPlay"
                @mouseleave="innerBoxAnimationReverse"
            ></div>
            <svg style="position: absolute; top: 0; left: 0">
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
