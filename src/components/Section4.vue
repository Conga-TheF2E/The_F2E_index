<script setup>

import { gsap } from '../utils/GSAP.js'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


onMounted(() => {
    gsap.set('.Section4', { opacity: 0, visibility: 'hidden' })
    let needInit = false

    // 偵測滾動範圍觸發動畫
    ScrollTrigger.create({
        trigger: '.Section4',
        start: 'top 15%',

        //向下滾動進入start點時觸發callback
        onEnter: function () {
            gsap.set('.Section4', { opacity: 1, visibility: 'visible' })
            if (!needInit) {
                needInit = true

                gsap.from('.title', {
                    opacity: 0,
                    duration: 1,
                })
                gsap.from('.titleBar', {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                })
                gsap.from('.outer', {
                    width: 0,
                    height: 0,
                    opacity: 0,
                    duration: 1
                })
                gsap.from('.hashtag', {
                    y: -70,
                    duration: 1,
                })
                gsap.from('.outerBar', {
                    width: "0px",
                    duration: 1,
                })
            }
        },
    })
})

function enter1() {
    gsap.to('#inner1', {
        width: '304px',
        height: '304px',
    });
}
function leave1() {
    gsap.to('#inner1', {
        width: '0px',
        height: '0px',
    });
}
function barEnter1() {
    gsap.to('#innerBar1', { width: '198px' })
}
function barLeave1() {
    gsap.to('#innerBar1', { width: '0px' })
}

function enter2() {
    gsap.to('#inner2', {
        width: '304px',
        height: '304px',
    });
}
function leave2() {
    gsap.to('#inner2', {
        width: '0px',
        height: '0px',
    });
}
function barEnter2() {
    gsap.to('#innerBar2', { width: '198px' })
}
function barLeave2() {
    gsap.to('#innerBar2', { width: '0px' })
}

function enter3() {
    gsap.to('#inner3', {
        width: '304px',
        height: '304px',
    });
}
function leave3() {
    gsap.to('#inner3', {
        width: '0px',
        height: '0px',
    });
}
function barEnter3() {
    gsap.to('#innerBar3', { width: '198px' })
}
function barLeave3() {
    gsap.to('#innerBar3', { width: '0px' })
}

</script>
<template>
    <section class="Section4">
        <h1 class="title">年度最強合作，三大主題來襲</h1>
        <h1 class="titlePad">年度最強合作，<br>
            &emsp;&emsp;&emsp;&ensp;三大主題來襲
        </h1>
        <div class="titleBar"><img src="../assets/img/各路廠商.svg" alt=""></div>
        <div class="titleBarPad">
            <div><img src="../assets/img/Section4PadTitlebar1.svg" alt=""></div>
            <div style="top: 66px; left: 50%; transform: translate(-50%, 0%)"><img
                    src="../assets/img/Section4PadTitlebar2.svg" alt=""></div>
            <div style="bottom: 0px; right: 0px"><img src="../assets/img/Section4PadTitlebar3.svg" alt=""></div>
        </div>
        <div class="blockContainer">
            <div id="block1" class="block">
                <div class="mask" @mouseover="enter1(), barEnter1()" @mouseleave="leave1(), barLeave1()"></div>
                <div class="outer">
                </div>
                <div class="hashtag">
                    <img src="../assets/img/hashtag_1.svg" alt="">
                </div>
                <div class="outerContent"><img src="../assets/img/Q1.svg" alt=""></div>
                <div id="inner1" class="inner">
                    <div class="innerContent"><img src="../assets/img/A1.svg" alt=""></div>
                </div>
                <div class="outerBar">
                    <p>WEEK 1</p>
                    <div id="innerBar1" class="innerBar">
                        <div class="innerBarContent">
                            <img src="../assets/img/廠商1.svg" alt="">
                        </div>
                    </div>
                </div>

            </div>
            <div id="block2" class="block">
                <div class="mask" @mouseover="enter2(), barEnter2()" @mouseleave="leave2(), barLeave2()"></div>
                <div class="outer">
                </div>
                <div class="hashtag">
                    <img src="../assets/img/hashtag_2.svg" alt="">
                </div>
                <div class="outerContent"><img src="../assets/img/Q2.svg" alt=""></div>
                <div id="inner2" class="inner">
                    <div class="innerContent"><img src="../assets/img/A1.svg" alt=""></div>
                </div>
                <div class="outerBar">
                    <p>WEEK 2</p>
                    <div id="innerBar2" class="innerBar">
                        <div class="innerBarContent" style="left:76px">
                            <img src="../assets/img/廠商2.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div id="block3" class="block">
                <div class="mask" @mouseover="enter3(), barEnter3()" @mouseleave="leave3(), barLeave3()"></div>
                <div class="outer">
                    <div class="hashtag" style="width:174px;">
                        <img src="../assets/img/hashtag_3.svg" alt="">
                    </div>
                    <div class="outerContent" style="width:266px;height: 35px;top: 135px;"><img
                            src="../assets/img/Q3.svg" alt="">
                    </div>
                    <div id="inner3" class="inner">
                        <div class="innerContent"><img src="../assets/img/A1.svg" alt=""></div>
                    </div>
                </div>
                <div class="outerBar">
                    <p>WEEK 3</p>
                    <div id="innerBar3" class="innerBar">
                        <div class="innerBarContent">
                            <img src="../assets/img/廠商3.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!--for pad-->
            <div class="blockPad">
                <img src="../assets/img/Section4BlockPad1.svg" alt="">
                <img src="../assets/img/Section4PointerLeftPad.svg" alt="">
                <p>
                    點擊查看<br>
                    關卡資訊
                </p>
            </div>
            <div class="blockPad">
                <p>
                    點擊查看<br>
                    關卡資訊
                </p>
                <img src="../assets/img/Section4PointerLeftPad.svg" alt="">
                <img src="../assets/img/Section4BlockPad1.svg" alt="">
            </div>
            <div class="blockPad">
                <img src="../assets/img/Section4BlockPad1.svg" alt="">
                <img src="../assets/img/Section4PointerLeftPad.svg" alt="">
                <p>
                    點擊查看<br>
                    關卡資訊
                </p>
            </div>
        </div>
    </section>
</template>