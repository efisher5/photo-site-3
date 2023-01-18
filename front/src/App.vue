<template>
  <body>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </body>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  setup() {

  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import 'styles.scss';
</style>
