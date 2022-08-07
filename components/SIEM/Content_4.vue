<template>
  <el-container class="content-container">
    <el-header height="130px">
      <h1 class="title">产品特点</h1>
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
                <div class="sub">{{ item.text }}</div>
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
          content: '全方位数据采集能力',
          url: '/General/1.svg',
          text: '支持不同品牌不同种类的安全数据采集设备，基于大数据关联分析技术，形成全方位全的安全数据采集分析能力。'
        },
        {
          content: '灵活的部署方式',
          url: '/General/2.svg',
          text: '支持多云环境，虚拟化平台，信创软硬件等多种部署环境，集群式架构无缝扩展，部署方式简单。'
        },
        {
          content: '场景化分析能力',
          url: '/General/3.svg',
          text: '数百个基于MITRE ATT&CK框架的高级威胁检测规则，支持场景自定义，满足不同业务场景下的安全风险快速发现。'
        },
        {
          content: '安全运营能力',
          url: '/General/4.svg',
          text: '自定义的事件调查框架，深度结合不同客户环境，打造专业的、全面的事件调查界面，帮助安全分析专家可以快速对安全事件进行分析研判和响应。'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 590px;
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
  width: 590px;
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
  top: 50px;
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
  max-width: 382px;
  margin-top: 12px;
}
</style>
