<i18n>
  {
    "en": {
      "Diagram Stats": "Diagram Stats",
      "Month Report": "Month Report",
      "Data Transfer": "Data Transfer",
      "Audio": "Audio",
      "Video": "Video",
      "Photo": "Photo",
      "Upload Files": "Upload Files",
      "Share link": "Share link",
      "Back up": "Back up"
    },
    "es": {
      "Diagram Stats": "Diagram Stats",
      "Month Report": "Month Report",
      "Data Transfer": "Data Transfer",
      "Audio": "Audio",
      "Video": "Video",
      "Photo": "Fotos",
      "Upload Files": "Subir archivos",
      "Share link": "Share link",
      "Back up": "Back up"
    }
  }
</i18n>

<template>
  <section class="stats">
  <tabs>
    <tab class="stats__tab" v-bind:name="$t('Diagram Stats', language)">
      <p class="chart__title">{{ $t('Data Transfer', language).toUpperCase() }}</p>
      <div class="chart__container">
        <chartjs-doughnut v-bind:option="option" :scalesdisplay="false" :width="300" :height="300" :labels="[$t('Audio', language),$t('Video', language),$t('Photo', language)]" :data="[audio.total,video.total,photo.total]"
        :backgroundcolor="['#4DAF7B','#D2471E','#EBC85E']" :hoverbackgroundcolor="['#4DAF7B','#D2471E','#EBC85E']"></chartjs-doughnut>
        <div class="chart__tooltip">
          <b class="chart__files" :class="currentstyle">{{ current.files }} files</b>
          <b class="chart__weight">{{ current.weight }} GB</b>
        </div>
      </div>
      <div class="chart__legend">
        <div class="chart__legend__tag audio" v-on:click="showTooltip('audio')">{{ $t('Audio', language) }}<b class="chart__legend__text">{{audio.total}}%</b></div>
        <div class="chart__legend__tag video" v-on:click="showTooltip('video')">{{ $t('Video', language) }} <b class="chart__legend__text">{{video.total}}%</b></div>
        <div class="chart__legend__tag photo" v-on:click="showTooltip('photo')">{{ $t('Photo', language) }} <b class="chart__legend__text">{{photo.total}}%</b></div>
      </div>
      <div class="share-bar">
        <span class="share-bar__item"><i class="icon icon-cloud"></i>{{ $t('Upload Files', language) }}</span>
        <span class="share-bar__item"><i class="icon icon-share"></i>{{ $t('Share link', language) }}</span>
        <span class="share-bar__item"><i class="icon icon-time"></i>{{ $t('Back up', language) }}</span>
      </div>
    </tab>
    <tab class="stats__tab" v-bind:name="$t('Month Report', language)">
      <p class="chart__title">{{ $t('Data Transfer', language).toUpperCase() }}</p>
      <div class="chart__container">
        <chartjs-doughnut v-bind:option="option" :scalesdisplay="false" :width="300" :height="300" :labels="[$t('Audio', language),$t('Video', language),$t('Photo', language)]" :data="[audioM.total,videoM.total,photoM.total]"
        :backgroundcolor="['#4DAF7B','#D2471E','#EBC85E']" :hoverbackgroundcolor="['#4DAF7B','#D2471E','#EBC85E']"></chartjs-doughnut>
        <div class="chart__tooltip">
          <b class="chart__files" :class="currentstyleM">{{ currentM.files }} files</b>
          <b class="chart__weight">{{ currentM.weight }} GB</b>
        </div>
      </div>
      <div class="chart__legend">
        <div class="chart__legend__tag audio" v-on:click="showTooltipM('audio')">{{ $t('Audio', language) }}<b class="chart__legend__text">{{audioM.total}}%</b></div>
        <div class="chart__legend__tag video" v-on:click="showTooltipM('video')">{{ $t('Video', language) }} <b class="chart__legend__text">{{videoM.total}}%</b></div>
        <div class="chart__legend__tag photo" v-on:click="showTooltipM('photo')">{{ $t('Photo', language) }} <b class="chart__legend__text">{{photoM.total}}%</b></div>
      </div>
      <div class="share-bar">
        <a class="share-bar__item"><i class="icon icon-cloud"></i>{{ $t('Upload Files', language) }}</a>
        <a class="share-bar__item"><i class="icon icon-share"></i>{{ $t('Share link', language) }}</a>
        <a class="share-bar__item"><i class="icon icon-time"></i>{{ $t('Back up', language) }}</a>
      </div>
    </tab>
  </tabs>
</section>
</template>

<script>
import json from '../data/stats.json';

export default {
  data () { return {
    option:{
              legend: {
                  display: false,
              }
          },
    audio : {
              total: 0,
              files: 0,
              weight: 0
            },
    video : {
              total: 0,
              files: 0,
              weight: 0
            },
    photo : {
              total: 0,
              files: 0,
              weight: 0
            },
    current : {
              total: 0,
              files: 0,
              weight: 0
            },
    audioM : {
              total: 0,
              files: 0,
              weight: 0
            },
    videoM : {
              total: 0,
              files: 0,
              weight: 0
            },
    photoM : {
              total: 0,
              files: 0,
              weight: 0
            },
    currentM : {
              total: 0,
              files: 0,
              weight: 0
            },
    currentstyle : 'audiocolor',
    currentstyleM : 'audiocolor'
    }
  },
  props : ['language'],
  created() {
    this.audio = json[0].audio;
    this.video = json[0].video;
    this.photo = json[0].photo;

    this.current = this.audio;

    this.audioM = json[1].audio;
    this.videoM = json[1].video;
    this.photoM = json[1].photo;

    this.currentM = this.audioM;
  },
  methods: {
      showTooltip: function (current) {
        if(current === 'audio') {
          this.currentstyle = 'audiocolor';
          this.current = this.audio;
        }

        if(current === 'video') {
          this.currentstyle = 'videocolor';
          this.current = this.video;
        }

        if(current === 'photo') {
          this.currentstyle = 'photocolor';
          this.current = this.photo;
        }
    },
    showTooltipM: function (current) {
      if(current === 'audio') {
        this.currentstyleM = 'audiocolor';
        this.currentM = this.audioM;
      }

      if(current === 'video') {
        this.currentstyleM = 'videocolor';
        this.currentM = this.videoM;
      }

      if(current === 'photo') {
        this.currentstyleM = 'photocolor';
        this.currentM = this.photoM;
      }
  }
  },
}
</script>

<style lang="scss">

.stats {
  max-width: 370px;
  width: 100%;

  .tabs-component {
    margin: 2em 0;
  }

  .tabs-component-tabs {
    border-radius: 6px;
    margin-bottom: 5px;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }

  .tabs-component-tab {
    color: #fff;
    background-color: trasparent;
    border: 1px solid #fff;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    font-weight: 600;
    list-style: none;
    margin: 0 2px 0 0;
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    background-color: #fff;
    color: #000;
    z-index: 2;
    transform: translateY(0);
  }

  .tabs-component-tab:hover {
    color: #666;
  }

  .tabs-component-tab.is-disabled * {
    color: #cdcdcd;
    cursor: not-allowed !important;
  }

  .tabs-component-tab-a {
    align-items: center;
    color: inherit;
    display: flex;
    padding: .75em 1em;
    text-decoration: none;
  }

  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 20px 0 0 0;
  }

  .chart {
    &__container{
      padding: 0 20px;
      position: relative;
    }

    &__tooltip {
      position: absolute;
      top: 35%;
      right: 40%;
    }

    &__files {
      display: block;
      margin-top: 20px;
    }

    &__weight{
      color: #776B5E;
      font-size: 28px;
      word-spacing: -5px;
    }

    &__title {
        text-align: center;
    }

    &__legend {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      width: 100%;

      &__text {
        display: block;
        font-size: 28px;
      }

      &__tag {
        background-color: #F4EDE7;
        color: #A09B96;
        cursor: pointer;
        height: 70px;
        padding: 10px 5px 0 5px;
        text-align: center;
        line-height: 1.2;
        width: 30%;
      }
    }
  }


  .audio {
    border-top: 5px solid #4DAF7B;
  }

  .video {
    border-top: 5px solid #D2471E;
  }

  .photo {
    border-top: 5px solid #EBC85E;
  }

  .audiocolor {
    color: #4DAF7B;
  }

  .videocolor {
    color: #D2471E;
  }

  .photocolor {
    color: #EBC85E;
  }

  .share-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &__item {
      background-color: #776B5E;
      color: #FFF;
      cursor: pointer;
      height: 50px;
      padding: 20px 5px;
      text-align: center;
      width: 33%;

      .icon {
        display: block;
        font-size: 20px;
        margin-bottom: 5px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
      margin: 0;
      width: 370px;

      .tabs-component {
        margin: 0;
      }
  }
}



</style>
