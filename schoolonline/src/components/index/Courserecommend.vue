<template>
  <div class="recommend-wrapper">
    <el-row :gutter="20" v-if="cType == 'recommend'">
      <!-- <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
        <a class="grid-content" href="http://www.baidu.com">
          <el-card :body-style="{ padding: '0px' }">
            <div class="recommend-bgBox"><img src="../../assets/img/course1.jpg" class="image"></div>
            <div class="recommend-body">
              <div class="recommend-title">互联网创新与创业</div>
              <div class="recommend-desc">这是对本标题的一个详细介绍--这是对本标题的一个详细介绍这是对本标题的一个详细介绍</div>
            </div>
            <div class="recoommend-footer clearfix">
              <div class="footer-orgname-box left">
                <div class="footer-orgname-avatar"><img src="../../assets/img/org1.png" /></div>
                <div class="footer-orgname-name">清华大学</div>
              </div>
              <div type="text" class="item-footer-count right">
                <i class="el-icon-user"></i>
                4099
              </div>
            </div>
          </el-card>
        </a>
      </el-col> -->
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6" v-for="(item, index) in courserecommendList" :key="index">
        <div class="grid-content">
          <el-card :body-style="{ padding: '0px' }">
            <div class="recommend-bgBox"><img :src="item.img" /></div>
            <div class="recommend-body">
              <div class="recommend-title">{{item.title}}</div>
              <div class="recommend-desc">{{item.desc}}</div>
            </div>
            <div class="recoommend-footer clearfix">
              <div class="footer-orgname-box left">
                <div class="footer-orgname-avatar"><img :src="item.schoolico" /></div>
                <div class="footer-orgname-name">{{item.schoolname}}</div>
              </div>
              <div type="text" class="item-footer-count right">
                <i class="el-icon-user"></i>
                {{item.visits}}
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" v-if="cType == 'pagetab'">
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6" v-for="(item, index) in courserecommendTabList" :key="index">
        <a class="grid-content" :href="item.courseUrl">
          <el-card :body-style="{ padding: '0px' }">
            <div class="recommend-bgBox"><img :src="item.img" /></div>
            <div class="recommend-body">
              <div class="recommend-title">{{item.title}}</div>
              <div class="recommend-desc">{{item.desc}}</div>
            </div>
            <div class="recoommend-footer clearfix">
              <div class="footer-orgname-box left">
                <div class="footer-orgname-avatar"><img :src="item.schoolico" /></div>
                <div class="footer-orgname-name">{{item.schoolname}}</div>
              </div>
              <div type="text" class="item-footer-count right">
                <i class="el-icon-user"></i>
                {{item.visits}}
              </div>
            </div>
          </el-card>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Courserecommend',
  data () {
    return {
      cType: '',
      courserecommendList: [],
      courserecommendTabList: []
    }
  },
  props: ['courseType'],
  mounted () {
    this.cType = this.courseType
    this.$http.get('/gets/course').then(res => {
      this.courserecommendList = res.data.courserecommendList
      this.courserecommendTabList = res.data.courserecommendTabList
    })
  }
}
</script>

<style scope>
  .el-col {
    border-radius: 4px;
    margin-bottom: 26px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  /* .recommend-wrapper {
    width: 1536px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 64px;
    padding-right: 64px;
    margin-bottom: 30px;
  } */
  .recommend-bgBox {
    width: 100%;
    height: 208px;
  }
  .recommend-bgBox img {
    width: inherit;
    height: inherit;
  }
  .recommend-body {
    padding: 14px;
  }
  .recommend-title {
    font-size: 16px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-weight: 500;
  }

  .recommend-desc {
    font-size: 14px;
    color: #666;
    height: 20px;
    line-height: 20px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recoommend-footer {
    font-size: 14px;
    color: #999;
    margin-bottom: 20px;
  }
  .footer-orgname-box {
    width: 70%;
    position: relative;
    height: 20px;
    line-height: 20px;
  }
  .item-footer-count {
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    text-align: right;
    padding-right: 14px;
  }
  .footer-orgname-avatar {
    position: absolute;
    top: 0;
    left: 12px;
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
  .footer-orgname-avatar img {
    height: inherit;
    width: inherit;
    border-radius: 50%;
  }
  .footer-orgname-name {
    font-size: 14px;
    padding-left: 37px;
  }
</style>
