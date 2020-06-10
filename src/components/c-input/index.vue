<template>
  <el-form-item :label="label">
    <!-- 传入属性/方法,  -->
    <el-input
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @input="$emit('input', $event)"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  props: {
    // 标签
    label: {
      type: String,
      default: ''
    },
    // 值
    value: String
  }
}
</script>

<style scoped lang="scss">
.el-form-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  /deep/ .el-input__inner {
    font-size: 12px;
  }
  /deep/ .el-form-item__content {
    flex: 1;
    margin-left: 0!important;
  }
}
</style>
