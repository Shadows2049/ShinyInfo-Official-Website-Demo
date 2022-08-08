<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/ITSM/工单与CMDB对接.png"
              alt=""
              style="width: 640px"
            />
          </div>
          <div class="content-1-2">
            <div class="content-1-2-1">
              <div class="line"></div>
              <h1 class="title-s">基础设施监控</h1>
              <div class="text">
                {{ text1 }}
              </div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">服务全链路监控</h1>
            <div class="text">{{ text2 }}</div>
          </div>
          <div class="pic4">
            <img
              src="@/images/ITSM/流程模型配置.png"
              alt=""
              style="width: 640px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/ITSM/工单与CMDB对接.png"
              alt=""
              style="width: 640px"
            />
          </div>
          <div class="content-1-2">
            <div class="content-1-2-1">
              <div class="line"></div>
              <h1 class="title-s">服务智能分析</h1>
              <div class="text">{{ text3 }}</div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">应用程序性能监控</h1>
            <div class="text">{{ text4 }}</div>
          </div>
          <div class="pic2">
            <img
              src="@/images/ITSM/变更与发布管理.png"
              alt=""
              style="width: 640px"
            />
          </div>
        </div>

        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/ITSM/工单与CMDB对接.png"
              alt=""
              style="width: 640px"
            />
          </div>
          <div class="content-1-2">
            <div class="content-1-2-1">
              <div class="line"></div>
              <h1 class="title-s">单笔交易监控</h1>
              <div class="text">{{ text5 }}</div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">最佳ITSM工作流程</h1>
            <div class="text">
              1.工作流自动化：IT 服务流程可灵活定义，自动分派工单指派到人<br />
              2.SLA 确保满意度：灵活制定多级 SLA，配合到期提醒，确保服务质量<br />
              3.智能机器人查询及处理<br />
              4.与自动化深度结合，支持线上审批
            </div>
          </div>
          <div class="pic4">
            <img
              src="@/images/ITSM/流程模型配置.png"
              alt=""
              style="width: 640px"
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
        ' 提供基础架构实时监控和故障排除，在问题出现后立即准确地可视化、检测和解决问题。',
      text2:
        '高度定制化透视面板：根据自身运维需要，绘制个性化仪表板，实现多视角多维度监控，仪表板监控服务运营状态，实时展示运行状况，并直观的将服务与底层设施关联起来。',
      text3:
        '监控服务及其关键KPI，识别和分析 IT 环境中的问题，分析IT服务状态。引入机器学习，自适应阈值、异常检测、趋势预测、主动预防。',
      text4:
        '端到端可见性可帮助现代企业更快地查明问题，通过 AI 驱动的故障排除轻松识别、确定范围并解决问题，自动将系统性能与更快地找到根本原因相关联并提高 MTTR。',
      text5:
        '可以按有Trace ID / Trace group / Latency(ms) 延迟时间/ 是否出错等维度来查看Trace交易 ，可根据 trace id/ trace group/ service name来过滤查看点击Trace ID可以下钻分析。',
      text6: '',
      data: [
        {
          title: '动态拓扑',
          content: '支持多样化的数据模型'
        },
        {
          title: '自动数据发现',
          content: '资产自动发现、采集、同步、减轻人工工作量。'
        },
        {
          title: '关联分析',
          content: '信息查询、问题定位更加清晰'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 3400px;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}

.content-1 {
  position: relative;
  margin-top: 120px;
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
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
}
.pic3 {
  margin-right: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
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
.content-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}
.box {
  width: 300px;
  height: 150px;
  background-color: #a6bfe2;
  margin: 20px;
}
</style>
