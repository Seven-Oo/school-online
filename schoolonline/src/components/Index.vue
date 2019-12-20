<template>
  <div>
    <topnav></topnav>
    <carsouel></carsouel>
    <!-- <schoolshow></schoolshow> -->
    <h3 class="courserecommend-title">好课推荐</h3>
    <courserecommend courseType="recommend"></courserecommend>
    <!-- <h3 class="pagetab-title">经典慕课</h3>
    <pagetab></pagetab>
    <courserecommend courseType="pagetab"></courserecommend> -->
  </div>
</template>

<script>
import Topnav from '../components/index/Topnav'
import Carsouel from '../components/index/Carsouel'
import Schoolshow from '../components/index/Schoolshow'
import Courserecommend from '../components/index/Courserecommend'
import Pagetab from '../components/index/Pagetab'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Topnav,
    Carsouel,
    Schoolshow,
    Courserecommend,
    Pagetab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  /* .courserecommend-title, .pagetab-title {
    font-size: 28px;
    font-weight: 400;
    width: 1536px;
    padding-left: 64px;
    padding-right: 64px;
    margin: 20px auto;
  } */
</style>
