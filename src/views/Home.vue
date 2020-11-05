<template>
  <Header />
  <Social />
  <section class="hero-content">
    <div class="hero-one">
      <h1>Hi 👋</h1>
    </div>
    <div class="hero-two">
      <h2>I'm Mariana Morais,</h2>
      <h2><span class="frontend">Front-End Developer.</span></h2>
    </div>
    <div class="hero-three">
      <p>
        I'm graduated in Systems Analysis and Development. I like website
        development. I study technologies in order to build beautiful and
        well-structured applications.
      </p>
    </div>
    <div class="hero-four">
      <a href="mailto:marianamorais.dev@gmail.com">Contact me</a>
    </div>
    <About />
    <Projects />
    <hr class="section-divider2" />
  </section>
  
</template>

<script>
// import Container from '../components/Container';
import Header from "../components/Header";
import Social from "../components/Social";
import About from '../components/About';
import Projects from '../components/Projects';

export default {
  components: {
    Header,
    Social,
    About,
    Projects
  },
};
</script>

<style lang="less">
// @import '../assets/styles/global.less;

.hero-content {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  .hero-one {
    font-size: 0.7rem;
    margin-bottom: 25px;
  }
  .hero-two {
    font-size: 3.2rem;
    padding-right: 200px;
    @media (max-width: 767px) {
      font-size: 2rem;
      padding: 0;
    }
    .frontend {
      animation: flow 5s ease-in infinite;
      background: linear-gradient(-60deg, #ff934b, #e26f8f, #9370d3, #FD6585, #2e2e2e);
      background-size: 300%;

      -webkit-background-clip: text;
      background-clip: text;
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
  .section-divider2 {
    margin: 100px 0;
    display: block;
    border: none;
    background: linear-gradient(-60deg, #2e2e2e, #ff934b, #9370d3, #FD6585, #2e2e2e);
    height: 1px;
    width: 90%;
    align-self: center;
  }
}

.hero-three p {
  padding-right: 20%;
  font-size: 1.1rem;
  line-height: 30px;
  margin-top: 35px;
  font-weight: 400;
  @media (max-width: 768px) {
    padding: 0;
  }
}

.hero-four {
  margin-top: 40px;
  width: 123px;
  padding: 14px;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  border: 1px solid;
  border-image: linear-gradient(45deg, #ff934b, #e26f8f, #9b618a, #2e2e2e) 1;
  line-height: 1;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover{
      background-color: #080808;
    }
  a {
    color: #eeeeee;
    text-decoration: none;
  }
}
</style>
