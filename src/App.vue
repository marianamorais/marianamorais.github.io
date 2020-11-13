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

::-webkit-scrollbar {
  width: 2px;
  height: 10%;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(-60deg, #131313, #ff934b, #9370d3, #FD6585, #1a1a1a);
  transition: @transition;
}

body {
  background: @black;
  color: @white-color;
  font-family: @raleway;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

</style>
