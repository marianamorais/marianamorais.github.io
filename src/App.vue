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
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;800&display=swap');

* {
  .reset();
}

.container {
  .container();
}

body {
  .colors();
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
}

</style>
