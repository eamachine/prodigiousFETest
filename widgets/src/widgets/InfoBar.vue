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
  <nav class="navigation">
    <div class="item"><a class="icon icon-location">{{ $t('Check in', language) }}</a></div>
    <div class="item"><a class="icon icon-like">{{ $t('Events', language) }}</a></div>
    <div class="item"><a class="icon icon-user">{{ $t('Account', language) }}</a></div>
    <div class="item"><a class="icon icon-gear">{{ $t('Settings', language) }}</a></div>
  </nav>
</template>

<script>
export default {
  props : ['language']
}
</script>

<style lang="scss">

$title-font : 'Raleway', sans-serif;

.navigation {
  background-color: #fff;
  border-radius: 5px;
  display: inline-flex;
  flex-wrap: wrap;
  font-family: $title-font;
  margin: 5px;
  width: calc(100% - 10px);

  .item {
    border-bottom: 1px solid #F8F3F0;
    cursor: pointer;
    line-height: 70px;
    height: 65px;
    min-width: 158px;
    padding: 0 10px;
    text-align: center;
    width: 100%;

    .icon {
      color: #8E8071;
      font-size: 18px;
      text-transform: uppercase;

      &:before {
        margin-right: 10px;
      }
    }

    &:last-child {
      border: none;
    }

    &:hover {
      background-color: #F8F3F0;
      border-bottom: 3px solid #4DAF7B;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    border-bottom: none;
    border-right: 1px solid #F8F3F0;
    width: auto;
    .item {
      width: auto;
    }
  }
}
</style>
