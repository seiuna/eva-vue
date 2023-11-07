<template>
    <main class="about" style="padding-bottom: 60px">
        <el-card v-for='item in data' class="box-card">
            <template #header>
                <div class="card-header">
                    <h4 style="font-weight: bold">{{ item.CourseScheduling.coursename }}</h4>
                    <p style="font-size: 14px; padding-top: 8px">{{ item.Teacher.name }}({{ item.Teacher.jobnumber }}),
                        已评 2 次,暂存 2 次</p>
                    <el-button class="button" text>评教</el-button>
                    <el-button class="button" text>删除</el-button>
                </div>

            </template>
        </el-card>

    </main>
</template>

<style>
.card-header {
    display: inline-block;
    justify-content: space-between;
    align-items: center;

}
.box-card .el-card__body{
    display: none;
}
.button{
    padding: 0;
    margin: 0;
    margin-top: 6px;

}

.box-card {
    width: 100%;
    margin-bottom: 20px;
}
</style>

<script setup lang="ts">


import axios from "axios";
import {ref} from "vue";





let data=ref();

    axios.post('http://localhost:8080/api/getTeacherTests', {userid:2005080})
        .then(response => {
            console.log(response.data)
            data.value= response.data.context;
        })


</script>
