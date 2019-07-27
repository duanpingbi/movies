<template>
    <div id="head">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            title:{
                type:String,
                default:'电影APP'
            }
        }
    }
</script>

<style scoped>
    #head{
        width: 100%;
        height: 50px;
        color: #ffffff;
        background: #bd4c38;
        border-bottom: 1px solid #bd4c38;
        position: relative;
        top: 0;
        left: 0;
    }
    #head h1{
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
    }
</style>