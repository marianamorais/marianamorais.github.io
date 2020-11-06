<template>
  <div class="social-footer">
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
</template>

<style lang="less">
  .social-footer {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-self: center;
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        
        li {
          padding: 22px;
          font-size: 1.5rem;
          margin-bottom: 30px;
        }
        
        a {
        color: white;
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        cursor: pointer;
        &:hover{
          color: #ff934b;
        }
      }
      }
    }
  }
</style>