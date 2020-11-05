<template>
  <section class="about-content">
    <h1>About me</h1>
    <div class="content">
      <div class="text-content">
        <p>I'm front-end developer, in Sao Paulo-SP.</p>
        <br />
        <p>
          I like to study to learn new things and to be able to implement the
          best practices in my projects. My goal now is to improve my skills in
          building web applications.
        </p>
        <br />
        <p>Here are a few technologies I've been studying recently:</p>

        <ul class="skills">
          <li>HTML</li>
          <li>CSS & Less</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Vue</li>
          <li>Wordpress</li>
        </ul>
      </div>

      <div class="about-pic">
        <img src="../assets/images/me.png" alt="Mariana" />
      </div>
    </div>
    <hr class="section-divider" />
  </section>
</template>

<script>
export default {};
</script>

<style lang="less">
.about-content {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 95px auto;

  .section-divider {
    display: block;
    border: none;
    background: linear-gradient(-60deg, #2e2e2e, #ff934b, #9370d3, #FD6585, #2e2e2e);
    height: 1px;
    width: 90%;
    align-self: center;
  }

  h1 {
    margin: 80px 0 0 0;
    font-size: 1.8rem;
  }

  .content {
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap: 50px;
    .skills {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      padding: 0px;
      margin: 20px 0px 0px;
      overflow: hidden;
      list-style: none;
      li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        font-size: 1.1rem;
        &::before {
          content: "▹";
          position: absolute;
          left: 0px;
          font-size: 1.1rem;
          color: #ff934b;
        }
      }
    }
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }

  .text-content {
    margin-top: 70px;
    p {
      font-size: 1.1rem;
      line-height: 30px;
    }
  }

  .about-pic {
    position: relative;
    width: 300px;
    height: 450px;
    background: linear-gradient(
      45deg,
      #ff934b94,
      #e26f904f,
      #9370d350,
      #2e2e2eb9
    );
    margin-bottom: 100px;
    border: 2px solid;
    border-image: linear-gradient(45deg, #ff934b, #e26f8f, #9b618a, #2e2e2e) 1;

    img {
      width: 300px;
      height: 450px;
      margin-bottom: 100px;
      border: none;
      position: absolute;
      z-index: -2;
    }
  }
}
</style>
