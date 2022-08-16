<template>
  <div class="content-container">
    <el-container class="content-0">
      <el-header height="200px">
        <h1 class="title">自定义配置项类型</h1>
        <div class="description">
          {{ text2 }}
        </div>
      </el-header>
      <el-main>
        <div class="main0">
          <div class="content">
            <img src="/CMDB/1.png" alt="" style="width: 520px" />
            <img
              src="/CMDB/2.jpg"
              alt=""
              style="
                margin-left: 100px;
                width: 520px;
                box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
              "
            />
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">关系管理</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img
              src="/CMDB/3.jpg"
              alt=""
              style="
                width: 520px;
                box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
              "
            />
          </div>
        </div>
      </el-main>
    </el-container>
    <el-container>
      <el-main class="main">
        <div class="content-2">
          <el-container>
            <el-header>
              <h1 class="title">数据消费</h1>
            </el-header>
            <el-body class="content-3">
              <div class="pic5">
                <img src="/CMDB/数据消费.png" alt="" style="height: 400px" />
              </div>
              <div>
                <div class="text-box" v-for="item in items">
                  <div class="small-box">
                    <img
                      :src="item.url"
                      alt=""
                      style="height: 28px; margin-top: -13px"
                    />
                    <div class="text_">
                      <h1 class="title-ss">{{ item.title }}</h1>
                      <div class="text">{{ item.content }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-body>
          </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: '流程消费',
          content: '流程关联配置项，通过流程进行配置项更新。',
          url: '/CMDB/标题符号.svg'
        },
        {
          title: '自动化消费',
          content: '基于CMDB构建自动化装机、应用发布、主机管理、场景脚本管理。',
          url: '/CMDB/标题符号.svg'
        },
        {
          title: '监控消费',
          content: '基于CMDB机柜监控、监控区域总览图、监控热图。',
          url: '/CMDB/标题符号.svg'
        }
      ],
      text1:
        '全方位覆盖配置类，包括服务、应用、基础架构类，支持可拖拉方式表单及属性的自定义。建模、配置项关系、配置发现脚本、权限、报表通过拖拉及填表方式定义。',
      text2:
        '灵活定义CMDB分类、定义配置分类属性、定义配置分类权限、定义配置分类的序列和图标等。'
    }
  }
}
</script>
<style scoped>
.content-container {
}
.content-0 {
  background: #f3f8fe;
  height: 964px;
}
.content-2 {
  margin-top: 50px;
  height: 620px;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.title-s {
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
}
.title-ss {
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
  margin-bottom: 12px;
}
.main {
  margin-top: -50px;
}
.main0 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
}
.description {
  position: relative;
  max-width: 1000px;
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: -10px auto;
}

.content-1,
.content-3 {
  position: relative;
  margin-top: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-3 {
  margin-top: 110px;
}
.text {
  position: relative;
  max-width: 520px;
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
}
.text_ {
  position: relative;
  max-width: 520px;
  margin-left: 40px;
}
.pic2,
.pic4 {
  margin-left: 100px;
}
.text-box {
  margin-left: 100px;
}
.small-box {
  display: flex;
  margin: 10px 0;
  align-items: center;
}
.line {
  transform: scaleY(-1);
  background: #1370ee;
  border-radius: 4px;
  width: 60px;
  height: 4px;
}
</style>
