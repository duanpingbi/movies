<template>
    <div class="now">
        <ul>
            <li>
                <div class="pic"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众评分：<span class="red">9.2</span></p>
                    <p>主演：陈建斌 </p>
                    <p>今天还有77场</p>
                </div>
                <div class="btn">
                    <span class="btn_small">购票</span>
                </div>
            </li>
            <li>
                <div class="pic"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众评分：<span class="red">9.2</span></p>
                    <p>主演：陈建斌 </p>
                    <p>今天还有77场</p>
                </div>
                <div class="btn">
                    <span class="btn_small">购票</span>
                </div>
            </li>
            <li>
                <div class="pic"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众评分：<span class="red">9.2</span></p>
                    <p>主演：陈建斌 </p>
                    <p>今天还有77场</p>
                </div>
                <div class="btn">
                    <span class="btn_small">购票</span>
                </div>
            </li>
            <li>
                <div class="pic"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众评分：<span class="red">9.2</span></p>
                    <p>主演：陈建斌 </p>
                    <p>今天还有77场</p>
                </div>
                <div class="btn">
                    <span class="btn_small">购票</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NowPlaying"
    }
</script>

<style scoped>
.now {
    width: 100%;
    display: flex;

    overflow: auto;
}
.now ul{
    margin: 20px 0;
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
    height: 110px;
    background: darkkhaki;
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