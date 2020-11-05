<template>
  <div class="social-left">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/marianamorais000/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        </li>
      <li>
        <a href="https://github.com/marianamorais" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/marianamorais0" target="_blank">
          <font-awesome-icon :icon="['fab', 'behance']" />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/marimorais/details/QWjONPW" target="_blank">
          <font-awesome-icon :icon="['fab', 'codepen']" />
        </a>
      </li>
    </ul>
  </div>
  <div class="social-right">
    <div class="email">
      <a href="mailto:marianamorais.dev@gmail.com">marianamorais.dev@gmail.com</a>
    </div>
  </div>
  <div>

  </div>
</template>

<style lang="less">
.social-left {
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: auto;
  z-index: 10;
  color: var(--light-slate);

  ul {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

    li {
      padding: 10px;
      font-size: 1.2rem;
      margin-bottom: 10px;

      a {
        color: white;
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        cursor: pointer;
        &:hover{
          color: #ff934b;
        }
      }
    }
    &::after{
      content: "";
      display: block;
      width: 1px;
      height: 100px;
      background: linear-gradient(-60deg, #2e2e2e, #ff934b, #9370d3, #FD6585, #2e2e2e);
    }
  }
}
.social-right {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: white;

  .email {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

    a {
      margin: 20px auto;
      padding: 10px;
      font-size: 0.9rem;
      color: white;
      letter-spacing: 0.1em;
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

      &:hover {
        color: #9370d3;
      }
    }

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 100px;
      margin: 0px auto;
      background: linear-gradient(-60deg, #2e2e2e, #ff934b, #9370d3, #FD6585, #2e2e2e);
    }
  }


}

</style>

<script>
export default {
  
}
</script>
