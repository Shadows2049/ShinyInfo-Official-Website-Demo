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
            <div class="text-ss">
              {{ item.sub }}
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
          sub: '遵循ITIL 4实践和ITSS、ISO20000等实践标准落地。'
        },
        {
          content: '工单自动化',
          sub: ''
        },
        {
          content: '内置典型的ITIL流程模型',
          sub: ''
        },
        {
          content: '低代码引擎',
          sub: ''
        },
        {
          content: '动态流程引擎',
          sub: ''
        },
        {
          content: 'ESM企业服务管理',
          sub: '可扩展到企业服务流程，为企业提供统一的流程平台。'
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
.text-ss {
  font-family: PSM;
  font-size: 13px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-top: 5px;
}
</style>
