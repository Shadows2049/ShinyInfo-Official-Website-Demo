<template>
  <el-container class="content-container">
    <el-header height="100px">
      <h1 class="title">产品特点</h1>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <div class="box-s">
            <div class="pic">
              <img src="@/images/CMDB/u1077.png" alt="" />
            </div>
            <span class="title-s"> {{ item.title }}</span>
            <div class="text-s">
              {{ item.content }}
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
          title: 'IT资源统一管理',
          content:
            'CMDB本质上就是一个数据库，可以开放数据服务给到各个系统来调用和访问的数据库，变更配置数据同步各个系统。'
        },
        {
          title: '自动发现IT资产配置信息释放人力成本',
          content:
            'CMDB是运维工具建设的核心，建设完善了才能够建设自动化。通过自动发现脚本，自动采集配置信息，规范化、合理化、人力减少化，推动IT资产与业务目标的融合。'
        },
        {
          title: 'CI关联关系可视化IT资源',
          content:
            '建立从机房位置视角、网络环境视角、业务逻辑视角等可视化展现IT设备和业务之间的关联关系。'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 450px;
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
  width: 350px;
  height: 230px;
  margin: 10px auto;
  border-style: solid;
  border-color: rgb(89, 170, 247);
}
.pic {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-s {
  font-family: PSM;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.text-s {
  font-family: PSM;
  font-size: 15px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-top: 15px;
}
</style>
