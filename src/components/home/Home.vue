<template>
    <div id="main-content">
        <div class="main-user">
            <img src="../../assets/images/avatar.jpg" alt="" class="avatar">
            <div class="user-right">
                <p class="welcome"><span>下午好，</span><span>18888888888</span></p>
                <el-button class="logout" size="small">退出登录</el-button>
            </div>
        </div>
        <hr style="margin-top:100px;">
        <div class="main-btn">
            <div style="text-align: center" class="btn-group">
                <el-button @click="openGeneral">普通</el-button>
                <el-button type="primary" @click="openSuper">高级</el-button>
                <el-button type="danger" @click="openSuperVip">特级</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {

        }
    },
    methods: {
        openGeneral(){
            this.$router.push({path: '/employees',query:{type: 'general'}})
        },
        openSuper(){
            this.$router.push({path: '/employees',query:{type: 'super'}})
        },
        openSuperVip(){
            this.$router.push({path: '/employees',query:{type: 'vip'}})
        },

    }
}
</script>

<style scoped>
    .btn-group{
        margin-top:300px;
    }
    .main-user{
        overflow: hidden;
        font-size: 12px;
    }
    .main-user .avatar, .main-user .user-right{
        float: left;
    }
    .main-user .avatar{
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border:1px solid #ccc;
        overflow: hidden;
    }
    .main-user .user-right{
        margin-top:10px;
        margin-left:40px;
    }
    .main-user .user-right .el-button{
        margin-top:10px;
        width:90px;
    }
</style>