<i18n>
  {
    "en": {
      "Check in": "Check in",
      "Events": "Events",
      "Account": "Account",
      "Settings": "Settings"
    },
    "es": {
      "Check in": "Chequearse",
      "Events": "Eventos",
      "Account": "Cuenta",
      "Settings": "Configuracion"
    }
  }
</i18n>

<template>
  <nav>
    {{ $t('Check in', language) }}
    {{ $t('Events', language) }}
    {{ $t('Account', language) }}
    {{ $t('Settings', language) }}
  </nav>
</template>

<script>
export default {
  props : ['language']
}
</script>

<style lang="scss">

</style>
