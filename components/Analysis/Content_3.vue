<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">丰富的预设脚本库</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img
              src="@/images/AutoOM/丰富的预设脚本库.png"
              alt=""
              style="height: 360px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/AutoOM/丰富内置场景.png"
              alt=""
              style="height: 360px"
            />
          </div>
          <div class="content-1-2">
            <div class="line"></div>
            <h1 class="title-s">丰富内置场景</h1>
            <div class="text">{{ text2 }}</div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">应用发布管理</h1>
            <div class="text">
              {{ text3 }}<br />
              <br />应用发布管理 > 流程配置 > 节点可视化
            </div>
          </div>
          <div class="pic4">
            <img
              src="@/images/AutoOM/应用发布管理.png"
              alt=""
              style="height: 360px"
            />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '脚本库足以满足日常运维的需求，支持编写适合自己业务场景的新脚本，支持传统方式、docker部署。',
      text2:
        '多年实践积累，提供大量丰富的场景，实现运维作业的自定义编排和调度，实现运维任务的一键执行，百倍提升效率。',
      text3:
        '对应用集中统一管理新建、流程配置，应用发布等，构建基本信息、查看构建信息、新建流程编排和定时任务，应用流程是标准运维的核心功能。'
    }
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 1600px;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.main {
  margin-top: -50px;
}

.content-1 {
  position: relative;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  position: relative;
  max-width: 400px;
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
}
.pic2,
.pic4 {
  margin-left: 100px;
  margin-top: 50px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
}
.pic3 {
  margin-right: 100px;
  margin-top: 50px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
}

.content-1-2-1 {
  margin-top: 50px;
}

.title-s {
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
}
.line {
  transform: scaleY(-1);
  background: #1370ee;
  border-radius: 4px;
  width: 60px;
  height: 4px;
}
</style>
