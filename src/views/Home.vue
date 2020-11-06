<template>
  <Header />
  <Social />
  <div class="content">
    <Hero />
    <About />
    <Divider />
    <Projects />
    <Divider />
    <SocialFooter />
  </div>
</template>

<script>
// import Container from '../components/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Social from "../components/Social";
import About from '../components/About';
import Projects from '../components/Projects';
import Divider from '../components/Divider';
import SocialFooter from '../components/SocialFooter';

export default {
  components: {
    Header,
    Hero,
    Social,
    About,
    Projects,
    Divider,
    SocialFooter
  },
};
</script>

<style style="css">
.content {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
 }
</style>
