<i18n>
{

}
</i18n>

<template>
  <footer class="footer">
    <Email v-bind:language="language"></Email>
  </footer>
</template>

<script>
import Email from '../widgets/Email.vue'

export default {
  components: {Email},
  props : ['language']
}
</script>

<style lang="scss">
.footer {
  position: absolute;
  background-color: #fff;
  height: 60px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
  }
}
</style>
