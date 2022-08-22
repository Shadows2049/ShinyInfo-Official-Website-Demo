<template>
  <div class="content-container">
    <div class="main">
      <div class="outer" v-for="item in items">
        <div class="box-card">
          <div class="left">
            <div class="pic1">
              <img src="/US/人员.svg" alt="" />
            </div>
            <div class="line"></div>
          </div>
          <div class="right">
            <h4 class="title">{{ item.title }}</h4>
            <div class="title-s">岗位职责:</div>
            <div class="text">{{ item.content }}</div>
          </div>
        </div>
      </div>
      <div class="outer">
        <div class="small-card">
          <div class="left">
            <div class="pic1">
              <img src="/US/简历投递.svg" alt="" />
            </div>
            <div class="line2"></div>
          </div>
          <div class="right">
            <h4 class="title">简历投递</h4>
            <div class="text-2">简历投递至：hr@shinyinfo.com.cn</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '加入我们',
      text1: '加入我们',
      items: [
        {
          title: '高级JAVA工程师',
          content:
            '1.两年以上JAVA应用开发经验；\n2.精通JAVA/JS等开发技术；\n3.熟悉SpringBoot、SSH、Jquery框架及其各种扩展组件库；\n4.熟悉MyElipse、Bootstrap、Linux、SVN；\n5.善于表达、善于团队合作，乐于钻研新技术。'
        },
        {
          title: '高级WEB前端工程师',
          content:
            '1.两年以上Web前段开发经验；\n2.精通XHTML / CSS / Javascript 等前端技术；\n3.能够编写符合W3C标准、兼容多种浏览器的代码；\n4.熟悉使用AngularJS框架及其各种扩展组件库；\n5.有VUE、Jquery 、Java 、SSH2、Linux、SVN工作经验者优先考虑；\n6.善于表达、善于团队合作，乐于钻研新技术。'
        },
        {
          title: '高级实施工程师',
          content:
            '1.熟悉 Linux、Windows及 MySQL数据库的安装与配置，熟悉Shell/Python等脚本语言;\n2.熟悉网络知识（主流交换机、路由器的配置);\n3.熟悉常见PC服务器，存储设备，网络设备，以及硬件设备故障排查；\n4.性格开朗，思维灵活，具备良好的沟通能力，需求理解能力和解决问题能力。'
        }
      ]
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 1230px;
  display: block;
  align-items: center;
  justify-content: center;
}
.main {
  margin-top: 40px;
}
.title {
  font-family: PSR;
  font-size: 26px;
  color: #333333;
  letter-spacing: 0;
}

.text,
.text-2 {
  white-space: pre-line;
  font-family: PSR;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 28px;
  max-width: 516px;
}
.text-2 {
  margin-top: -10px;
}
.title-s {
  font-family: PSR;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
  margin-top: -20px;
}
.outer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-card {
  width: 800px;
  height: 306px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15);
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
}
.small-card {
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15);
  border-radius: 12px;
  width: 800px;
  height: 168px;
  margin-top: 20px;
  display: flex;
}
.pic1 {
  margin-top: 40px;
  margin-left: 40px;
}
.line {
  border: 1px solid #ebeef5;
  background: #ebeef5;
  width: 1px;
  height: 226px;
  margin-left: 167.5px;
  margin-top: -90px;
}
.line2 {
  border: 1px solid #ebeef5;
  background: #ebeef5;
  width: 1px;
  height: 88px;
  margin-left: 167.5px;
  margin-top: -90px;
}
.left {
  width: 208px;
}
.right {
}
</style>
