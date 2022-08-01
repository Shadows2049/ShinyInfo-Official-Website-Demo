<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">事件自动化响应</h1>
            <div class="text">
              安全事件自动化分类并触发安全剧本完成自动化响应。
            </div>
          </div>
          <div class="pic2">
            <img
              src="@/images/Analysis/高效的日志检索服务.png"
              alt=""
              style="width: 640px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/Analysis/强大的数据分析能力.png"
              alt=""
              style="width: 640px"
            />
          </div>
          <div class="content-1-2">
            <div class="line"></div>
            <h1 class="title-s">高自由度流程编排框架</h1>
            <div class="text">
              可视化无代码 <br />
              “拖拉拽”式剧本编排
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">AI协调处置</h1>
            <div class="text">安全事件协同处置，AI 机器人 7*24 小时值守。</div>
          </div>
          <div class="pic4">
            <img
              src="@/images/Analysis/灵活的数据可视化.png"
              alt=""
              style="width: 640px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/Analysis/完善的权限管理.png"
              alt=""
              style="width: 640px"
            />
          </div>
          <div class="content-1-2">
            <div class="line"></div>
            <h1 class="title-s">丰富的第三方拓展</h1>
            <div class="text">
              通过插件管理不同的类型的安全和运维工具将API或脚本变为可配置的执行动作。
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 2000px;
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
