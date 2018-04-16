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
  <div class="stats">
  <tabs>
    <tab class="stats__tab" v-bind:name="$t('Diagram Stats', language)">
      <p class="chart__title">{{ $t('Data Transfer', language).toUpperCase() }}</p>
      <div class="chart__container">
        <chartjs-doughnut v-bind:option="option" :scalesdisplay="false" :width="300" :height="300" :labels="[$t('Audio', language),$t('Video', language),$t('Photo', language)]" :data="[55,23,17]"
        :backgroundcolor="['#4DAF7B','#D2471E','#EBC85E']" :hoverbackgroundcolor="['#4DAF7B','#D2471E','#EBC85E']"></chartjs-doughnut>
      </div>
      <div class="chart__legend">
        <span class="chart__legend__tag audio">{{ $t('Audio', language) }} <b class="chart__legend__text">55%</b></span>
        <span class="chart__legend__tag video">{{ $t('Video', language) }} <p>23%</P></span>
        <span class="chart__legend__tag photo">{{ $t('Photo', language) }} <p>17%</P></span>
      </div>
      <div class="share-bar">
        <span class="share-bar__item"><i class="icon icon-cloud"></i>{{ $t('Upload Files', language) }}</span>
        <span class="share-bar__item"><i class="icon icon-share"></i>{{ $t('Share link', language) }}</span>
        <span class="share-bar__item"><i class="icon icon-time"></i>{{ $t('Back up', language) }}</span>
      </div>
    </tab>
    <tab class="stats__tab" v-bind:name="$t('Month Report', language)">
      <h5 class="chart__title">{{ $t('Data Transfer', language) }}</h5>
      <div class="chart__container">
        <chartjs-doughnut v-bind:option="option" :scalesdisplay="false" :width="300" :height="300" :labels="['happy','myhappy','hello']" :data="[100,40,60]"></chartjs-doughnut>
      </div>
      <div>
        <span>{{ $t('Audio', language) }}</span>
        <span>{{ $t('Video', language) }}</span>
        <span>{{ $t('Photo', language) }}</span>
      </div>
      <div>
        <span class="icon icon-cloud">{{ $t('Upload Files', language) }}</span>
        <span class="icon icon-share">{{ $t('Share link', language) }}</span>
        <span class="icon icon-time">{{ $t('Back up', language) }}</span>
      </div>
    </tab>
  </tabs>

  </div>

</template>

<script>
export default {
  data () { return {
    option:{
              legend: {
                  display: false,
              }
          },
    }
  },
  props : ['language'],
}
</script>

<style lang="scss">

.stats {

  .tabs-component {
    margin: 2em 0;
  }

  .tabs-component-tabs {
    border: 0;
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
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    font-weight: 600;
    list-style: none;
    margin: 0;
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
    padding: 20px;
  }

  .chart {
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
      }

      &__tag {
        background-color: #F4EDE7;
        color: #A09B96;
        height: 70px;
        padding: 5px;
        text-align: center;
        line-height: 4;
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

  .share-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &__item {
      background-color: #776B5E;
      color: #FFF;
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
      max-width: 370px;
  }
}



</style>
