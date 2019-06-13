<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <div id="left-menu">
          左侧菜单
        </div>
      </el-aside>
      <el-main>
        <div id="main-content">
            右侧内容区域
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app'
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
  body{
    background: #F7F7F7;
  }
  #app{
    height: 100%;
  }
  .el-container{
    height:100%;
  }
  .el-aside{
    height:100%;
    background: #fff;
    border-radius: 4px;
    padding:20px;
  }
  .el-main{
    background: #fff;
    height:100%;
    margin-left:10px;
  }
</style>
