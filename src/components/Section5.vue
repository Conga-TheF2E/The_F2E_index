<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from '../utils/GSAP.js'

const slider = ref(null)
const Section5__calendarBar__1 = ref(null)
const sliderPervious = ref(0)

onMounted(() => {
    const calendarBar_items_list = Object.keys(Section5__calendarBar__1.value.children).map(
        (key) => {
            return Section5__calendarBar__1.value.children[key]
        },
    )
    calendarBar_items_list[0].classList.add('Section5__calendarBar__active')

    slider.value.addEventListener('input', () => {
        const currentValue = slider.value.value
        console.log('currentValue', currentValue)
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
</script>
<template>
    <section class="Section5">
        <div class="date">
            <div class="pointer"><img src="../assets/img/Section5_left_pointer.svg" alt="" /></div>
            <div class="dateImg1"><img src="../assets/img/page5-1.svg" alt="" /></div>
            <div class="dateImg2" v-show="false">
                <img src="../assets/img/page5-2.svg" alt="" />
            </div>
            <div class="pointer"><img src="../assets/img/Section5_right_pointer.svg" alt="" /></div>
        </div>

        <input type="range" min="1" max="48" value="1" class="Section5__slider" ref="slider" />

        <ul class="Section5__calendarBar" ref="Section5__calendarBar__1">
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

        <ul class="Section5__calendarBar">
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
    </section>
</template>
