<template>
  <el-container class="content-container">
    <el-header height="100px">
      <h1 class="title">告警联动场景</h1>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <div class="box-s">
            <div class="pic">
              <img src="@/images/Monior/u545.png" alt="" />
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
          title: '与日志联动',
          content:
            '具备与统一日志平台联动能力，能够在告警属性页面中直接查找日志。'
        },
        {
          title: '与CMDB联动',
          content:
            '具备与CMDB平台联动能力，能够知道告警关联着的配置项，支持查看配置信息。'
        },
        {
          title: '与ITSM联动',
          content: '支持手动、自动生成工单走事件流程管理，追踪故障处理进展。'
        },
        {
          title: '与自动化联动',
          content: '对满足条件的告警自动触发故障恢复操作，快速修复、及时止损。'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 400px;
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
  width: 270px;
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
