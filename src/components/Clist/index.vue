<template>
    <div class="c_body">
        <ul>
            <li>
                <div>
                    <span>大地影院</span>
                    <span class="q"><span class="price">22.5</span>元起</span>
                </div>
                <div class="adress">
                    <span>大润发</span>
                    <span>1109km</span>
                </div>
                <div class="card">
                    <span>小吃</span>
                    <span>折扣</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Clist"
    }
</script>

<style scoped>
.c_body{
    flex: 1;
    overflow: auto;
}
.c_body ul{
    padding-top: 20px;
}
.c_body ul li{
    border-bottom: 1px solid #cccccc;
    padding: 0 20px 20px 20px;
}
.c_body ul li div{
    margin-bottom: 10px;
}
.c_body ul li .q{
    font-size: 12px;
    color: #bd4c38;
}
.c_body ul li .price{
    font-size: 18px;
}
.c_body ul li .adress{
    font-size: 14px;
    color: #888888;
}
.c_body ul li .adress:nth-of-type(2){
    float: right;
}
.c_body ul li .card{
    display: flex;
}
.c_body ul li .card span{
    display: block;
    float: left;
    padding: 5px 8px;
    border: 1px solid #bd4c38;
    color: #bd642e;
    border-radius: 4px;
    line-height: 16px;
    text-align: center;
    margin-right: 10px;
}
</style>