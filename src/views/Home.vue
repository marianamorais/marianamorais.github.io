<template>
  <Header></Header>
  <section class="hero-content">
    <div class="hero-one">
      <h1>Hi 👋</h1>
    </div>
    <div class="hero-two">
      <h2>I'm Mariana Morais.</h2>
      <h2>I'm <span class="frontend">Front-End Developer.</span></h2>
    </div>
    <div class="hero-three">
      <p>
        I'm graduated in Systems Analysis and Development. I like website
        development. I study technologies in order to build beautiful and
        well-structured applications.
      </p>
    </div>
    <div class="hero-four">
      <a href="">
        <svg width="277" height="100">
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="100%" stop-color="#FFFFFF" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            rx="4"
            fill="none"
            stroke="url(#grad1)"
            width="200"
            height="50"
          ></rect>
        </svg>
        <span>Get in touch</span>
      </a>
    </div>
  </section>
</template>

<script>
// import Container from '../components/Container';
import Header from "../components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="less">
// @import '../assets/styles/global.less;

.hero-content {
  display: flex;
  flex-direction: column;
  max-width: 1160px;
  margin: 0 auto;
  .hero-one {
    font-size: 0.7rem;
    margin-bottom: 25px;
  }
  .hero-two {
    font-size: 2.4rem;
    padding-right: 300px;
    .frontend {
      animation: flow 3s ease-in infinite;
      background: linear-gradient(-60deg, #ffa568, #e26f8f, #cf7cb7, #ffa568);
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
}

.hero-three p {
  padding-right: 300px;
  font-size: 1.2rem;
  line-height: 30px;
  margin-top: 20px;
}

.hero-four {
  margin-top: 30px;
  position: relative;
  width: 200px;
  height: 50px;
  font-size: 1em;
  line-height: 55px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.1rem;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    rect {
      stroke-width: 3;
      stroke-dasharray: 250, 0;
      stroke-dashoffset: 0;
      -webkit-transition: all 600ms ease;
      transition: all 600ms ease;
    }
  }
  span {
    background: rgb(255, 130, 130);
    background: -moz-linear-gradient(
      left,
      rgba(255, 130, 130, 1) 0%,
      rgba(225, 120, 237, 1) 100%
    );
    background: -webkit-linear-gradient(
      left,
      rgba(255, 130, 130, 1) 0%,
      rgba(225, 120, 237, 1) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 130, 130, 1) 0%,
      rgba(225, 120, 237, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8282', endColorstr='#e178ed',GradientType=1 );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 495;
  }
}

// .hero-four{
//   margin-top: 50px;

//     a {
//       width: 8%;
//       font-size: 1rem;
//       text-align: center;
//       color: #ffffff;
//       background-color: transparent;
//       border: 1.5px solid #ffffff;
//       border-radius: 4px;
//       padding: 1.25rem 1.75rem;
//       line-height: 1;
//       text-decoration: none;
//       cursor: pointer;
//       box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//   transition: all 0.3s cubic-bezier(.25,.8,.25,1);
//       &:hover{
//         box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
//         background-image: linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%)
//       }
//     }
// }
</style>
