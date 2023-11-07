

<template>

  <!--    <el-header style=" background-color: red; height: 20%; position: absolute; ">-->

  <!--    </el-header>-->

    <router-view style="padding: 20px; position: absolute; height: 100%; width:100%; overflow: auto"/>

    <el-footer style="position: absolute; bottom: 0; width:100%;  background-color: #f5f6fa;">
        <el-row :gutter="0"
                style="color:black;width:100%; padding:18px 0 18px ;text-align: center; background-color: #f5f6fa;">
            <el-col :span="12">
                <div class="grid-content ep-bg-purple"/>
                <RouterLink to="/about">首页</RouterLink>
            </el-col>
            <el-col :span="12">
                <div class="grid-content ep-bg-purple"/>
                <RouterLink to="/my">我的</RouterLink>
            </el-col>
        </el-row>
    </el-footer>


</template>
<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router'
import {onMounted} from "vue";
import {ref} from "vue";

</script>
<style scoped>


</style>