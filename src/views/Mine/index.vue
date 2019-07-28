<template>
    <div>
        <Header title="我的电影院" />
        <Login/>
        <ToolBar />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import ToolBar from '@/components/ToolBar';
    import Login from '@/components/Login';
    export default {
        name: "mine",
        components:{
            Header,
            ToolBar,
            Login
        }
    }
</script>

<style scoped>

</style>