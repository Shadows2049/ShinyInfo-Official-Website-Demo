<template>
  <div class="content-container">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-demo"
      mode="horizontal"
      router
      background-color="#FFFFFF"
      text-color="#333333"
      active-text-color="#1370EE"
    >
      <div class="logo">
        <el-menu-item index="/"
          ><img src="/Home/logo深蓝色版.png" alt="logo" style="width: 160px"
        /></el-menu-item>
      </div>
      <div class="navi">
        <el-submenu index="1" class="sub1">
          <template slot="title">产品</template>
          <el-submenu index="1-1">
            <template slot="title" class="s">IT运维管理</template>
            <el-menu-item index="/Monitor"> 基础监控</el-menu-item>
            <el-menu-item index="/Service">服务智能</el-menu-item>
            <el-menu-item index="/Alert">告警平台</el-menu-item>
            <el-menu-item index="/ITSM"> ITSM</el-menu-item>
            <el-menu-item index="/CMDB">CMDB</el-menu-item>
            <el-menu-item index="/AutoOM">自动化运维</el-menu-item>
            <el-menu-item index="/Analysis">日志分析</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">安全平台</template>
            <el-menu-item index="/SIEM">安全运营平台(SIEM)</el-menu-item>
            <el-menu-item index="/UEBA">用户行为分析系统(UEBA)</el-menu-item>
            <el-menu-item index="/SOAR"
              >安全编排和自动化响应(SOAR)</el-menu-item
            >
          </el-submenu>
        </el-submenu>

        <el-submenu index="2" class="sub2"
          ><template slot="title">解决方案</template>
          <el-menu-item index="/ITOM">IT运维管理</el-menu-item>
          <el-menu-item index="/Observation">可观察性</el-menu-item>
          <el-menu-item index="/Platform">新一代安全运营平台</el-menu-item>
        </el-submenu>
        <el-submenu index="3" class="sub3">
          <template slot="title">我们</template>
          <el-menu-item index="/AboutUs">关于我们</el-menu-item>
          <el-menu-item index="/ContactUs">联系我们</el-menu-item>
          <el-menu-item index="/JoinUs">加入我们</el-menu-item>
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

.content-container {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
}
.el-menu {
  height: 80px;
}
.navi {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
:deep(.el-submenu__icon-arrow) {
  position: relative;
  top: 5%;
  margin-left: 32px;
  transition: transform 0.3s;
  font-size: 18px;
}

:deep(.el-submenu__title) {
  font-family: PSR;
  height: 56px;
  line-height: 56px;
  font-size: 17px;
  color: #303133;
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
  white-space: nowrap;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  font-family: PSR;
  font-size: 15px;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.logo {
  position: absolute;
  left: 360px;
  top: 15px;
}
</style>
