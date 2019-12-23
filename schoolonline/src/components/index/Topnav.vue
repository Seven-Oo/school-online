<template>
  <div class="topnav-wrapp">
    <div class="topnav-wrapp-fluid clearfix">
      <div class="topnav-menu left">
        <div class="topnav-logoSmall"><img class="logoSmall" src="../../assets/img/logo-pc.png" /></div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item class="topnav-logo-wrapper"><img class="topnav-logo" src="../../assets/img/logo-pc.png" /></el-menu-item>
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">全部课程</el-menu-item>
          <el-menu-item index="3">国际MBA</el-menu-item>
          <el-menu-item index="4">雨课堂</el-menu-item>
          <el-menu-item index="5">学堂云</el-menu-item>
          <el-menu-item index="6">学分课</el-menu-item>
          <el-menu-item index="7">计算机学院</el-menu-item>
          <el-menu-item class="topnav-en" index="8">SIELE</el-menu-item>
          <el-submenu index="9">
            <template slot="title">更多</template>
            <el-menu-item index="9-1">工程硕士</el-menu-item>
            <el-menu-item index="9-2">健康中国</el-menu-item>
            <el-menu-item index="9-3">医学教指委</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="topnav-menu-right right">
        <div class="topnav-search left">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-input class="topnav-searchBar" placeholder="搜索课程/院校名称" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="topnav-login left">
          <el-button plain class="topnav-loginBtn">登录</el-button>
          <el-button type="primary" round class="topnav-registerBtn">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topnav',
  data () {
    return {

    }
  }
}
</script>

<style scope>
  .topnav-wrapp {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    height: auto;
  }
  .topnav-menu {
    font-size: 16px;
    margin-top: 24px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal>.el-menu-item, .el-menu--horizontal>.el-submenu .el-submenu__title {
    color: #333;
    font-size: 16px;
    height: auto;
    line-height: normal;
    border-bottom: none;
    padding: 8px 0 10px 0;
    margin-right: 32px;
  }
  .el-menu--horizontal>.el-menu-item.topnav-logo-wrapper {
    padding: 0;
  }
  .el-menu--horizontal>.el-menu-item.topnav-en {
    padding-top: 11px;
  }
  .topnav-logo {
    width: 135px;
    height: 40px;
    vertical-align: -14px;
  }
  .el-submenu__icon-arrow {
    font-size: 16px;
  }
  .el-submenu__title i {
    color: rgb(51, 51, 51);
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 3px solid #4182fa;
    color: #4182fa;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #4182fa;
  }

  .topnav-menu-right {
    height: 88px;
  }
  .el-button.topnav-loginBtn {
    border: none;
    margin-right: 10px;
  }
  .el-button.is-plain:focus, .el-button.is-plain.topnav-loginBtn:hover {
    background: #FFF;
    border-color: #fff;
    color: #333;
  }
  .el-button.topnav-registerBtn{
    background: #4182fa;
    border-color: #4182fa;
    width: 100px;
  }
  .el-button.is-round.topnav-registerBtn {
    padding:  10px 23px;
    font-size: 14px;
  }
  .el-button--primary:focus, .el-button--primary.topnav-registerBtn:hover {
    background: #66b1ff;
    border-color: #66b1ff;
  }
  .el-button {
    font-size: 16px;
  }
  .topnav-search, .topnav-login{
    margin-top: 24px;
  }
  .topnav-login {
    margin-left: 20px;
  }
  .el-form-item {
    margin-bottom: 0;
  }
  .el-input__inner {
    font-size: 16px;
  }
  .el-input__icon {
    font-size: 20px;
    color: #a8a8a8;
  }
  .topnav-searchBar {
    width: 218px;
  }

  .topnav-logoSmall {
    width: auto;
    height: 30px;
  }
  .topnav-logoSmall img.logoSmall {
    width: inherit;
    height: inherit;
  }
</style>
