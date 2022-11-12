<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from '../utils/GSAP.js'

const slider = ref(null)

onMounted(() => {
    slider.value.addEventListener('change', () => {
        const currentValue = slider.value.value
        console.log('currentValue', currentValue)
    })
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

        <input type="range" min="1" max="50" value="1" class="Section5__slider" ref="slider" />

        <ul class="Section5__calendarBar">
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
            <li style="flex: 17; padding: 0 calc(16 / 2 * 1px)">報名時間</li>
            <li>
                <p>Oct.</p>
                <p>31</p>
            </li>
            <li>
                <p>Oct.</p>
                <p>13</p>
            </li>

            <li style="flex: 27; padding: 0 calc(26 / 2 * 1px)">開賽 / 登入作品</li>

            <li>
                <p>Nov.</p>
                <p>28</p>
            </li>
            <li style="visibility: hidden"></li>
        </ul>
    </section>
</template>
