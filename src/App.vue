<template>
  <div class="container">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
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
  background: @black;
  color: @white-color;
  font-family: @raleway;
  box-sizing: border-box;
}

</style>
