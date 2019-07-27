<template>
    <div>
        <Header title="我的电影院" />
        <ToolBar />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import ToolBar from '@/components/ToolBar';
    export default {
        name: "mine",
        components:{
            Header,
            ToolBar
        }
    }
</script>

<style scoped>

</style>