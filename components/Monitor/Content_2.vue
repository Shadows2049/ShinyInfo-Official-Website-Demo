<template>
  <el-container class="content-container">
    <el-header height="230px">
      <h1 class="title">基础监控</h1>
      <div class="description">
        {{ text1 }}
      </div>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <el-card class="box-card">
            <div class="clearfix">
              <span class="title-s">
                <img src="@/images/Monior/u485.png" alt="" />
                {{ item.title }}
              </span>
            </div>
            <div class="content-s">
              {{ item.content }}
            </div>
          </el-card>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '监控系统对物理硬件和应用软件的性能和参数进行数据汇集，实现集中管理和统一分析。提供一站式全方位的监控采集、检测、告警、处置、展示和通知能力，满足不同的监控场景需求，提供指标管理集中统一查看，根据服务场景不同，用户可灵活修改阈值、级别设置，确保监控的灵活性、及时性、准确性、智能化，为在线业务保驾护航。',
      data: [
        {
          title: '硬件设备监控',
          content:
            '实时监控硬件设施的风扇、电源、CPU、内存、磁盘、端口、温度等指标信息。'
        },
        {
          title: '存储设备监控',
          content:
            '实时监控主流存储设备的容量、磁盘、卷、Raid、事件、控制器、存储池、适配器、端口、网络状态、可用性、性能等指标信息。'
        },
        {
          title: '操作系统监控',
          content:
            '实时监控开源和国产操作系统的进程、线程、性能、端口、服务、日志、文件信息等指标信息。'
        },
        {
          title: '虚拟化监控',
          content:
            '实时虚拟化的版本、虚拟机、分区、存储、网络、CPU、磁盘、物理&虚拟内存、进程等指标信息。'
        },
        {
          title: '数据库监控',
          content:
            '监控开源和国产数据库的连接态、缓存池、表空间、缓冲区、运行状态等指标信息。'
        },
        {
          title: '中间件监控',
          content:
            '监控开源和国产中间件的连接态、线程、会话、消息队列、服务状态、MassURL、性能、缓存等指标。'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 630px;
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

.title-s {
  position: relative;
  margin-top: -30px;
  font-family: PSM;
  font-size: 20px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
}
.content-s {
  font-family: PSM;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
}
.description {
  position: relative;
  max-width: 1000px;
  text-indent: 2em;
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: 12px auto;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  margin-top: -50px;
}
.box-card {
  width: 350px;
  height: 150px;
  margin: 10px auto;
}
</style>
