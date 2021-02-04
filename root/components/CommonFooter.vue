<template>
    <div class="footer">
        <div class="footer_left">
            <p><i>联系我们</i></p>
            <p><i>商务合作</i> <em>bd@xiaohongchun.com</em></p>
            <p><i>公司地址</i> <em>北京市朝阳区东风北桥东风KASO402室</em></p>
        </div>
        <img src="../static/images/footer_qr.png" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }

</script>

<style>
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1b1b1b;
        width: 100vw;
        height: 458px;
    }

    .footer_left {
        height: 165px;
        color: #ffffff;
        font-family: PingFangSC-Light;
        font-size: 22px;
        margin-right: 15vw;
    }

    .footer_left p:nth-child(1) {
        margin-top: 1vw;
    }

    .footer_left p:nth-child(2) {
        margin-top: 2.5vw;
    }

    .footer_left p:nth-child(3) {
        margin-top: 0.5vw;
    }

    .footer_left i {
        opacity: 0.5;
    }

    .footer_left em {
        color: white;
        font-family: PingFangSC-Thin;
        font-size: 22px;
        letter-spacing: 1px;
    }

    .footer img {
        width: 137px;
        height: 165px;
    }

</style>
