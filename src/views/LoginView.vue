<template>


    <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="form"
        style="max-width: 460px"
        class="form"
    >
        <el-form-item label="角色">
            <el-select v-model="form.role" class="m-2" placeholder="Select" size="large" >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </el-form-item>
        <el-form-item label="工号" v-show="form.role==='督导'">
            <el-input v-model="form.region" />
        </el-form-item>
        <el-form-item label="学号" v-show="form.role==='学生'">
            <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item label="姓名" v-show="form.role==='学生'">
            <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<style>
.form{
    margin: 20px;
}
</style>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('top')

const form = reactive({
    name: '',
    region: '',
    type: '',
    role:'学生'
})

const options = ref([  {
    value: '学生',
    label: '学生',
},{
    value: '督导',
    label: '督导',
}])

const onSubmit=()=>{

}
</script>