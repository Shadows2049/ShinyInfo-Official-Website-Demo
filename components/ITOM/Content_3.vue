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
              <h1 class="title-s">全生命周期管理 IT 资源（CMDB）</h1>
              <div class="text">
                1.IT资源统一管理,随时查看 IT 资源及其运行情况 <br />
                2.自动发现IT资产配置信息释放人力成本<br />3.CI关联关系可视化IT资源
              </div>
            </div>
          </div>
        </div>
        <div class="content-box">
          <div v-for="item in data">
            <div class="box">
              <h1 class="title-s">{{ item.title }}</h1>
              <br />
              <div class="text">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">统一资源监控</h1>
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
              <h1 class="title-s">可视化与决策分析</h1>
              <div class="text">{{ text3 }}</div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">精准故障定位</h1>
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
              <h1 class="title-s">面向场景的自动化运维</h1>
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
      text2:
        '基于资源模型，统一规划监控方案，方案完全覆盖所有资源节点及完整的应用链路。',
      text3: '异常事件统计分析数据可视化，直接明了关注信息集中展示运维更直观。',
      text4:
        '网络全链路跟踪，故障探查无死角告警智能收敛，避免重复告警，精准定位故障资源节点。',
      text5:
        '丰富的运维脚本库和灵活的编排能力，将日常的、复杂的运维操作标准化、流程化、自动化，从而减少了重复劳动力，降低人工操作风险，提升了企业智能运维效率。',
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
