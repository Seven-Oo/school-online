<template>
  <div class="schoolshow-wrapper">
    <el-row :gutter="20">
      <el-col :sm="4" :md="4" :lg="4" v-for="(item, index) in schoolshowlist" :key="index">
        <div class="grid-content bg-purple">
          <img :src="item.url" />
        </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Schoolshow',
  data () {
    return {
      schoolshowlist: [
        {text: '清华', url: require('../../assets/img/qinghua.png')},
        {text: '北大', url: require('../../assets/img/beida.png')},
        {text: '北师', url: require('../../assets/img/beishi.png')},
        {text: '国防', url: require('../../assets/img/guofang.png')},
        {text: 'mas', url: require('../../assets/img/mas.png')},
        {text: 'cah', url: require('../../assets/img/cah.png')}
      ]
    }
  }
}
</script>

<style scoped>
  .schoolshow-wrapper {
    width: 1536px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 64px;
    padding-right: 64px;
  }
</style>
