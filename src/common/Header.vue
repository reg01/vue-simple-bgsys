<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo">真人rpg后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!-- <div class="callKF" @click="goToKF">打开客服</div> -->
    </div>
</template>
<script>
import bus from "@/utils/bus.js";
import http from "@/utils/http.js";
export default {
  data() {
    return {
      collapse: false,
      name: "linxin",
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        http
          .loginOut()
          .then(res => {
              this.$router.push("/login");
          })
          .catch(err => {
              this.$router.push("/login");
          });
      }
    },
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    goToKF() {
      window.open(this.KF);
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.callKF {
  cursor: pointer;
  text-align: center;
  float: right;
  margin-right: 50px;
  margin-top: 20px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 16px;
  color: #eee;
  border: solid 1px #aaa;
  border-radius: 5px;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
}
.collapse-btn:hover {
  background: rgb(40, 52, 70);
}
.header .logo {
  float: left;
  width: 250px;
  /* text-align: center; */
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
