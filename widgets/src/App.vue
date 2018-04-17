<i18n>
{
  "en": {
    "Welcome to Widgets Test": "Welcome to Widgets Test",
    "language": "language"
  },
  "es": {
    "Welcome to Widgets Test": "Bienvenido a la Prueba de Widgets",
    "language": "Lenguaje"
  }
}
</i18n>

<template>
  <main>
    <Header></Header>

    <div class="widgets__bar">
      <Info-bar v-bind:language="locale"></Info-bar>
    </div>


    <section class="intro">
      <h1>{{ $t('Welcome to Widgets Test') }}</h1>
      <span>
        <label for="locale">{{ $t('language')}}</label>
        <select v-model="locale">
          <option>en</option>
          <option>es</option>
        </select>
      </span>
    </section>

    <div class="widgets__container">
      <Profile></Profile>
      <Stats v-bind:language="locale"></Stats>
      <Email v-bind:language="locale"></Email>
    </div>
    <Footer v-bind:language="locale"></Footer>
  </main>
</template>

<script>
import Vue from 'vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


import Profile from './widgets/Profile.vue'
import InfoBar from './widgets/InfoBar.vue';
import Email from './widgets/Email.vue'
import Stats from './widgets/Stats.vue';

export default {
  name: 'app',
  components: {Header, Footer, InfoBar, Email, Stats, Profile},
  data () { return { locale: 'en' } },
  watch: {
    locale (val) {
      this.$i18n.locale = val;
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans|Raleway');

$body-font : 'Open Sans', sans-serif;

body {
  background-color: #F6F0EC;
  font-family: $body-font;
  margin: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.intro{
    padding: 20px;
}

@font-face {
  font-family: 'icon';
  src:  url('./assets/fonts/icon.eot?w69hhs');
  src:  url('./assets/fonts/icon.eot?w69hhs#iefix') format('embedded-opentype'),
    url('./assets/fonts/icon.ttf?w69hhs') format('truetype'),
    url('./assets/fonts/icon.woff?w69hhs') format('woff'),
    url('./assets/fonts/icon.svg?w69hhs#icon') format('svg');
  font-weight: normal;
  font-style: normal;
}

.icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-like:before {
  content: "\e900";
}
.icon-preview:before {
  content: "\e901";
}
.icon-location:before {
  content: "\e902";
}
.icon-check:before {
  content: "\e903";
}
.icon-time:before {
  content: "\e904";
}
.icon-share:before {
  content: "\e905";
}
.icon-cloud:before {
  content: "\e906";
}
.icon-comment:before {
  content: "\e907";
}
.icon-user:before {
  content: "\e971";
}
.icon-gear:before {
  content: "\e994";
}
.icon-plus:before {
  content: "\ea0a";
}
.icon-play:before {
  content: "\ea15";
}

.widgets__container {
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.widgets__bar {
    display: flex;
    justify-content: center;
}

</style>
