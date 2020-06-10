<template>
  <el-menu
    default-active="/fastReg"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>诊间医生</span>
      </template>
      <el-menu-item index="/fastReg">方便门诊</el-menu-item>
    </el-submenu>
    <el-menu-item index="/fastReg/2">
      <i class="el-icon-menu"></i>
      <span slot="title">门诊收费</span>
    </el-menu-item>
    <el-menu-item index="/fastReg/3">
      <i class="el-icon-setting"></i>
      <span slot="title">系统设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu {
  border-right: none;
  box-sizing: border-box;
}
</style>
