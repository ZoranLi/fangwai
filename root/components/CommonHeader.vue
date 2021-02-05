<template>
    <div class="navigator">
        <span>芳外</span>
        <ul>
            <li v-for="(item,index) in list">
                <a @click="navigation(item)">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        name: '首页', path: '/'
                    },
                    {
                        name: '关于芳外', path: '/about'
                    },
                    {
                        name: '购买产品', path: '/product'
                    },
                    {
                        name: '联系我们', path: '/contact'
                    },
                ]
            }
        },
        methods: {
            navigation(item) {
                if (this.$route.path === item.path) {
                    return
                }
                location.href = item.path
            }
        }
    }

</script>

<style>
    .navigator {
        z-index: 10;
        width: 100vw;
        height: 10vw;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffead9;
        font-size: 3vw;
        font-family: PingFangSC-Light;
    }

    .navigator span {
        margin-left: 4vw;
        min-width: 87px;
    }

    .navigator ul {
        /*min-width: 380px;*/
        margin-right: 12vw;
    }

    .navigator ul li {
        float: left;
        margin-left: 20px;
        font-size: 2vw;
    }

    .navigator ul li a {
        cursor: pointer;
    }

</style>