<template>
  <div class="content-container">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-demo"
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <div class="navi">
        <el-submenu index="1" class="sub1">
          <template slot="title">产品</template>
          <el-submenu index="1-1">
            <template slot="title">IT运维管理</template>
            <el-menu-item index="/%E5%9F%BA%E7%A1%80%E7%9B%91%E6%8E%A7">
              基础监控</el-menu-item
            >
            <el-menu-item index="/itsm"> ITSM</el-menu-item>
            <el-menu-item index="/cmdb">CMDB</el-menu-item>
            <el-menu-item index="/%E6%9C%8D%E5%8A%A1%E6%99%BA%E8%83%BD"
              >服务智能</el-menu-item
            >
            <el-menu-item index="/%E5%91%8A%E8%AD%A6%E5%B9%B3%E5%8F%B0"
              >告警平台</el-menu-item
            >
            <el-menu-item index="/%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BF%90%E7%BB%B4"
              >自动化运维</el-menu-item
            >
            <el-menu-item index="/%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90"
              >日志分析</el-menu-item
            >
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">安全平台</template>
            <el-menu-item
              index="/%E5%AE%89%E5%85%A8%E8%BF%90%E8%90%A5%E5%B9%B3%E5%8F%B0"
              >安全运营平台(SIEM)</el-menu-item
            >
            <el-menu-item
              index="/%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F"
              >用户行为分析系统(UEBA)</el-menu-item
            >
            <el-menu-item
              index="/%E5%AE%89%E5%85%A8%E7%BC%96%E6%8E%92%E5%92%8C%E8%87%AA%E5%8A%A8%E5%8C%96%E5%93%8D%E5%BA%94"
              >安全编排和自动化响应(SOAR)</el-menu-item
            >
          </el-submenu>
        </el-submenu>

        <el-submenu index="2" class="sub2"
          ><template slot="title">解决方案</template>
          <el-menu-item index="/IT%E8%BF%90%E7%BB%B4%E7%AE%A1%E7%90%86"
            >IT运维管理</el-menu-item
          >
          <el-menu-item index="/%E5%8F%AF%E8%A7%82%E5%AF%9F%E6%80%A7"
            >可观察性</el-menu-item
          >
          <el-menu-item
            index="/%E6%96%B0%E4%B8%80%E4%BB%A3%E5%AE%89%E5%85%A8%E8%BF%90%E8%90%A5"
            >新一代安全运营</el-menu-item
          >
        </el-submenu>
        <el-submenu index="3" class="sub3">
          <template slot="title">我们</template>
          <el-menu-item index="/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC"
            >关于我们</el-menu-item
          >
          <el-menu-item index="/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC"
            >联系我们</el-menu-item
          >
          <el-menu-item index="/%E5%8A%A0%E5%85%A5%E6%88%91%E4%BB%AC"
            >加入我们</el-menu-item
          >
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
    // 使得菜单在载入时就能对应高亮
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }
}
</script>

<style scoped>
:deep(.link) {
  text-decoration: none;
  color: white;
}
.el-menu {
  height: 80px;
}
.navi {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub1 {
  margin-right: 50px;
}
.sub2 {
  margin-right: 50px;
}
</style>
