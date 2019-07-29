<template>
    <div class="now" ref="movie_scroll">
        <Loader v-if="isLoading"/>
        <Scroll :scrollToTop="scrollToTop" :scrollToEnd="scrollToEnd">
            <ul>
    <!--            <li>-->
    <!--                <div class="pic"></div>-->
    <!--                <div class="info_list">-->
    <!--                    <h2>无名之辈</h2>-->
    <!--                    <p>观众评分：<span class="red">9.2</span></p>-->
    <!--                    <p>主演：陈建斌 </p>-->
    <!--                    <p>今天还有77场</p>-->
    <!--                </div>-->
    <!--                <div class="btn">-->
    <!--                    <span class="btn_small">购票</span>-->
    <!--                </div>-->
    <!--            </li>-->
                <p>{{updateMsg}}</p>
                <li v-for="item in movieList" :key="item.id">
                    <div class="pic" @tap="handleTap"><img :src="item.icon" alt=""></div>
                    <div class="info_list">
                        <h2>{{item.title}}</h2>
                        <p>收藏次数：<span class="red">{{item.collectionCount}}</span></p>
                        <p>主再次播放次数：{{item.replyCount}} </p>
                        <p>分享次数：{{item.shareCount}}</p>
                    </div>
                    <div class="btn">
                        <a :href="item.playUrl" class="btn_small">播放</a>
                    </div>
                </li>
            </ul>
        </Scroll>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    export default {
        name: "NowPlaying",
        data(){
            return {
                movieList:[],
                updateMsg:'',
                isLoading:true
            }
        },
        methods:{
            handleTap(){
                console.log('aaaa');
            },
            scrollToTop(pos){
                if(pos.y>30){
                    this.updateMsg = '正在更新中...';
                }
            },
            scrollToEnd(pos){
                if(pos.y>30){
                    this.updateMsg = '更新成功';
                }
                setTimeout(()=>{
                    this.updateMsg = '';
                },1200)
            }
        },
        mounted() {
            this.axios.get('/todayVideo').then((res)=>{
                // console.log(res);
                var status = res.status;
                var datas = res.data.result;
                // console.log(datas);
                var len = datas.length;
                var movies = [];
                if(status === 200){
                    this.isLoading = false;
                    for (var i =1;i<len;i++){
                       if(datas[i].data.header){
                           var title = datas[i].data.header.issuerName || datas[i].data.header.title,//电影标题
                               id = datas[i].data.header.id,//id
                               icon = datas[i].data.header.icon,//小图标
                               collectionCount = datas[i].data.content.data.consumption.collectionCount,//收藏次数
                               replyCount = datas[i].data.content.data.consumption.replyCount,//再次播放次数
                               shareCount = datas[i].data.content.data.consumption.shareCount,//分享次数
                               playUrl = datas[i].data.content.data.playUrl;//播放地址
                           var obj = {
                               title:title,
                               id:id,
                               icon:icon,
                               collectionCount:collectionCount,
                               replyCount:replyCount,
                               shareCount:shareCount,
                               playUrl:playUrl
                           };
                           movies.push(obj);
                       }
                    }
                    this.movieList = movies;
                    this.$nextTick(()=>{
                       var scroll= new Bscroll(this.$refs.movie_scroll,{
                            tap:true,
                           probeType:1

                        });
                       // scroll.on('scroll',(pos)=>{
                       //
                       // })
                        scroll.on('touchEnd',(pos)=>{
                            // if(pos.y>30){
                            //     this.updateMsg = '更新成功';
                            // }
                            // setTimeout(()=>{
                            //     this.updateMsg = '';
                            // },1200)
                        });

                    })
                }
            })
        }
    }
</script>

<style scoped>
.now {
    width: 100%;
    height: 100%;
}
.now ul{
    width: 100%;
}
.now ul li{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom: 1px solid #cccccc;
}
.now .pic{
    width: 70px;
    height: 100px;
    flex: 1;
}
.now .pic img{
    width: 100%;
}
    .now .info_list{
        flex: 2;
        margin-left: 20px;
    }
.now .info_list h2{
    color: #333333;
    font-size: 20px;
    font-weight: normal;
}
.now .info_list p{
    line-height: 28px;
    color: #888888;
    font-size: 16px;
}
.now .info_list .red{
    color: red;
}
    .now .btn{
        flex: 1;
        align-self: center;
    }
.now .btn .btn_small{
    background: #bd4c38;
    border-radius: 4px;
    color: #ffffff;
    padding: 8px 12px;
    border: 1px solid #bd4c38;
}
</style>