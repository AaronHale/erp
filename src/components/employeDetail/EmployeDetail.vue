<template>
    <div id="">
        <div style="padding-bottom:20px;">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path: '/employees'}">员工列表</el-breadcrumb-item>
                <el-breadcrumb-item>员工详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="detail">
            <div class="item avatar">
                <img src="../../assets/images/user.jpg" alt="" width="120">
            </div>
            <div class="item name">
                姓名：<span>Steve Jobs</span>
            </div>
            <div class="item work-age">
                工龄：<span>30</span>年
            </div>
            <div class="item intro">
                <el-input
                        style="width:400px"
                        :disabled="true"
                        type="textarea"
                        :autosize="true"
                        v-model="textarea">
                </el-input>
            </div>
            <div class="item">
                <el-button type="danger">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployeDetail",
    data(){
        return {
            textarea: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, animi assumenda debitis distinctio eaque facilis fugit harum maiores nemo porro quae quisquam reiciendis repellendus sequi, vitae voluptatum. Repudiandae, sapiente?'
        }
    }
}
</script>

<style scoped>
.detail{
    max-width: 1280px;
}
.detail .item{
    margin-bottom:20px;
}
.avatar{
    width:120px;
    height:120px;
}
</style>