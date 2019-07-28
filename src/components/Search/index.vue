<template>
    <div class="search_body">
        <div class="sarch_input">
            <div class="search_input_wapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text">
            </div>
        </div>
        <div class="search_result">
            <h3>电视/电影</h3>
            <ul>
                <li>
                    <div class="img"></div>
                    <div class="info">
                        <p><span>无名之辈</span><span class="grade">8.8</span></p>
                        <p>A cold fish</p>
                        <p>喜剧、犯罪</p>
                        <p>2018-01-12</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
.search_body{
    flex: 1;
    overflow: auto;
}
 .search_body .sarch_input{
     padding: 8px 10px;
     background: #f5f5f5;
     border-bottom: 1px solid #e5e5e5;
 }
.search_body .sarch_input .search_input_wapper{
    padding: 0 0 0 10px;
    background: #ffffff;
    display: flex;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
}
.search_body .sarch_input .search_input_wapper i{
    font-size: 16px;
    padding: 10px 0;
}
.search_body .sarch_input .search_input_wapper input{
    font-size: 14px;
    outline: none;
    color: #333333;
    padding: 10px 0;
    margin-left: 10px;
    border: 1px solid #e6e6e6;
    width: 100%;
}
.search_body .search_result h3{
    font-size: 16px;
    border-bottom: 1px solid #bd642e;
    padding: 9px 15px;
    color: #888888;
}
.search_body .search_result li{
    overflow: auto;
    padding: 10px 15px;
    border-bottom: 1px solid #cccccc;
    box-sizing: border-box;
}
.search_body .search_result li .img{
    width: 60px;
    float: left;
}
.search_body .search_result li .img img{
    width: 100%;
}
.search_body .search_result li .info{
    float: left;
    margin-left: 15px;
    flex: 1;
}

.search_body .search_result li .info p{
    height: 22px;
    display: flex;
    line-height: 22px;
    font-size: 14px;
    color: #888888;
}
.search_body .search_result li .info p:nth-of-type(1), .search_body .search_result li span:nth-of-type(1){
    font-size: 18px;
    flex: 1;
}
.search_body .search_result li .info p:nth-of-type(1),.search_body .search_result li span:nth-of-type(2){
    color: #bd642e;
    font-size: 16px;
}
</style>