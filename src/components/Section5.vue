<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from '../utils/GSAP.js'

const slider = ref(null)
const Section5__calendarBar__1 = ref(null)
const sliderPervious = ref(0)
const dateImgShow1 = ref(true)
const posterShow = ref(true)

onMounted(() => {
    gsap.set('.dateImg2', { opacity: 0, display: "none", x: -50 })
    const calendarBar_items_list = Object.keys(Section5__calendarBar__1.value.children).map(
        (key) => {
            return Section5__calendarBar__1.value.children[key]
        },
    )
    calendarBar_items_list[0].classList.add('Section5__calendarBar__active')


    slider.value.addEventListener('input', () => {
        const currentValue = slider.value.value
        console.log('currentValue', currentValue)
        if (currentValue >= 20) {
            dateImgShow1.value = false
        }
        else {
            dateImgShow1.value = true
        }
        if (dateImgShow1.value == false) {
            gsap.to('.dateImg1', { opacity: 0, x: -100, display: "none", duration: 0.5 })
            gsap.to('.dateImg2', { opacity: 1, x: 0, display: "block", duration: 0.5, delay: 0.5 })
        }
        else {
            gsap.to('.dateImg2', { opacity: 0, x: 100, duration: 0.5, display: "none" })
            gsap.to('.dateImg1', { opacity: 1, x: 0, duration: 0.5, display: "block", delay: 0.5 })
        }
        controlCalendarBarSlider(Number(currentValue))
    })

    // 由Slider觸發的動畫
    function controlCalendarBarSlider(newValue) {
        let changeColorList
        let needDeleteActiveIndex
        // 起點到終點(終點為最後停下)
        if (sliderPervious.value < newValue) {
            needDeleteActiveIndex = sliderPervious.value == 0 ? 0 : sliderPervious.value - 1
            changeColorList = calendarBar_items_list.slice(needDeleteActiveIndex, newValue)
        } else if (sliderPervious.value > newValue) {
            needDeleteActiveIndex = sliderPervious.value
            changeColorList = calendarBar_items_list
                .slice(newValue - 1, sliderPervious.value)
                .reverse()
        }

        Array.prototype.forEach.call(changeColorList, function (item, index) {
            const timeline = gsap.timeline()
            timeline.to(item, {
                background: '#d9f24f',
                color: '#1f1f1f',
                duration: 0.2,
                delay: 0.025 * index,
            })

            // 保留最後一個active
            if (index !== changeColorList.length - 1) {
                timeline.to(item, { background: '#4f26e9', color: '#fff', duration: 0.8 })
            }
        })

        sliderPervious.value = newValue
    }
})

function posterAppear() {
    gsap.to('.poster', { width: "954px", height: "469px", duration: 0.5 })
}
function posterDisappear() {
    gsap.to('.poster', { width: "0px", height: "0px", duration: 0.5 })
}
</script>
<template>
    <section class="Section5">
        <div class="poster forPc">
            <div class="posterMask" v-on:click="posterDisappear()"></div><img src="../assets/img/海報1.svg" alt="">
        </div>
        <div class="date forPc">
            <div class="pointer pointer1"><img src="../assets/img/Section5_left_pointer.svg" alt="" /></div>
            <div class="dateImg dateImg1"><img src="../assets/img/page5-1.svg" alt="" /></div>
            <div class="dateImg dateImg2">
                <div class="moreComp" v-on:click="posterAppear()"><img src="../assets/img/按鈕｜額外競賽.svg" alt="">
                </div>
                <img src="../assets/img/page5-2.svg" alt="" />
            </div>
            <div class="pointer pointer2"><img src="../assets/img/Section5_right_pointer.svg" alt="" /></div>
        </div>

        <input type="range" min="1" max="48" value="1" class="Section5__slider forPc" ref="slider" />

        <ul class="Section5__calendarBar forPc" ref="Section5__calendarBar__1">
            <li>
                <p>Oct.</p>
                <p>12</p>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
                <p>Nov.</p>
                <p>5</p>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
                <p>Nov.</p>
                <p>29</p>
            </li>
        </ul>

        <ul class="Section5__calendarBar forPc">
            <li style="visibility: hidden"></li>
            <li>
                <p>Oct.</p>
                <p>13</p>
            </li>
            <li style="flex: calc(17 + (8 / 20))">
                <img src="../assets/img/報名時間.svg" style="width: 95px" />
            </li>

            <li>
                <p>Oct.</p>
                <p>31</p>
            </li>
            <li>
                <p>Oct.</p>
                <p>13</p>
            </li>

            <li style="flex: calc(27 + (24 / 20))">
                <img src="../assets/img/開賽登錄作品.svg" style="width: 168px" />
            </li>

            <li>
                <p>Nov.</p>
                <p>28</p>
            </li>
            <li style="visibility: hidden"></li>
        </ul>
        <div class="forPad"><img src="../assets/img/Section5Date1Pad.svg" alt=""><img
                src="../assets/img/Section5Date2Pad.svg" alt=""><img src="../assets/img/Section5PosterPad.svg" alt="">
        </div>
    </section>
</template>
