<template>
    <div class="login-wrap" v-loading="loading" element-loading-text="登陆中 ， 请稍后">
        <div class="ms-title">真人RPG后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input type="text" v-model="ruleForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <!-- onKeyUp="value=value.replace(/[\W]/g,'')" -->
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <!-- <el-button type="danger" style="margin-top:5px;margin-left:0;deplay:flex" @click="toRegist('ruleForm')">注册</el-button> -->
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 登录问题详情可联系管理员</p>
            </el-form>
        </div>
    </div>
</template>

<script>
import http from "@/utils/http.js";
// import JsEncrypt from "jsencrypt/bin/jsencrypt";

export default {
  data: function() {
    return {
      loading: false,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted () {
    this.es6Test()
  },
  methods: {
    toRegist(formName){

      // let password = this.RSAjsencrypt(this.ruleForm.password).replace(/\+/g, "%2B");
      let password = this.ruleForm.password;
      this.loading = true;
      let parmas = `username=${this.ruleForm.username}&password=${password}`;
      //   console.log(parmas)
      http
        .regist(parmas)
        .then(res => {
          if (res.data.code == "1") {
            // if ((res.data.msg == "你已经登录，无需重复登录")) {
            //   this.$message({
            //     message: "你已经登录，无需重复登录",
            //     type: "warning"
            //   });
            // }
            this.loading = false;
            localStorage.setItem("ms_username", this.ruleForm.username);
            // this.$router.push("/orderForm");
          } else {
            this.loading = false;
            this.$message.error("登录失败，请检查登录账号密码是否有误");
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message.error("未知错误，请联系管理员");
          console.log(err);
        });
    },

    // RSAjsencrypt(param) {
    //     // 初始化
    //     let jse = new JsEncrypt()
    //     jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
    //         MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCddnY3WANlEfIfpBSs9EbfQPtg
    //         89vEJXppeBtvrN2AST01dZU1s6HXax6IOibpv7/LfbwoCkhDU92oRpOczY9zIw5x
    //         FXD/VyKBO4SaBSnKELGIZUliJalJe14JvVNkQNu38gh5plHpCA9Poh0HQf0hh8R4
    //         cd69nS6QgO0Yb0SXuQIDAQAB
    //         -----END PUBLIC KEY-----`)
    //     let encryted = jse.encrypt(param)
    //     return encryted
    // },

    

    submitForm(formName) {
      // let password = this.RSAjsencrypt(this.ruleForm.password).replace(/\+/g, "%2B");
      let password = this.ruleForm.password;
      this.loading = true;
      this.$router.push("/mainoptions");
      // let parmas = `username=${this.ruleForm.username}&password=${password}`;
      // http
      //   .login(parmas)
      //   .then(res => {
      //     if (res.data.code == "1") {
      //       // if ((res.data.msg == "你已经登录，无需重复登录")) {
      //       //   this.$message({
      //       //     message: "你已经登录，无需重复登录",
      //       //     type: "warning"
      //       //   });
      //       // }
      //       this.loading = false;
      //       localStorage.setItem("ms_username", this.ruleForm.username);
      //       this.$router.push("/orderForm");
      //     } else {
      //       this.loading = false;
      //       this.$message.error("登录失败，请检查登录账号密码是否有误");
      //     }
      //   })
      //   .catch(err => {
      //     this.loading = false;
      //     this.$message.error("未知错误，请联系管理员");
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 200px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
