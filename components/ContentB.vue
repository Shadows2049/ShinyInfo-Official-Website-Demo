<template>
  <div>
    <div v-for="(item, index) in content" :key="index" :label="item">
      <div v-if="index % 2 == 0" class="content-1">
        <div class="content-1-1">
          <div class="line"></div>
          <h1 class="title-s">{{ content[index].title }}</h1>
          <div class="text">
            {{ content[index].content }}
          </div>
        </div>
        <div class="pic4">
          <img :src="content[index].url" alt="" style="width: 640px" />
        </div>
      </div>
      <div v-else class="content-1">
        <div class="pic3">
          <img :src="content[index].url" alt="" style="width: 640px" />
        </div>
        <div class="content-1-2">
          <div class="content-1-2-1">
            <div class="line"></div>
            <h1 class="title-s">{{ content[index].title }}</h1>
            <div class="text">
              {{ content[index].content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.title-s {
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
}

.pic1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
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
  width: 400px;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 14px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  white-space: pre-line;
}
.pic2,
.pic4 {
  margin-left: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
}
.pic3 {
  margin-right: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
}
.line {
  transform: scaleY(-1);
  background: #1370ee;
  border-radius: 4px;
  width: 60px;
  height: 4px;
}
</style>
