<template>
  <header>
    <nav>
      <div class="logo">
        <a href="/">
          <img src="../assets/images/logo.png" alt="Logo" />
        </a>
      </div>
      <div class="nav-links">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a class="btn" href="">Resume/Currículo</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../assets/styles/global.less";

header {
  background: none;
  padding: 30px 0;
  margin: 10px 0 90px 0;
  @media (max-width: @width768) {
    margin: 10px 0 70px 0;
  }

  .logo a img {
    width: 40px;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
 
    .nav-links {
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
          color: @white-color;
          text-decoration: none;
          font-size: 0.9rem;
        }
      }

      .btn {
        width: 125px;
        padding: 14px;
        text-align: center;
        font-size: 0.9rem;
        cursor: pointer;
        border: 1px solid;
        border-image: @gradient;
        color: @white-color;
        line-height: 1;
        text-decoration: none;
        transition: @transition;
        &:hover {
          background-color: @dark-black;
        }
      }
    }
  }
}
</style>
