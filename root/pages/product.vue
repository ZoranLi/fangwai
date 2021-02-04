<template>
    <div class="container">
        <Common-Header></Common-Header>
        <div class="header_banner">
            <img src="../static/images/banner.webp" alt="">
            <span>多一点无用的享乐，生活才有味道</span>
        </div>

        <div class="production">
            <img src="../static/images/production.webp" alt="">
        </div>


        <div class="description">
            <p>发财香水</p>
            <p>东方匠心调香师打磨发财香味</p>
            <img src="../static/images/qr.png" alt="">
            <p>扫码快速购买</p>
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
                title: '购买产品'
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

    .header_banner span {
        position: absolute;
        font-size: 33px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 510px;
        font-family: PingFangSC-Light, sans-serif;
        color: #eeded4;
    }

    .production {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 6vw;
    }

    .production img {
        width: 62vw;
        height: 38vw;
    }

    .description {
        margin-top: 3vw;
        text-align: center;
        font-family: PingFangSC-Light;
        font-size: 40px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #191919;
    }

    .description p:nth-child(2) {
        margin-top: 10px;
        font-family: PingFangSC-Thin;
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 45px;
        letter-spacing: 2px;
        color: #191919;
    }

    .description p:nth-child(4) {
        font-size: 28px;
        font-family: PingFangSC-Light;
        color: #1e1e1e;
        margin-bottom: 116px;
    }

</style>
