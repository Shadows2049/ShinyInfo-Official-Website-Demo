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
          content: '强大的数据采集能力CMDB联动消费'
        },
        {
          content: '跨平台流程整合'
        },
        {
          content: '流程执行过程和结果可视化'
        },
        {
          content: '提供二次开发接口，可定制化编排'
        },
        {
          content: '批量分发，自由选择目标路径'
        },
        {
          content: '图形和列表展示灵活切换'
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
