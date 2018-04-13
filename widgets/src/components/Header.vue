<i18n>
{

}
</i18n>

<template>
  <header class="header">
    <img class="logo" src="../assets/images/logo.png">
    <Profile></Profile>
  </header>
</template>

<script>
import Profile from '../widgets/Profile.vue'

export default {
  components: {Profile},
}
</script>

<style lang="scss">

.header {
    background-color: #fff;
}

.logo {
    width: 200px;
}

</style>
