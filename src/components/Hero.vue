<template>
  <section class="hero-content">
    <div class="hi">
      <h1>Hi 👋</h1>
    </div>
    <div class="title">
      <h2>I'm Mariana Morais,</h2>
      <h2><span class="frontend">Front-End Developer.</span></h2>
    </div>
    <div class="about">
      <p>
        I'm graduated in Systems Analysis and Development. I like website
        development. I study technologies in order to build beautiful and
        well-structured applications.
      </p>
    </div>
    <div class="btn">
      <a href="mailto:marianamorais.dev@gmail.com">Contact me</a>
    </div>
  </section>
</template>

<style lang="less">
@import "../assets/styles/global.less";

.hero-content {
  display: flex;
  flex-direction: column;
  .hi {
    font-size: 0.7rem;
    margin-bottom: 25px;
  }
  .title {
    font-size: 3.2rem;
    padding-right: 200px;
    @media (max-width: 768px) {
      font-size: 1.4rem;
      padding: 0;
    }
    .frontend {
      animation: flow 5s ease-in infinite;
      background: @gradient-front;
      background-size: 300%;
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;

      @keyframes flow {
        0% {
          background-position: 0 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0 50%;
        }
      }
    }
  }
  .about p {
    padding-right: 20%;
    font-size: 1.1rem;
    line-height: 30px;
    margin-top: 35px;
    font-weight: 400;
    @media (max-width: 768px) {
      padding: 0;
    }
  }

  .btn {
    margin-top: 40px;
    width: 123px;
    padding: 14px;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid;
    border-image: @gradient;
    line-height: 1;
    text-decoration: none;
    transition: @transition;
    &:hover {
      background-color: @dark-black;
    }
    a {
      color: @white-color;
      text-decoration: none;
    }
  }
}
</style>
