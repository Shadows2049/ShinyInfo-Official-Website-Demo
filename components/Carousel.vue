<template>
  <div class="block">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
  line-height: 600px;
  margin: auto;
  margin-left: 50%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #d0e2fc;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d0e2fc;
}
</style>
