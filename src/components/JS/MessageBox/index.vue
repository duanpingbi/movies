<template>
    <div class="msgBox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div @click="handelCancel">{{cancel}}</div>
            <div @click="handelOk">{{ok}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageBox"
    }
</script>

<style scoped>
.msgBox{
    width: 200px;
    height: 120px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    margin-left: -80px;
    background: #ffffff;
    box-shadow: 3px 3px 3px 1px #cccccc;
    z-index: 1000;
}
.msgBox h2{
    text-align: center;
    font-size: 18px;
    line-height: 40px;
}
.msgBox p{
    text-align: center;
    line-height: 40px;
}
.msgBox > div{
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.msgBox > div div{
    flex: 1;
    border-top:1px solid #cccccc;
    line-height: 30px;
    text-align: center;
    border-right:1px solid #cccccc;
}
.msgBox > div:last-child{
    border-right:none;
}
</style>