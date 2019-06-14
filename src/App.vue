<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <div id="left-menu">
          <h4 class="logo">员工信息平台</h4>
          <el-menu
                default-active="1"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
              <el-menu-item index="1">
                <i class="el-icon-location"></i>
                <span>首页</span>
              </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>第三方平台</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="main-header">
            <div class="user">
              <el-dropdown>
                <i class="el-icon-user-solid"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <i class="el-icon-user"></i>
                    admin
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <i class="el-icon-thumb"></i>
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Home from './components/home/Home'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    },
  },
  components: {
    Home
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  html,body{
    height:100%;
  }
  ul{
    list-style: none;
  }
  body{
    background: #F7F7F7;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color:#333;
  }
  #app{
    height: 100%;
  }
  .el-container{
    height:100%;
  }
  .el-aside{
    height:100%;
    background-color: rgb(84, 92, 100);
  }
  .el-main{
    background: #fff;
    height:100%;
    margin-left:10px;
  }
  .el-menu{
    border-color:#545c64!important;
  }
  .logo{
    text-align: center;
    font-weight:normal;
    color:#fff;
    height:60px;
    line-height:60px;
  }
  .el-header{
    padding:0!important;
    margin-left:10px;
    background: #545c64;
  }
  .user{
    height:60px;
    line-height: 60px;
    width:60px;
    text-align: center;
    float: right;
    cursor: pointer;
  }
  .user span{
    color:#fff;
  }
  .user i{
    color:#fff;
    margin-right: 10px;
  }


</style>
