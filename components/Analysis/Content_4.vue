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
          content: '全面日志采集',
          url: '/General/1.svg',
          text: '应用系统业务日志；数据库记录；系统运维日志；审计日志；用户行为数据；性能监控和追踪日志...'
        },
        {
          content: '通用查询语言',
          url: '/General/2.svg',
          text: 'SQL查询语言；用户友好简单易学；开放架构可自定义'
        },
        {
          content: '流程执行过程和结果可视化',
          url: '/General/3.svg',
          text: '智能运维；安全合规；业务分析；物联网...'
        },
        {
          content: '满足国产化需求',
          url: '/General/4.svg',
          text: '完全国产化；支持各类信创系统；自主知识产权'
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
