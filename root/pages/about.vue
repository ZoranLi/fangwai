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
            <p>诸多求不得之时，用芳香唤醒你心中的那片桃花源。</p>
            <img src="../static/images/production.png" alt="">
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
        font-size: 33px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 510px;
        font-family: PingFangSC-Light, sans-serif;
        color: #eeded4;
    }

    .header_banner .header_message p:nth-child(1) {
        font-size: 66px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 7px;
        color: #ffead9;
        font-family: SourceHanSerifCN-Medium;
    }

    .header_banner .header_message p:nth-child(2) {
        font-family: PingFangSC-Thin;
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 4px;
        color: #ffead9;
    }

    .philosophy {
        width: 100%;
        margin-top: 6vw;
    }

    .philosophy img {
        width: 62vw;
        height: 38vw;
    }


</style>
