<template>
  <div class="pagetab-wrapper">
    <div class="tag-group">
      <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagetab',
  data () {
    return {
      tablist: [
        { type: 'warning', label: '工学' },
        { type: 'warning', label: '力学' },
        { type: 'warning', label: '管理学' },
        { type: 'warning', label: '医药卫生' },
        { type: 'warning', label: '艺术设计' }
      ]
    }
  }
}
</script>

<style scoped>
  .pagetab-wrapper {
    width: 1536px;
    padding-left: 64px;
    padding-right: 64px;
    margin: 20px auto;
  }
</style>
