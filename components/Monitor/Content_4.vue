<template>
  <el-container class="content-container">
    <el-header height="130px">
      <h1 class="title">产品特点</h1>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <div class="box-s">
            <div class="pic">
              <img src="@/images/Monior/u545.png" alt="" />
            </div>
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
          content: '可视化展示IT资源和系统运行状态'
        },
        {
          content: '平台自身监测能力'
        },
        {
          content: '指标关联分析，缩短问题定位时间'
        },
        {
          content: '监控与CMDB无缝联动'
        },
        {
          content: '监控指标库管理'
        },
        {
          content: '全局视图展示'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 800px;
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
  height: 200px;
  margin: 10px auto;
  border-style: solid;
  border-color: rgb(87, 87, 87);
}
.pic {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-s {
  font-family: PSM;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-top: 30px;
}
</style>
