<template>
    <div class="login_body">
        <div>
            <input class="login_text" type="text" placeholder="用户名/账号/email">
        </div>
        <div>
            <input class="login_text" type="password" placeholder="密码">
        </div>
        <div class="login_btn">
            <input type="submit" value="登陆">
        </div>
        <div class="class_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
.login_body{
    width: 100%;
    margin-top: 50px;
}
.login_body .login_text{
    width: 100%;
    border-radius: 4px;
    height: 40px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 20px;
    font-size: 16px;
}
.login_body .login_btn{
    height: 50px;
    margin: 10px;

}
.login_body .login_btn input{
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;
    border-radius: 4px;
    background: #bd4c38;
    color: #ffffff;
    font-size: 18px;
}
.login_body .class_link{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}
.login_body .class_link a{
    text-decoration: none;
    font-size: 16px;
    color: #bd4c38;
}
</style>