<template>
    <div>
        <Header title="电影院"/>
        <div id="content">
            <div class="c_menu">
                <div class="city_switch">
                   全城 <i class="iconfont icon-xiala"></i>
                </div>
                <div class="brand_switch">
                    品牌 <i class="iconfont icon-xiala"></i>
                </div>
                <div class="feature_switch">
                    特色<i class="iconfont icon-xiala"></i>
                </div>
            </div>
            <Clist />
        </div>
        <ToolBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import ToolBar from '@/components/ToolBar';
    import Clist from '@/components/Clist';
    export default {
        name: "Cinema",
        components:{
            Header,
            ToolBar,
            Clist
        }
    }
</script>

<style scoped>
.c_menu{
    flex: 1;
    overflow: auto;
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    border-bottom: 1px solid #cccccc;
}
</style>