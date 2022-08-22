<template>
  <div class="home">
    <i @click="btnCilck(307)" class="left-btn">
      <img src="/Home/上一个.svg" alt=""
    /></i>
    <div ref="scrollOuter" class="scroll-box">
      <div
        ref="scrollBody"
        class="scroll-body"
        :style="{ left: tagBodyLeft + 'px' }"
      >
        <div
          v-for="(item, index) in content[flag].cList"
          :key="index"
          :label="item"
        >
          <div v-if="index % 2 == 0" class="test">
            <el-card
              class="box-card"
              :style="{
                backgroundImage: 'url(' + content[flag].cList[index].url + ')'
              }"
            >
              <div class="content">
                {{ content[flag].cList[index].title }}
              </div>
            </el-card>
            <el-card
              v-if="index + 1 < content[flag].cList.length"
              class="box-card"
              :style="{
                backgroundImage:
                  'url(' + content[flag].cList[index + 1].url + ')'
              }"
            >
              <div class="content">
                {{ content[flag].cList[index + 1].title }}
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
  props: {
    flag: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      content: [
        {
          cList: [
            { title: '招商银行', url: '/Scroll/1.png' },
            { title: '宁波通商银行', url: '/Scroll/5.png' },
            { title: '浦发硅谷银行', url: '/Scroll/2.png' },
            { title: '杭州银行信息中心', url: '/Scroll/6.png' },
            { title: '兴业银行', url: '/Scroll/3.png' },
            { title: '恒生银行', url: '/Scroll/7.png' },
            { title: '长江商业银行', url: '/Scroll/4.png' },
            { title: '中行上海分行', url: '/Scroll/8.png' },
            { title: '东亚银行', url: '/Scroll/1.png' },
            { title: '南洋商业银行', url: '/Scroll/5.png' },
            { title: '城商行清算中心', url: '/Scroll/2.png' }
          ]
        },
        {
          cList: [
            { title: '太平资产', url: '/Scroll/1.png' },
            { title: '太平保险', url: '/Scroll/5.png' },
            { title: '大地保险', url: '/Scroll/2.png' },
            { title: '中宏保险', url: '/Scroll/6.png' },
            { title: '昆山健康保险', url: '/Scroll/3.png' },
            { title: '安盛保险', url: '/Scroll/7.png' },
            { title: '友邦保险', url: '/Scroll/4.png' },
            { title: '中美联泰大都会保险', url: '/Scroll/8.png' },
            { title: '平安保险', url: '/Scroll/1.png' }
          ]
        },
        {
          cList: [
            { title: '外汇交易中心', url: '/Scroll/1.png' },
            { title: '上证信息', url: '/Scroll/5.png' },
            { title: '长城证券', url: '/Scroll/2.png' },
            { title: '富国基金', url: '/Scroll/6.png' },
            { title: 'XX基金', url: '/Scroll/3.png' },
            { title: '国金证券', url: '/Scroll/7.png' },
            { title: '宏信证券', url: '/Scroll/4.png' },
            { title: '国泰君安证券', url: '/Scroll/8.png' }
          ]
        },
        {
          cList: [
            { title: '展讯通信', url: '/Scroll/1.png' },
            { title: '中兴通讯', url: '/Scroll/5.png' },
            { title: 'Magna', url: '/Scroll/2.png' },
            { title: '安吉星', url: '/Scroll/6.png' },
            { title: '江苏核电', url: '/Scroll/3.png' },
            { title: '先正达', url: '/Scroll/7.png' },
            { title: '瑞声科技', url: '/Scroll/4.png' },
            { title: '华为', url: '/Scroll/8.png' },
            { title: '小米', url: '/Scroll/1.png' },
            { title: '南瑞集团', url: '/Scroll/5.png' },
            { title: '中国最大的XX半导体', url: '/Scroll/2.png' },
            { title: '瑞萨半导体', url: '/Scroll/6.png' },
            { title: '中芯长电', url: '/Scroll/3.png' },
            { title: '联合汽车电子', url: '/Scroll/7.png' }
          ]
        },
        {
          cList: [
            { title: '货车帮', url: '/Scroll/1.png' },
            { title: '中国远洋Cosco', url: '/Scroll/5.png' },
            { title: '远成物流', url: '/Scroll/2.png' }
          ]
        },
        {
          cList: [
            { title: 'OFO', url: '/Scroll/1.png' },
            { title: '印象笔记', url: '/Scroll/5.png' },
            { title: '京东', url: '/Scroll/2.png' },
            { title: '百度', url: '/Scroll/6.png' },
            { title: '今日头条', url: '/Scroll/3.png' },
            { title: '拉卡拉', url: '/Scroll/7.png' },
            { title: '越秀金控集团', url: '/Scroll/4.png' },
            { title: '招联消费金融', url: '/Scroll/8.png' },
            { title: '快钱', url: '/Scroll/1.png' }
          ]
        },
        {
          cList: [
            { title: '玫琳凯', url: '/Scroll/1.png' },
            { title: '天学网', url: '/Scroll/5.png' },
            { title: '万国数据', url: '/Scroll/2.png' },
            { title: '全家', url: '/Scroll/6.png' },
            { title: '华润置地', url: '/Scroll/3.png' },
            { title: '金龙客车', url: '/Scroll/7.png' },
            { title: 'UR', url: '/Scroll/4.png' }
          ]
        }
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
    resetPosition() {
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
