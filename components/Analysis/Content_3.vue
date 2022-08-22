<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <bodyContent :content="content" />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import bodyContent from '@/components/ContentB.vue'
export default {
  components: { bodyContent },
  data() {
    return {
      content: [
        {
          title: '高效的日志检索服务',
          content:
            '• 任意格式任意类型数据\n• 全量全文检索\n• 自动化字段识别\n• 一键追溯上下文',
          url: '/Analysis/高效的日志检索服务.png'
        },
        {
          title: '强大的数据分析能力',
          content:
            'SQL分析引擎\n• 标准SQL语法，无需学习专用的查询语言，学习门槛低\n• 无需语言转换，从查询语法层面帮助无缝集成已有的SQL系统，减少二次开发的成本\n• 内置各类函数，实现多维度逻辑计算\n• 开放式框架支持自定义分析语言',
          url: '/Analysis/强大的数据分析能力.png'
        },
        {
          title: '灵活的数据可视化',
          content:
            '交互式仪表板创建和编辑\n• 随心拖拽调整组件大小和位置\n• 自动吸附边缘进行对齐 <br />带参数的仪表板\n• 自定义仪表板参数选择\n支持导出多种格式PDF、PNG、CSV',
          url: '/Analysis/灵活的数据可视化.png'
        },
        {
          title: '完善的权限管理',
          content:
            '节点到节点加密 验证方式支持：Active Directory, LDAP, Kerberos,SAML...\n基于角色的访问控制\n索引、文档和字段级访问限制\n平台审计日志',
          url: '/Analysis/完善的权限管理.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 1850px;
}
.title {
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
</style>
