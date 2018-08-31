<template>
  <div class="mainoptions">
    <el-form :model="submitForm">
      <el-form-item label="一级分成" :label-width="formLabelWidth">
        <el-input class="simple_input" placeholder="请输入0-100以内数字" v-model="submitForm.yiji" clearable><template slot="append">%</template></el-input>
      </el-form-item>
      <el-form-item label="二级分成" :label-width="formLabelWidth">
        <el-input class="simple_input" placeholder="请输入0-100以内数字" v-model="submitForm.erji" clearable><template slot="append">%</template></el-input>
    </el-form-item>

    <el-form-item label="上传图片" :label-width="formLabelWidth">
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        formLabelWidth: '80px',
        submitForm: {
          yiji: 10,
          erji: 5,
        },
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>


<style>
  .handle-box {
    margin-bottom: 20px;
  }
  .simple_input {
    margin-bottom: 20px;
    width:250px;
  }
</style>

