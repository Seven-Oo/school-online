<template>
  <div class="carsouel-wrapper">
    <!-- <el-carousel height="552px">
      <el-carousel-item v-for="(item, index) in carsouellist" :key="index">
        <img :src="item.url" />
      </el-carousel-item>
    </el-carousel> -->

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-carousel height="552px">
          <el-carousel-item v-for="(item, index) in carsouellist" :key="index">
            <img :width="screenWidth" :src="item.url" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Carsouel',
  data () {
    return {
      carsouellist: [
        {text: '1', url: require('../../assets/img/c1.jpg'), link: '/resource'},
        {text: '2', url: require('../../assets/img/c2.jpg'), link: '/resource'},
        {text: '3', url: require('../../assets/img/c3.jpg'), link: '/resource'}
      ],
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth)
          that.init()
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<style scope>
  .carsouel-wrapper {
    margin-top: 88px;
    margin-bottom: 24px;
  }
  .el-carousel__button {
    width: 48px;
    height: 4px;
    border-radius: 2px;
  }

</style>
