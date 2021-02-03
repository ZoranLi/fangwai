<template>
    <div class="navigator">
        <span>芳外</span>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于芳外</a></li>
            <li><a href="#">购买产品</a></li>
            <li><a href="#">联系我们</a></li>
        </ul>
    </div>
</template>

<script>
    export default {}

</script>

<style>
    .navigator {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffead9;
        font-size: 28px;
        font-family: PingFangSC-Light, sans-serif;
    }

    .navigator span {
        margin-left: 80px;
    }

    .navigator ul {
        margin-right: 80px;
    }

    .navigator ul li {
        float: left;
        margin-left: 20px;
        font-size: 22px;
    }

</style>