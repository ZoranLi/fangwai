<template>
    <div class="container">
        <Common-Header></Common-Header>
        <div class="header_banner">
            <img src="../static/images/about_banner.png" alt="">
            <div class="header_message">
                <p>关于我们</p>
                <p>向世界分享中国人的生活智慧与情趣</p>
            </div>
        </div>

        <div class="philosophy">
            <p>品牌哲学</p>
            <p>芳外，又方外，世俗之外；</p>
            <p>于日用必需以外，多一点无用的享乐，生活才有味道。</p>
            <p>在滚滚红尘之中，保留一份对方外世界的想象与勇敢。</p>
            <p>诸多求不得之时，用芳香唤醒你心中的那片桃花源。&nbsp;&nbsp;&nbsp;</p>
            <img src="../static/images/philosophy.png" alt="">
        </div>

        <div class="mission">
            <div class="mission_description">
                <p>品牌使命</p>
                <p>"中国香文化历经千年，从祭祀焚香通天，到雅士怡情养性，再到大众“一日不可无香”，中国香文化在《诗经》、《红楼梦》、《陈氏香谱》、《香乘》等历代经典之作中传承。</p>

                <p> 中国古人有九雅之说：寻幽、酌酒、抚琴、莳花、焚香、品茗、听雨、赏雪、侯月。而“焚香”被推崇为九雅之首。于香雾飘渺之中，寻本心之道。</p>

                <p> 可谓香道源远，自洽闲逸。</p>

                <p> 涉过千年之河，历经兴衰浮沉，如今再度富足的我们重获寻雅之力，可追随古人的志趣，让中国芳香重回世界舞台。</p>
            </div>

            <img src="../static/images/mission.png" alt="">

        </div>

        <!--品牌愿景-->
        <div class="hope">

            <img src="../static/images/mission.png" alt="">

            <div class="hope_description">
                <p>品牌愿景</p>
                <p>清晨到日落，<br/>
                    过往到如今，<br/>
                    入世到出世，</p>

                <p>让古老的传统在新时代焕发新生，在窗前、在桌边、在楼宇、在浴室；</p>
                <p>我们将千年来沉淀下的精神之气化作中国芳香的代表，向全世界分享中国人的生活智慧与情趣。</p>
            </div>
        </div>

        <div class="divider_content">

        </div>
        <Common-Footer></Common-Footer>
    </div>
</template>

<script>
    import CommonHeader from '~/components/CommonHeader'
    import CommonFooter from '~/components/CommonFooter'

    export default {
        head: function () {
            return this.$seo({
                title: '关于我们'
            })
        },
        components: {
            CommonHeader, CommonFooter
        }
    }
</script>

<style>
    ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }

    .container {
        font-size: 100%;
        margin: 0 auto;
        width: 100vw;
        min-height: 100vh;
    }

    .header_banner {
        position: relative;
        background: linear-gradient(#841211, white);
    }

    .header_banner img {
        width: 100%;
        height: 40vw;
    }

    .header_banner .header_message {
        text-align: center;
        position: absolute;
        font-size: 2vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 510px;
        font-family: PingFangSC-Light, sans-serif;
        color: #eeded4;
    }

    .header_banner .header_message p:nth-child(1) {
        font-size: 3vw;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 7px;
        color: #ffead9;
        font-family: SourceHanSerifCN-Medium;
    }

    .header_banner .header_message p:nth-child(2) {
        font-family: PingFangSC-Thin;
        font-size: 2vw;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #ffead9;
    }

    .philosophy {
        width: 63vw;
        margin-top: 6vw;
        margin: 0 auto;
        text-align: center;
    }

    .philosophy p:nth-child(1) {
        font-family: PingFangSC-Light;
        margin-top: 6vw;
        font-size: 2vw;
        letter-spacing: 0;
        color: #191919;
    }

    .philosophy p:nth-child(2) {
        font-family: PingFangSC-Light;
        font-size: 1vw;
        letter-spacing: 0;
        color: #191919;
    }

    .philosophy p:nth-child(3) {
        margin-top: 3vw;
    }

    .philosophy p:nth-child(3), .philosophy p:nth-child(4), .philosophy p:nth-child(5) {
        font-family: PingFangSC-Light;
        font-size: 1vw;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #191919;
    }

    .philosophy img {
        margin-top: 3vw;
        width: 62vw;
        height: 38vw;
    }

    .mission {
        width: 63vw;
        margin: 0 auto;
        display: flex;
        margin-top: 4vw;
        justify-content: space-between;
    }

    .mission .mission_description {
        width: 24vw;
    }

    .mission .mission_description p:nth-child(1) {
        margin-top: 5vw;
        font-family: PingFangSC-Light;
        font-size: 2vw;
        letter-spacing: 0;
        color: #191919;

    }

    .mission .mission_description p:not(:first-child) {
        font-family: PingFangSC-Light;
        font-size: 1vw;
        margin-top: 2vw;
        letter-spacing: 0;
        color: #191919;
    }

    .mission img {
        width: 29vw;
        height: 42vw;
    }

    .hope {
        width: 63vw;
        margin: 0 auto;
        display: flex;
        margin-top: 4vw;
        justify-content: space-between;
    }

    .hope .hope_description {
        width: 24vw;
    }

    .hope .hope_description p:nth-child(1) {
        margin-top: 5vw;
        font-family: PingFangSC-Light;
        font-size: 2vw;
        letter-spacing: 0;
        color: #191919;

    }

    .hope .hope_description p:not(:first-child) {
        font-family: PingFangSC-Light;
        font-size: 1vw;
        margin-top: 2vw;
        letter-spacing: 0;
        color: #191919;
    }

    .hope img {
        width: 29vw;
        height: 42vw;
    }

    .divider_content {
        width: 100vw;
        height: 8vw;
    }

</style>
