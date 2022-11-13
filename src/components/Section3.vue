<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from '../utils/GSAP.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { detectWindowWidth } from '../utils/detectWindowWidth.js'

let needInit = false
const { windowWidth } = detectWindowWidth()
const section3 = ref(null)
const outer_circle = ref(null)
const inner_circle = ref(null)
const circle_text = ref(null)
const bulb_icon = ref(null)
const hand_left_container = ref(null)
const hand_right_container = ref(null)
const hand_left_icon = ref(null)
const hand_right_icon = ref(null)
const text_container = ref(null)
const text_F2E = ref(null)
const text_2022 = ref(null)

function addAnimateToCircle(element, name, toValue) {
    var myanim = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
    myanim.setAttribute('id', `${name}_animation`)
    myanim.setAttribute('attributeName', 'stroke-dasharray')
    myanim.setAttribute('to', toValue)
    myanim.setAttribute('dur', '0.6s')
    myanim.setAttribute('fill', 'freeze')

    element.appendChild(myanim)
    document.getElementById(`${name}_animation`).beginElement()
}

onMounted(() => {
    gsap.set(section3.value, { opacity: 0, visibility: 'hidden' })
    RunningText()
    // 偵測滾動範圍觸發動畫
    ScrollTrigger.create({
        //以section3作為觸發時機
        trigger: section3.value,
        start: 'top 10%',

        //向下滾動進入start點時觸發callback
        onEnter: function () {
            gsap.set(section3.value, { opacity: 1, visibility: 'visible' })
            if (!needInit) {
                needInit = true
                addAnimateToCircle(outer_circle.value, 'outer_circle', '1745, 1745')
                addAnimateToCircle(inner_circle.value, 'inner_circle', '536, 536')
                gsap.from(bulb_icon.value, {
                    scale: 0,
                    duration: 1,
                    ease: 'Power2.easeOut',
                    transformOrigin: 'center',
                })
                gsap.from(circle_text.value, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.3,
                    ease: 'none',
                })
                gsap.to(circle_text.value, {
                    rotation: 360,
                    ease: 'none',
                    transformOrigin: 'center',
                    duration: 6,
                    repeat: -1,
                })

                // 手淡入
                gsap.from(hand_left_container.value, {
                    x: -120,
                    opacity: 0,
                    duration: 0.65,
                })
                gsap.from(hand_right_container.value, {
                    x: 120,
                    opacity: 0,
                    duration: 0.65,
                })
                // 手淡入

                // 手手抖動
                gsap.to(hand_left_container.value, {
                    transformOrigin: '0 2px',
                    rotation: 360,
                    duration: 0.6,
                    ease: 'none',
                    repeat: -1,
                })
                gsap.to(hand_left_icon.value, {
                    rotation: -360,
                    duration: 0.6,
                    ease: 'none',
                    repeat: -1,
                })

                gsap.to(hand_right_container.value, {
                    transformOrigin: '0 2px',
                    rotation: 360,
                    delay: 0.1,
                    duration: 0.55,
                    ease: 'none',
                    repeat: -1,
                })
                gsap.to(hand_right_icon.value, {
                    rotation: -360,
                    delay: 0.1,
                    duration: 0.55,
                    ease: 'none',
                    repeat: -1,
                })
                // 手手抖動
            }
        },
    })

    // 文字跑馬燈
    function RunningText() {
        const container_height = section3.value.getBoundingClientRect().height

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text_container.value, // 決定scrolltrigger要以哪一個元素作為觸發基準點
                // markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
                start: 'top 10%', // 決定動畫開始點的位置
                end: 'top -65%', // 決定動畫結束點的位置
                scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
            },
        })

        tl.fromTo(
            text_F2E.value,
            { y: container_height * 0.3 },
            { y: -0.8 * container_height, ease: 'none' },
        )
        tl.fromTo(
            text_2022.value,
            { y: container_height * 0.7 },
            { y: -0.8 * container_height, ease: 'none' },
        )
    }
})
</script>
<template>
    <section class="Section3 position-relative" ref="section3">
        <div class="Section3__scale">
            <svg class="Section3__FrontendUI__circle" viewbox="0 0 898 898" fill="none">
                <circle
                    ref="outer_circle"
                    cx="449"
                    cy="449"
                    r="277"
                    stroke="#D9F24F"
                    data-fallback="edge"
                    stroke-width="340px"
                    transform="rotate(-90, 449, 449)"
                    stroke-dasharray="0, 1745"
                ></circle>

                <circle
                    ref="inner_circle"
                    cx="449"
                    cy="449"
                    r="85"
                    stroke="#D9F24F"
                    data-fallback="edge"
                    stroke-width="8px"
                    transform="rotate(-90, 449, 449)"
                    stroke-dasharray="0, 536"
                >
                    <!-- stroke-dasharray = ( r * 2 ) * 3.14159 -->
                </circle>

                <image
                    ref="circle_text"
                    x="125"
                    y="126"
                    width="648"
                    height="646"
                    href="../assets/img/circle_text.svg"
                />
                <image
                    ref="bulb_icon"
                    x="411"
                    y="400"
                    width="76"
                    height="99"
                    href="../assets/img/bulb.svg"
                />
            </svg>

            <svg
                ref="text_container"
                viewbox="0 0 1200 898"
                class="Section3__runningText absolute-center"
                v-show="windowWidth > 1200"
            >
                <image
                    ref="text_F2E"
                    x="55"
                    y="468.5"
                    width="55"
                    height="263"
                    href="../assets/img/F2E.svg"
                />

                <image
                    ref="text_2022"
                    x="1090"
                    y="205"
                    width="55"
                    height="415"
                    href="../assets/img/2022.svg"
                />
            </svg>
            <svg viewbox="0 0 1200 898" class="Section3__hands absolute-center">
                <g ref="hand_left_container">
                    <image
                        ref="hand_left_icon"
                        x="0"
                        y="205"
                        width="548"
                        height="399"
                        href="../assets/img/hand_left.svg"
                    />
                </g>
                <g ref="hand_right_container">
                    <image
                        ref="hand_right_icon"
                        x="665"
                        y="175"
                        width="540"
                        height="459"
                        href="../assets/img/hand_right.svg"
                    />
                </g>
            </svg>
        </div>
    </section>
</template>
<style scoped lang="scss"></style>
