<template>
    <div class="now clearfix">
        <Loader v-if="isLoading"/>
        <Scroll>
            <ul>
                <li v-for="item in movieLists" :key="item.id">
                    <div class="pic"><img :src="item.icon" alt=""></div>
                    <div class="info_list">
                        <h2>{{item.title}}</h2>
                        <p>{{item.description}}</p>
                    </div>
                    <div class="btn">
                        <a :href="item.actionUrl" class="btn_small">详情</a>
                    </div>
                </li>
            </ul>
        </Scroll>
    </div>
</template>

<script>
    export default {
        name: "ComingSoon",
        data(){
            return {
                movieLists:[],
                isLoading:true
            }
        },
        mounted() {
            this.axios.get('/videoCategory').then((res)=>{
                // console.log(res);
                var msg = res.data.code;
                var datas = res.data.result.itemList;
                var len =res.data.result.count;
                var movies = [];
                if(msg === 200){
                    this.isLoading = false;
                    for(var i =0;i<len;i++){
                        var actionUrl = datas[i].data.actionUrl,//
                            description = datas[i].data.description,
                            icon = datas[i].data.icon,
                            id = datas[i].data.id,
                            title = datas[i].data.title.slice(1);
                        var obj ={
                            actionUrl,
                            description,
                            icon,
                            id,
                            title
                        };
                        movies.push(obj);
                    }
                    //console.log(movies);
                    this.movieLists = movies;
                }
            })
        }
    }
</script>

<style scoped>
    .now {
        width: 100%;
        display: flex;

        overflow: auto;
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
    .now .btn a{
        text-decoration: none;
    }
    .now .btn .btn_small{
        background: #bd4c38;
        border-radius: 4px;
        color: #ffffff;
        padding: 8px 12px;
        border: 1px solid #bd4c38;
    }
</style>