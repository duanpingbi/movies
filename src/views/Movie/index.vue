<template>
    <div id="main">
        <Header title="电影"/>
            <div id="content">
                <div class="movie_menu clearfix">
                    <router-link class="movie_city" to="/movie/city" tag="div">
                        <span>{{$store.state.City.nm}}</span><i class="iconfont icon-xiala"></i>
                    </router-link>
                    <div class="hot_switch" >
                        <router-link class="hot_item" to="/movie/nowPlaying" tag="div">热门推荐</router-link>
                        <router-link class="hot_item" to="/movie/comingSoon" tag="div">分类推荐</router-link>
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
    import { messageBox} from '@/components/JS';
    export default {
        name: "Movie",
        components:{
            Header,
            ToolBar
        },
        mounted() {
            var that = this;
            this.axios.get('/json').then((res)=>{
                console.log(res);
                var code = res.status;
                if(code === 200){
                    var nm = res.data.city;
                    var id = res.data.lat;
                    console.log(that.$store.state.City.id);
                    if(that.$store.state.City.id == id){
                        return;
                    }
                    messageBox({
                        title:'定位',
                        content:nm,
                        ok:'切换定位',
                        cancel:'取消',
                        handelOk:function () {
                            that.$store.commit('City/CITY_INFO',{id,nm});
                        }
                    })
                }
            })

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
     z-index: 999;
     background: #ffffff;
 }
 #content .movie_menu .movie_city{
     margin-left: 20px;
     height: 46px;
     line-height: 46px;
     font-size: 18px;
     color: #888888;
     font-weight: bold;
 }
 #content .movie_menu .hot_switch{
     display: flex;
     height: 46px;
     line-height: 46px;
 }
 #content .movie_menu .hot_switch .hot_item{
     width: 80px;
     text-align: center;
     color: #888888;
     font-size: 18px;
     font-weight: bold;
 }
 #content .movie_menu .search{
     margin-right: 20px;
 }
 #content .movie_menu .search i{
     font-weight: bold;
     font-size: 24px;
     color: #888888;
 }
 .router-link-active{
     color: #bd4c38 !important;
     border-bottom: 2px solid #bd4c38;
 }
</style>