<script setup>
import kdan_logo from '../assets/img/kdan_logo.svg'
import titan_logo from '../assets/img/titan_logo.svg'
import blockstudio_logo from '../assets/img/blockstudio_logo.svg'
</script>
<template>
    <section class="Section6 mb-10">
        <div class="Section6__title clip-each--Section6_title mb-11">
            <h2>
                區區修練<br class="Section6__title__breakLine" />已經沒辦法滿足了嗎 ?
                <br />
                還有比賽等著你 !
            </h2>
        </div>
        <div class="container" style="padding: 0 40px">
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
                <h3 class="Section6__competitionAwards__title mb-7">獎項</h3>
                <ul class="Section6__competitionAwards__content">
                    <li>初選佳作 共六十位<span>|</span>數位獎狀</li>
                    <li>個人企業獎 共六位<span>|</span>NTD 3,000 / 位</li>
                    <li>團體企業獎 共三組<span>|</span>NTD 10,000 / 組</li>
                </ul>
                <p class="Section6__competitionAwards__note">以上皆提供完賽數位獎狀</p>
            </div>
            <div class="Section6__sponsors">
                <h3 class="mb-10">贊助單位</h3>

                <div class="Section6__sponsor__beehive__wrapper">
                    <div class="Section6__sponsor__beehive clip-each--hexagon">
                        <img style="width: 55%" :src="titan_logo" alt="鈦坦科技" />
                    </div>
                </div>
                <div class="Section6__sponsor__beehive__wrapper">
                    <div class="Section6__sponsor__beehive clip-each--hexagon">
                        <img style="width: 55%" :src="kdan_logo" alt="凱鈿行動科技" />
                    </div>
                    <div class="Section6__sponsor__beehive clip-each--hexagon">
                        <img style="width: 55%" :src="blockstudio_logo" alt="板塊設計" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss"></style>
