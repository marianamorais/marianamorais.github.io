<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="less">
  @import './assets/styles/global.less';

* {
  .reset();
}

.container {
  .container();
}

body {
  .colors();
}

</style>
