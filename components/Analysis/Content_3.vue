<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">高效的日志检索服务</h1>
            <div class="text">
              • 任意格式任意类型数据 <br />
              • 全量全文检索 <br />
              • 自动化字段识别 <br />
              • 一键追溯上下文
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
            <h1 class="title-s">强大的数据分析能力</h1>
            <div class="text">
              SQL分析引擎<br />
              • 标准SQL语法，无需学习专用的查询语言，学习门槛低 <br />
              •
              无需语言转换，从查询语法层面帮助无缝集成已有的SQL系统，减少二次开发的成本<br />
              • 内置各类函数，实现多维度逻辑计算<br />
              • 开放式框架支持自定义分析语言
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">灵活的数据可视化</h1>
            <div class="text">
              交互式仪表板创建和编辑 <br />
              • 随心拖拽调整组件大小和位置 <br />
              • 自动吸附边缘进行对齐 <br />带参数的仪表板 <br />
              • 自定义仪表板参数选择 <br />支持导出多种格式PDF、PNG、CSV
            </div>
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
            <h1 class="title-s">完善的权限管理</h1>
            <div class="text">
              节点到节点加密 验证方式支持：Active Directory, LDAP, Kerberos,
              SAML...<br />
              基于角色的访问控制<br />
              索引、文档和字段级访问限制 <br />
              平台审计日志
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
