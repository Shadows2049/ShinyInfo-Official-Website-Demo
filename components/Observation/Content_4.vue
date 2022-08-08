<template>
  <el-container class="content-container">
    <el-header height="130px">
      <h1 class="title">相关产品</h1>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <div class="box-s">
            <div class="text-s">
              <div class="pic-s">
                <img :src="item.url" alt="" />
              </div>
              <div class="content-s">
                {{ item.content }}<br />
                <div class="sub">
                  {{ item.text }}
                </div>
                <nuxt-link
                  :to="item.link"
                  style="text-decoration: none; color: #1370ee"
                  >{{ item.text2 }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          content: '服务智能',
          url: '/General/1.svg',
          text: '服务可用性与性能监控可观察运维自动化。',
          link: '/Service',
          text2: '圣一服务智能 >'
        },
        {
          content: '基础监控',
          url: '/General/2.svg',
          text: '监控IT基础设施运行状态。',
          link: '/Monitor',
          text2: '圣一基础监控 >'
        },
        {
          content: '告警平台',
          url: '/General/3.svg',
          text: '管理服务应用和基础设备告警，告警收敛处理。',
          link: '/Alert',
          text2: '圣一告警平台 >'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 790px;
  background-image: url('/General/bg.png');
  background-size: 1920px 790px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  margin-top: -50px;
}
.box-s {
  width: 380px;
  height: 180px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15);
  border-radius: 12px;
  margin: 10px auto;
}

.text-s {
  position: relative;
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  top: 10px;
}
.content-s {
  margin-left: 40px;
}
.pic-s {
  margin-left: 40px;
}
.sub {
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 12px;
}
</style>
