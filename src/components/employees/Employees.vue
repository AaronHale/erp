<template>
    <div id="container">
        <div style="padding-bottom:20px;">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">员工列表</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <ul class="data">
            <li class="item" @click="showDetail">
                <img src="../../assets/images/user.jpg" alt="" width="200" height="200">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
            <li class="item">
                <img src="../../assets/images/user.jpg" alt="">
                <h4>Steve Jobs</h4>
                <p>2019-06-14 12:23:23</p>
            </li>
        </ul>
        <div style="max-width: 1670px;float: right;margin-right:80px;margin-top: 30px;">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    :hide-on-single-page="value"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>

    </div>
</template>

<script>
export default {
    name: "Employees",
    data(){
        return {
            value: false,
            currentPage: 1,
        };
    },
    methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        showDetail() {
            this.$router.push({name:'employeDetail',params:{id:1}})
        }
    }
}
</script>

<style scoped>
    .data{
        max-width:1920px;
        min-width:1150px;
        overflow: hidden;
        font-size: 12px;
        color:#333;
    }
    .data .item{
        cursor: pointer;
        float: left;
        width:200px;
        margin-top:10px;
        margin-bottom: 30px;
        margin-right: 30px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .data .item:hover{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.12);
    }
    .data .item h4{
        padding:10px 0 10px 8px;
    }
    .data .item p{
        padding:0 0 10px 8px;
        color:#999;
    }
    .data .item img{
        width:200px;
        background-color: #fff;
    }
</style>