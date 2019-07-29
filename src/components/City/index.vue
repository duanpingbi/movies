<template>
    <Scroll>
    <div class="city_body">
        <div class="city_list">
                <div class="city_hot">
                    <h2>热门城市</h2>
                    <ul class="clearfix">
                        <li>北京</li>
                        <li @tap="handelTap(2,'上海')">上海</li>
                        <li>广东</li>
                        <li>深圳</li>
                        <li>成都</li>
                    </ul>
                </div>
                <div class="city_sort">
                    <div>
                        <h2>A</h2>
                        <ul>
                            <li>鞍山</li>
                            <li>安庆</li>
                            <li>安徽</li>
                        </ul>
                    </div>
                    <div>
                        <h2>B</h2>
                        <ul>
                            <li>鞍山</li>
                            <li>安庆</li>
                            <li>安徽</li>
                        </ul>
                    </div>
                    <div>
                        <h2>C</h2>
                        <ul>
                            <li>鞍山</li>
                            <li>安庆</li>
                            <li>安徽</li>
                        </ul>
                    </div>
                </div>
                <div class="city_index">
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </div>
            </div>
    </div>
    </Scroll>
</template>

<script>
    export default {
        name: "City",
        methods:{
            handelTap(id,nm){
                this.$store.commit('City/CITY_INFO',{id,nm});
            }
        }
    }
</script>

<style scoped>
    .city_body{
        margin-top: 45px;
        display: flex;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
    }
    .city_body .city_list{
        width: 100%;
        overflow: auto;
        background: #ffffff;
        height: 100%;
    }
    .city_body .city_list::-webkit-scrollbar{
        background: transparent;
        width: 0;
    }
    .city_body .city_hot{
        margin-top: 20px;

    }
    .city_body .city_hot h2,.city_body .city_sort h2{
        padding-left: 15px;
        line-height: 34px;
        font-size: 16px;
        font-weight: normal;

        background: #f0f0f0;
    }
    .city_body .city_hot ul li{
        float: left;
        background: #ffffff;
        width: 29%;
        height: 34px;
        line-height: 34px;
        text-align: center;
        margin-top: 15px;
        margin-left: 3%;
    }
    .city_body .city_sort div{
        margin-top: 20px;
    }
    .city_body .city_sort div ul li{
        line-height: 34px;
        font-size: 16px;
        padding: 4px 10px;
    }
    .city_body .city_index{
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        position: fixed;
        right: 0;
        top: 45%;
    }
</style>