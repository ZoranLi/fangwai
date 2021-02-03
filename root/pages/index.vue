<template>
    <div class="container">
        <Common-Header></Common-Header>
    </div>
</template>

<script>
    import CommonHeader from '~/components/CommonHeader'

    export default {
        head: function () {
            return this.$seo({
                title: '芳外'
            })
        },
        components: {
            CommonHeader
        }
    }
</script>

<style>
    .container {
        font-size: 100%;
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        background: url("../static/images/background.webp");
        background-size: cover;
    }

</style>
