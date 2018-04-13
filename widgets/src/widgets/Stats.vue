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
  <div>
    {{ $t('Audio', language) }}
    {{ $t('Video', language) }}
    {{ $t('Photo', language) }}
    {{ $t('Upload Files', language) }}
  </div>
</template>

<script>
export default {
  props : ['language']
}
</script>

<style lang="scss">

</style>
