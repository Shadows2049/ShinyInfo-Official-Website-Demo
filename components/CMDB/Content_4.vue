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
          content: 'IT资源统一管理',
          url: '/General/1.svg',
          text: 'CMDB本质上就是一个数据库，可以开放数据服务给到各个系统来调用和访问的数据库，变更配置数据同步各个系统。'
        },
        {
          content: '自动发现IT资产配置信息释放人力成本',
          url: '/General/2.svg',
          text: 'CMDB是运维工具建设的核心，建设完善了才能够建设自动化。通过自动发现脚本，自动采集配置信息，规范化、合理化、人力减少化，推动IT资产与业务目标的融合。'
        },
        {
          content: 'CI关联关系可视化IT资源',
          url: '/General/3.svg',
          text: '建立从机房位置视角、网络环境视角、业务逻辑视角等可视化展现IT设备和业务之间的关联关系。'
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
  align-items: center;
  width: 800px;
  margin-top: -50px;
}
.box-s {
  width: 800px;
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
  max-width: 591px;
}
</style>
