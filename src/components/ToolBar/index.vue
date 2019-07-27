<template>
    <div id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-shoucangyingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ToolBar"
    }
</script>

<style scoped>
    #footer{
        width: 100%;
        position: fixed;
        height: 58px;
        background: #ffffff;
        left: 0;
        bottom: 0;
        margin-top: 2px;
        border-top: 1px solid #cccccc;
    }
    #footer ul{
        display: flex;
        text-align: center;
        height: 50px;
        align-items: center;
    }
    #footer ul li{
        flex: 1;
        height: 40px;
    }
    #footer ul li.router-link-active{
        color: #bd4c38;
    }
    #footer ul li i{
        font-size: 16px;
    }
    #footer ul li p{
        font-size: 12px;
        color: #888888;
    }
</style>