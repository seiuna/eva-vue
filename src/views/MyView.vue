<template>

    <el-row :gutter="1" class="wtf" style="">
        <el-col :span="6">

            <div class="block">
                <el-avatar :size="74" shape="square" src="/avatar.jpg"/>


            </div>
        </el-col>
        <el-col :span="14">
            <div>
                <span style="font-weight: bold; font-size: 1rem">宫鼎</span>
                <br>
                <span style="font-weight: normal; font-size: 0.9rem">工号: 1003002</span>
                <br>
                <span style="font-weight: normal; font-size: 0.9rem">部门: 教务处</span>
            </div>
        </el-col>
        <el-col :span="4">
            <div>
                <el-tag>老师</el-tag>
            </div>
        </el-col>

        <el-col :span="24">
            <el-divider content-position="left"><span style="font-size: 1rem"></span></el-divider>
        </el-col>
        <el-col :span="24" style="align-items: center">
            <el-row :gutter="0" style=" text-align: center;">
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple"/>
                    <el-icon :size="25">
                        <Headset/>
                    </el-icon>
                    <br>我要听课
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple"/>
                    <el-icon :size="25">
                        <Calendar/>
                    </el-icon>
                    <br>持续关注
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple"/>
                    <el-icon :size="25">
                        <Edit/>
                    </el-icon>
                    <br>已听课程
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="24">
            <el-divider content-position="left"><span style="font-size: 1rem"></span></el-divider>
        </el-col>
        <el-col :span="24" style="align-items: center">
            <el-row :gutter="0" style=" text-align: center;">
                <el-col :span="24">
                    <div class="grid-content ep-bg-purple"/>
                    <a @click="switchAcc()">切换用户</a> &nbsp; &nbsp; <a @click="logout()">退出登陆</a></el-col>
            </el-row>
        </el-col>
        <el-collapse>
            <el-button @click="show=!show">222</el-button>
            <div v-show="show">
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
            </div>
        </el-collapse>
    </el-row>
</template>
<style>
.wtf {
    height: auto !important;
}
</style>
<script lang="ts" setup>

import {ref} from "vue";

function switchAcc() {
    console.log("switch")
}

function logout() {
    console.log("logout")
}


const show = ref(true)

const onSubmit = () => {

}
</script>