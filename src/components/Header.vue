<template>
  <header>
    <nav>
      <div class="logo">
        <router-link tag="a" class="a" to="/">
          <a>
            <img src="../assets/images/logo.png" alt="Logo" />
          </a>
        </router-link>
      </div>
      <div class="nav_links">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
        </ul>

        <div class="btn">
          <a href="">Resume/Currículo</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less">
header {
  background: none;
  padding: 30px 0;
  margin: 10px 0 90px 0;
  
  @media (max-width: 767px) {
    margin: 10px 0 70px 0;
  }

  .logo a img {
    width: 40px;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
    color: #000000;
    counter-reset: item 0;
    z-index: 12;

    .nav_links {
      display: flex;
      justify-content: space-between;
      font-size: 1.1rem;

      ul {
      display: flex;
      justify-content: space-between;
      padding: 0px;
      margin: 0px;
      list-style: none;

        a {
          padding-right: 25px;
          color: antiquewhite;
          text-decoration: none;
          font-size: 0.9rem;
        }
      }

      .btn a {
        width: 125px;
        padding: 14px;
        text-align: center;
        font-size: 0.9rem;
        cursor: pointer;
        border: 1px solid;
        border-image: linear-gradient(45deg, #ff934b, #e26f8f, #9b618a, #2e2e2e) 1;
        color: white;
        line-height: 1;
        text-decoration: none;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover{
          background-color: #080808;
        }
      
      }
    }

  }

  
}
</style>
