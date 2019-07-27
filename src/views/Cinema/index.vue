<template>
    <div>
        <Header title="电影院"/>
        <ToolBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import ToolBar from '@/components/ToolBar';
    export default {
        name: "Cinema",
        components:{
            Header,
            ToolBar
        }
    }
</script>

<style scoped>

</style>