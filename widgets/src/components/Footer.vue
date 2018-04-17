<i18n>
{

}
</i18n>

<template>
  <footer class="footer">
  </footer>
</template>

<script>


export default {
  props : ['language']
}
</script>

<style lang="scss">
.footer {
  background-color: #fff;
  height: 60px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    bottom: 0;
  }
}
</style>
