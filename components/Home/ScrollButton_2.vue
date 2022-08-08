<template>
  <div class="home">
    <i @click="btnCilck(307)" class="left-btn">
      <img src="/Home/上一个.svg" alt=""
    /></i>
    <div
      ref="scrollOuter"
      class="scroll-box"
      @mouseScroll.prevent="handlescroll"
      @mousewheel.prevent="handlescroll"
    >
      <div
        ref="scrollBody"
        class="scroll-body"
        :style="{ left: tagBodyLeft + 'px' }"
      >
        <div v-for="(item, index) in content" :key="index" :label="item">
          <div v-if="index % 2 == 0" class="test">
            <el-card
              class="box-card"
              :style="{
                backgroundImage: 'url(' + content[index].url + ')'
              }"
            >
              <div class="content">
                {{ content[index].title }}
              </div>
            </el-card>
            <el-card
              v-if="index + 1 < content.length"
              class="box-card"
              :style="{
                backgroundImage: 'url(' + content[index + 1].url + ')'
              }"
            >
              <div class="content">
                {{ content[index + 1].title }}
              </div>
            </el-card>
            <el-card v-else class="box-card-void">
              <div class="content"></div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <i @click="btnCilck(-307)" class="right-btn"
      ><img src="/Home/下一个.svg" alt=""
    /></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: [
        { title: '招商银行', url: '/1.png' },
        { title: '宁波通商银行', url: '/5.png' },
        { title: '浦发硅谷银行', url: '/2.png' },
        { title: '杭州银行信息中心', url: '/6.png' },
        { title: '兴业银行', url: '/3.png' },
        { title: '恒生银行', url: '/7.png' },
        { title: '长江商业银行', url: '/4.png' },
        { title: '中行上海分行', url: '/8.png' },
        { title: '东亚银行', url: '/1.png' },
        { title: '南洋商业银行', url: '/5.png' },
        { title: '城商行清算中心', url: '/2.png' }
      ],
      bank: [
        { title: '招商银行', url: '/1.png' },
        { title: '宁波通商银行', url: '/5.png' },
        { title: '浦发硅谷银行', url: '/2.png' },
        { title: '杭州银行信息中心', url: '/6.png' },
        { title: '兴业银行', url: '/3.png' },
        { title: '恒生银行', url: '/7.png' },
        { title: '长江商业银行', url: '/4.png' },
        { title: '中行上海分行', url: '/8.png' },
        { title: '东亚银行', url: '/1.png' },
        { title: '南洋商业银行', url: '/5.png' },
        { title: '城商行清算中心', url: '/2.png' }
      ],
      insurance: [
        { title: '太平资产', url: '/1.png' },
        { title: '太平保险', url: '/5.png' },
        { title: '大地保险', url: '/2.png' },
        { title: '中宏保险', url: '/6.png' },
        { title: '昆山健康保险', url: '/3.png' },
        { title: '安盛保险', url: '/7.png' },
        { title: '友邦保险', url: '/4.png' },
        { title: '中美联泰大都会保险', url: '/8.png' },
        { title: '平安保险', url: '/1.png' }
      ],
      investment: [
        { title: '外汇交易中心', url: '/1.png' },
        { title: '上证信息', url: '/5.png' },
        { title: '长城证券', url: '/2.png' },
        { title: '富国基金', url: '/6.png' },
        { title: 'XX基金', url: '/3.png' },
        { title: '国金证券', url: '/7.png' },
        { title: '宏信证券', url: '/4.png' },
        { title: '国泰君安证券', url: '/8.png' }
      ],
      technology: [
        { title: '展讯通信', url: '/1.png' },
        { title: '中兴通讯', url: '/5.png' },
        { title: 'Magna', url: '/2.png' },
        { title: '安吉星', url: '/6.png' },
        { title: '江苏核电', url: '/3.png' },
        { title: '先正达', url: '/7.png' },
        { title: '瑞声科技', url: '/4.png' },
        { title: '华为', url: '/8.png' },
        { title: '小米', url: '/1.png' },
        { title: '南瑞集团', url: '/5.png' },
        { title: '中国最大的XX半导体', url: '/2.png' },
        { title: '瑞萨半导体', url: '/6.png' },
        { title: '中芯长电', url: '/3.png' },
        { title: '联合汽车电子', url: '/7.png' }
      ],
      logistics: [
        { title: '货车帮', url: '/1.png' },
        { title: '中国远洋Cosco', url: '/5.png' },
        { title: '远成物流', url: '/2.png' }
      ],
      internet: [
        { title: 'OFO', url: '/1.png' },
        { title: '印象笔记', url: '/5.png' },
        { title: '京东', url: '/2.png' },
        { title: '百度', url: '/6.png' },
        { title: '今日头条', url: '/3.png' },
        { title: '拉卡拉', url: '/7.png' },
        { title: '越秀金控集团', url: '/4.png' },
        { title: '招联消费金融', url: '/8.png' },
        { title: '快钱', url: '/1.png' }
      ],
      others: [
        { title: '玫琳凯', url: '/1.png' },
        { title: '天学网', url: '/5.png' },
        { title: '万国数据', url: '/2.png' },
        { title: '全家', url: '/6.png' },
        { title: '华润置地', url: '/3.png' },
        { title: '金龙客车', url: '/7.png' },
        { title: 'UR', url: '/4.png' }
      ],

      tagBodyLeft: 0
    }
  },
  methods: {
    handlescroll(e) {
      this.btnCilck(e.wheelDelta)
    },
    // 移动逻辑 减小左边距, 内容往左移
    btnCilck(offset) {
      // 外部宽
      let outerWidth = this.$refs.scrollOuter.offsetWidth
      // 内部宽
      let bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        this.tagBodyLeft =
          outerWidth < bodyWidth
            ? Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
            : 0
      }
    },
    bankUpdate() {
      this.content = this.bank.map((item) => ({
        title: item.title,
        url: item.url
      }))
      this.tagBodyLeft = 0
    },
    insuranceUpdate() {
      this.content = this.insurance.map((item) => ({
        title: item.title,
        url: item.url
      }))
      this.tagBodyLeft = 0
    },
    investmentUpdate() {
      this.content = this.investment.map((item) => ({
        title: item.title,
        url: item.url
      }))
      this.tagBodyLeft = 0
    },
    techUpdate() {
      this.content = this.technology.map((item) => ({
        title: item.title,
        url: item.url
      }))
      this.tagBodyLeft = 0
    },
    logisticsUpdate() {
      this.content = this.logistics.map((item) => ({
        title: item.title,
        url: item.url
      }))
      this.tagBodyLeft = 0
    },
    internetUpdate() {
      this.content = this.internet.map((item) => ({
        title: item.title,
        url: item.url
      }))
      this.tagBodyLeft = 0
    },
    othersUpdate() {
      this.content = this.others.map((item) => ({
        title: item.title,
        url: item.url
      }))
      this.tagBodyLeft = 0
    }
  }
}
</script>
<style scoped>
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.description {
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: 12px auto;
}
.scroll {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  font-family: PSR;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
}
.el-menu-item.is-active {
  background: #1370ee !important;
  border-radius: 4px !important;
}
.home {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
/* 外层盒子 */
.scroll-box {
  position: relative;
  width: 1228px;
  overflow: hidden;
}
/* 移动的盒子 */
.scroll-body {
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transition: all 0.4s;
}
/* 标签样式 */
.scroll-items {
  width: 110px;
  margin: 0 10px;
  border: 1px solid #000;
  list-style: none;
  text-align: center;
}
/* 左右箭头 */
.left-btn,
.right-btn {
  position: absolute;
  bottom: 210px;
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
}
.left-btn {
  margin-right: 1370px;
}
.right-btn {
  z-index: inherit;
  margin-left: 1370px;
}
.box-card {
  width: 285px;
  height: 160px;
  margin: 10px;
  background-size: contain;
}
.box-card-void {
  width: 285px;
  height: 160px;
  opacity: 0;
  margin: 10px;
}
.content {
  position: relative;
  font-family: PSR;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  margin-top: 40px;
}
</style>
