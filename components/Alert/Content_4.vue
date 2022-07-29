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
              <img :src="item.url" alt="" />
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
            '具备与统一日志平台联动能力，能够在告警属性页面中直接查找日志。',
          url: '/Alert/1.svg'
        },
        {
          title: '与CMDB联动',
          content:
            '具备与CMDB平台联动能力，能够知道告警关联着的配置项，支持查看配置信息。',
          url: '/Alert/2.svg'
        },
        {
          title: '与ITSM联动',
          content: '支持手动、自动生成工单走事件流程管理，追踪故障处理进展。',
          url: '/Alert/3.svg'
        },
        {
          title: '与自动化联动',
          content: '对满足条件的告警自动触发故障恢复操作，快速修复、及时止损。',
          url: '/Alert/4.svg'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 490px;
}
.main {
  margin-top: 40px;
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
  width: 285px;
  height: 280px;
  margin: 20px auto;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15);
  border-radius: 12px;
}
.pic {
  position: relative;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-s {
  position: relative;
  top: 60px;
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  display: flex;
  justify-content: center;
}
.text-s {
  position: relative;
  top: 70px;
  max-width: 205px;
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  margin: 0 auto;
  text-indent: 2rem;
}
</style>
