<template>
    <header>
    <nav>
      <div class="logo">
        <img src="../assets/images/logo.png" alt="Logo">
      </div>
      <div class="nav_links">
        <ol>
          <router-link tag="li" class="li" to="/">
            <a>Home</a>
          </router-link>
          <router-link tag="li" class="li" to="/about">
            <a>About</a>
          </router-link>
        </ol>

        <div>
          <a href="">Botão</a>
        </div>
      </div>
      
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    background: none;
    padding: 30px 0;
    margin: 10px 0 100px 0;
  }

  .logo img {
    width: 60px;
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
  }

  .nav_links {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
   
  
  }

  ol {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  .li {
    padding-right: 25px; 
    color: #ffffff;
  }

  a {
    text-decoration: none;
  }
</style>