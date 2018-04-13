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
  background-color: #fff;
  width: 100%;
}
</style>
