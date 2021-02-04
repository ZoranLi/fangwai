<template>
    <div class="footer">
        <div class="footer_left">
            <p>联系我们</p>
            <p>商务合作 <em>bd@xiaohongchun.com</em></p>
            <p>公司地址 <em>北京市朝阳区东风北桥东风KASO402室</em></p>
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
        height: 23vw;
    }

    .footer_left {
        color: #ffffff;
        opacity: 0.5;
        font-family: PingFangSC-Light;
        font-size: .28rem;
    }

    .footer_left em {
        color: white;
        font-family: PingFangSC-Thin;
        font-size: .22rem;
        letter-spacing: 1px;
    }

    .footer img {
        width: 7vw;
        height: 8vw;
    }

</style>
