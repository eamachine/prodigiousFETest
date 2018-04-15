<i18n>
{

}
</i18n>

<template>
  <section class="profile">
    <img class="profile__background" v-bind:src="getImage(background)" />
    <img  class="profile__image" v-bind:src="getImage(background)" />
    <div class="profile__textbox">
      <p class="profile__name">{{ name }}</p>
      <p class="profile__message">{{ message }}</p>
    </div>
    <div class="profile__bar">
      <span class="icon icon-preview"> {{ views }}</span>
      <span class="icon icon-comment"> {{ comments }}</span>
      <span class="icon icon-like"> {{ likes }}</span>
    </div>
  </section>
</template>

<script>
import json from '../data/profile.json';

export default {
  data () { return {
    background : 'background.png',
    img : 'background.png',
    name : '',
    message : '',
    views : 0,
    comments : 0,
    likes : 0,
    }
  },
  mounted() {
    this.background = json.background;
    this.img = json.img;
    this.name = json.name;
    this.message = json.message;
    this.views = json.views;
    this.comments = json.comments;
    this.likes = json.likes;
  },
  methods: {
      getImage: function (img) {
        var images = require.context('../assets/images/', false, /\.png$/)
        return images('./' + img )
    }
  },
}
</script>
<style lang="scss">
 .profile {
   background-color: #fff;
   border-radius: 5px;
   display: flex;
   flex-wrap: wrap;
   width: 100%;

   &__background {
     width: 100%;
     margin-bottom: 30px;
   }

   &__textbox {
     margin-right: 20px;
     min-width: 150px;
     width: 55%;
   }

   &__name {
      font-size: 28px;
      margin: 0;
   }

   &__message {
     color: #333;
      font-size: 12px;
   }

   &__image {
     border-radius: 50%;
     height: 80px;
     margin: 0 20px;
     opacity: 0.4;
     width: 80px;
   }

   &__bar {
     display: flex;
     flex-wrap: nowrap;
     justify-content: space-between;
     margin-top: 20px;
     width: 100%;

     .icon {
       color: #8E8071;
       background-color: #F6F0CE;
       height: 58px;
       line-height: 3.5em;
       text-align: center;
       width: 33%;
     }
   }

   @media only screen and (min-width: 768px) {
     max-width: 370px;
     position: absolute;
     right: 0;

     &__textbox {
        margin: 0;
        min-width: 200px;
        width: 60%;
     }
   }

 }
</style>
