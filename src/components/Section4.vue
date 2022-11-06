<script setup>

import { gsap } from '../utils/GSAP.js'
import { ref } from 'vue'

const outer = ref(null)

function getID(){
    console.log(outer.value)
}
</script>
<template>
    <section class="Section4">
        <h1 class="title">年度最強合作，三大主題來襲</h1>
        <div class="titleBar"><img src="../assets/img/各路廠商.svg" alt=""></div>
        <div class="blockContainer">
            <div class="block">
                <div class="outer" ref="outer" @click="getID()">
                    <div class="hashtag">
                        <img src="../assets/img/hashtag_1.svg" alt="">
                    </div>
                    <div class="outerContent"><img src="../assets/img/Q1.svg" alt=""></div>
                    <div class="inner">
                        <div class="innerContent"><img src="../assets/img/A1.svg" alt=""></div>
                    </div>
                </div>
                <div class="outerBar">
                    <p>WEEK　1</p>
                    <div class="innerBar">
                        <div class="innerBarContent">
                            <img src="../assets/img/廠商1.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="outer" ref="outer" @click="getID()">
                    <div class="hashtag">
                        <img src="../assets/img/hashtag_1.svg" alt="">
                    </div>
                    <div class="outerContent"><img src="../assets/img/Q1.svg" alt=""></div>
                    <div class="inner">
                        <div class="innerContent"><img src="../assets/img/A1.svg" alt=""></div>
                    </div>
                </div>
                <div class="outerBar">
                    <p>WEEK　1</p>
                    <div class="innerBar">
                        <div class="innerBarContent">
                            <img src="../assets/img/廠商1.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="outer" ref="outer" @click="getID()">
                    <div class="hashtag">
                        <img src="../assets/img/hashtag_1.svg" alt="">
                    </div>
                    <div class="outerContent"><img src="../assets/img/Q1.svg" alt=""></div>
                    <div class="inner">
                        <div class="innerContent"><img src="../assets/img/A1.svg" alt=""></div>
                    </div>
                </div>
                <div class="outerBar">
                    <p>WEEK　1</p>
                    <div class="innerBar">
                        <div class="innerBarContent">
                            <img src="../assets/img/廠商1.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
</template>