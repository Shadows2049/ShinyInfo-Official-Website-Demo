<template lang="">
  <div class="container">
    <navigation />
    <nuxt />
  </div>
</template>
<script>
import footerCustom from '@/components/Footer.vue'
import navigation from '@/components/Navigation.vue'
export default {
  name: '',
  components: { footerCustom, navigation }
}
</script>
<style>
body {
  margin: 0;
}
.container {
  min-width: 1500px !important;
}
.fc {
  bottom: 0px;
}
</style>
