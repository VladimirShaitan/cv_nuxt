<template>


  <div id="app">
    <Intro />
    <About />
    <Resume />
    <Portfolio />
    <Services />
  </div>



</template>

<script>
import Intro from '@/components/Intro';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';

export default {
  name: 'app',
  layout: 'default',
  components: {
    Intro,
    About,
    Resume,
    Portfolio,
    Services,
  },

  async mounted() {
    let request = await this.$axios.get('/posts/1/12');
    window.console.log(request)
  }

}
</script>
