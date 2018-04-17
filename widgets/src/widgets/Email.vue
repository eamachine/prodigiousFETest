<i18n>
  {
    "en": {
      "Contacts": "Contacts",
      "Subject": "Subject",
      "You can add a subject": "You can add a subject",
      "Message": "Message",
      "Leave your message here": "Leave your message here",
      "Save a copy": "Save a copy",
      "Send Mail": "Send Mail"
    },
    "es": {
      "Contacts": "Contactos",
      "Subject": "Asunto",
      "You can add a subject": "Puedes agregar un asunto",
      "Message": "Mensaje",
      "Leave your message here": "Deje su mensaje aquí",
      "Save a copy": "Guardar una copia",
      "Send Mail": "Envíar correo"
    }
  }
</i18n>

<template>
  <section class="email">

    <div class="email__form">
      <label class="email__label" for="addcontact">{{ $t('Contacts', language) }}</label>
      <div class="email__emails">
        <span v-for="contact in contacts" class="email__email" v-on:click="remove()"> {{ contact }} </span>
        <button class="icon icon-plus" id="addcontact" v-on:click="addContact()"></button>
      </div>
      <label class="email__label" for="subject">{{ $t('Subject', language) }}</label>
      <input class="email__input" id="subject" v-bind:placeholder="$t('You can add a subject', language)"></input>

      <label class="email__label" for="message">{{ $t('Message', language) }}</label>
      <input class="email__input"  type="text" id="message" v-bind:placeholder="$t('Leave your message here', language)"></input>
    </div>
    <div class="email__bar">
      <span class="email__checkbox">
        <input  type="checkbox" id="checkbox"></input>
        <label for="checkbox"></label><span class="email__checkbox__label"> {{ $t('Save a copy', language) }}</span>
      </span>
      <button class="icon icon-play" id="send"> {{ $t('Send Mail', language) }}</button>
    </div>
  </section>
</template>

<script>
import json from '../data/email.json';

export default {
  data () { return {
      contacts : [],
    }
  },
  props : ['language'],
  methods: {
      addContact: function () {
        this.contacts.push(json[0]);
      },
      remove: function(item) {
        const index = this.contacts.indexOf(item);
        this.contacts.splice(index, 1);
      }
  },
  mounted() {
    for ( var i in json) {
      this.contacts.push(json[i]);
    }
  },
}
</script>

<style lang="scss">

input[type=checkbox] {
    visibility: hidden;
}

.email {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    width: 100%;

    &__form {
      padding: 32px;
    }

    &__label {
      display: block;
      font-size: 16px;
      margin-bottom: 15px;
    }

    &__emails {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    &__email {
      color: #fff;
      cursor: pointer;
      background-color: #5E90AF;
      border-radius: 5px;
      font-size: 14px;
      padding: 10px 14px;
      margin: 0 5px 5px 0;

      &:nth-child(even) {
        background-color: #4DAF7B;
      }
    }

    &__input {
      border: none;
      height: 40px;
      width: 100%;
      padding: 0 10px;
      margin-bottom: 20px;
    }

    .icon-plus {
      background-color: #EDE3DD;
      border: none;
      border-radius: 2px;
      color: #fff;
      cursor: pointer;
      height: 36px;
      width: 36px;
    }

    &__bar {
      align-items: center;
      background-color: #EDE3DD;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 96px;
      padding: 0 20px;
    }

    .icon-play {
      color: #fff;
      cursor: pointer;
      background-color: #E86741;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      height: 46px;
      padding: 10px 14px;
      width: 140px;
    }

    &__checkbox {
      position: relative;

      &__label {
          font-size: 16px;
          margin-left: 10px;
      }

      label {
        cursor: pointer;
        position: absolute;
        width: 25px;
        height: 25px;
        top: 0;
        left: 0;
        background: #fff;
        border:1px solid #ddd;

        &::after {
          opacity: 0;
          content: '';
          position: absolute;
          width: 9px;
          height: 5px;
          background: transparent;
          top: 6px;
          left: 7px;
          border: 3px solid #4DAF7B;
          border-top: none;
          border-right: none;

          transform: rotate(-45deg);
        }

        &:hover::after {
          opacity: 0.5;
        }
      }

      input[type=checkbox]:checked + label:after {
        opacity: 1;
      }

    }

    @media only screen and (min-width: 768px) {
      max-width: 370px;
    }
}

</style>
