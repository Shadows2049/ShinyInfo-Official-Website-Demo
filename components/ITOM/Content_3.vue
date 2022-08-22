<template>
  <div class="content-container">
    <el-container class="c1">
      <el-header height="180px">
        <h1 class="title">全生命周期管理 IT 资源(CMDB)</h1>
      </el-header>
      <el-main class="main">
        <div class="upper">
          <div class="content-1">
            <div class="pic3">
              <img src="/ITOM/CMDB.jpg" alt="" style="width: 640px" />
            </div>
            <div class="content-1-2">
              <div class="text-box" v-for="item in items">
                <div class="small-box">
                  <img
                    :src="item.url"
                    alt=""
                    style="height: 28px; margin-top: 15px"
                  />
                  <div class="text_">
                    <div class="textB">{{ item.content }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-box">
            <div v-for="item in data">
              <div class="box">
                <div class="innerBox">
                  <h1 class="title-s">{{ item.title }}</h1>
                  <div class="text-s">{{ item.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
    <bodyContent :content="content" />
  </div>
</template>
<script>
import bodyContent from '@/components/ContentB.vue'
export default {
  components: { bodyContent },
  data() {
    return {
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
      ],
      content: [
        {
          title: '统一资源监控',
          content:
            '基于资源模型，统一规划监控方案，方案完全覆盖所有资源节点及完整的应用链路。',
          url: '/ITOM/统一资源监控.jpg'
        },
        {
          title: '可视化与决策分析',
          content:
            '异常事件统计分析数据可视化，直接明了关注信息集中展示运维更直观。',
          url: '/ITOM/可视化与决策分析.jpg'
        },
        {
          title: '精准故障定位',
          content:
            '网络全链路跟踪，故障探查无死角告警智能收敛，避免重复告警，精准定位故障资源节点。',
          url: '/ITOM/精准故障定位.png'
        },
        {
          title: '面向场景的自动化运维',
          content:
            '丰富的运维脚本库和灵活的编排能力，将日常的、复杂的运维操作标准化、流程化、自动化，从而减少了重复劳动力，降低人工操作风险，提升了企业智能运维效率。',
          url: '/ITOM/面向场景的自动化运维.png'
        },
        {
          title: '最佳ITSM工作流程',
          content:
            '1.工作流自动化：IT 服务流程可灵活定义，自动分派工单指派到人。\n2.SLA 确保满意度：灵活制定多级 SLA，配合到期提醒，确保服务质量。\n3.智能机器人查询及处理。\n4.与自动化深度结合，支持线上审批。',
          url: '/ITOM/最佳ITSM工作流程.png'
        }
      ],
      items: [
        {
          content: 'IT资源统一管理，随时查看IT资源及其运行情况',
          url: '/ITOM/标题符号.png'
        },
        {
          content: '自动发现IT资产配置信息释放人力成本',
          url: '/ITOM/标题符号.png'
        },
        {
          content: 'CI关联关系可视化IT资源',
          url: '/ITOM/标题符号.png'
        }
      ],
      text2_1: 'IT资源统一管理，随时查看IT资源及其运行情况',
      text2_2: '自动发现IT资产配置信息释放人力成本',
      text2_3: 'CI关联关系可视化IT资源'
    }
  }
}
</script>
<style scoped>
.content-container {
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
.c1 {
  height: 900px;
  background: #f3f8fe;
}
.content-1 {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}
.textB {
  position: relative;
  max-width: 400px;
  font-family: PSR;
  font-size: 24px;
  color: #333333;
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
  font-size: 20px;
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
  width: 387px;
  height: 160px;
  background: #deecff;
  border-radius: 12px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-self: center;
}
.innerBox {
  margin-left: 60px;
  margin-top: -30px;
}
.small-box {
  display: flex;
  margin: 10px 0;
  align-items: baseline;
}
.text_ {
  position: relative;
  max-width: 360px;
  margin-left: 20px;
  margin-top: 20px;
}
.text-s {
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: -10px;
}
</style>
