<template>
    <div id="main">
        <Header title="电影"/>
            <div id="content">
                <div class="movie_menu">
                    <router-link class="movie_city" to="/movie/city" tag="div">
                        <span>大连</span><i class="iconfont icon-xiala"></i>
                    </router-link>
                    <div class="hot_switch" >
                        <router-link class="hot_item" to="/movie/nowPlaying" tag="div">正在热映</router-link>
                        <router-link class="hot_item" to="/movie/comingSoon" tag="div">即将上映</router-link>
                    </div>
                    <router-link class="search" to="/movie/search" tag="div">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                </div>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </div>
        <ToolBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import ToolBar from '@/components/ToolBar';
    export default {
        name: "Movie",
        components:{
            Header,
            ToolBar
        }
    }
</script>

<style scoped>
 #content{
     width: 100%;
     height: 50px;
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow: auto;
     margin-bottom: 50px;
 }
 #content .movie_menu{
     width: 100%;
     display: flex;
     justify-content: space-between;
     margin-bottom: 4px;
     height: 46px;
     line-height: 46px;
     border-bottom: 1px solid #cccccc;
 }
 #content .movie_menu .movie_city{
     margin-left: 20px;
     height: 100%;
     font-size: 18px;
     color: #888888;
     font-weight: bold;
     line-height: 46px;
 }
 #content .movie_menu .movie_city .router-link-active{
     color: #bd4c38;
 }
 #content .movie_menu .hot_switch{
     display: flex;
     height: 100%;
     line-height: 46px;
 }
 #content .movie_menu .hot_switch .hot_item{
     width: 80px;
     text-align: center;
     color: #888888;
     font-size: 18px;
     font-weight: bold;
 }
 #content .movie_menu .hot_switch .hot_item .router-link-active{
     color: #bd4c38;
     border-bottom: 2px solid #bd4c38;
 }
 #content .movie_menu .search{
     margin-right: 20px;
 }
 #content .movie_menu .search i{
     font-weight: bold;
     font-size: 24px;
     color: #888888;
 }
 #content .movie_menu .search i .router-link-active{
     color: #bd4c38;
 }
</style>