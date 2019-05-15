<template>
  <div id="app">
    <RouterView/>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style>

</style>
