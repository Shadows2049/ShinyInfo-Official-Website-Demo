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
          content: '符合国际标准理念',
          url: '/General/1.svg',
          text: '遵循ITIL 4实践和ITSS、ISO20000等实践标准落地。'
        },
        {
          content: '工单自动化',
          url: '/General/2.svg',
          text: ''
        },
        {
          content: '内置典型的ITIL流程模型',
          url: '/General/3.svg',
          text: ''
        },
        {
          content: '低代码引擎',
          url: '/General/4.svg',
          text: ''
        },
        {
          content: '动态流程引擎',
          url: '/General/5.svg',
          text: ''
        },
        {
          content: 'ESM企业服务管理',
          url: '/General/6.svg',
          text: '可扩展到企业服务流程，为企业提供统一的流程平台。'
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
  margin-top: 12px;
}
</style>
