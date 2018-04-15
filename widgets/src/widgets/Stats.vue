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
    <div>
      {{ $t('Diagram Stats', language) }}
      <h5>{{ $t('Data Transfer', language) }}</h5>

      <div>
        <span>{{ $t('Audio', language) }}</span>
        <span>{{ $t('Video', language) }}</span>
        <span>{{ $t('Photo', language) }}</span>
      </div>
      <div>
        <span>{{ $t('Upload Files', language) }}</span>
        <span>{{ $t('Share link', language) }}</span>
        <span>{{ $t('Back up', language) }}</span>
      </div>
    </div>
    <div>
      {{ $t('Month Report', language) }}
      <h5>{{ $t('Data Transfer', language) }}</h5>

      <div>
        <span>{{ $t('Audio', language) }}</span>
        <span>{{ $t('Video', language) }}</span>
        <span>{{ $t('Photo', language) }}</span>
      </div>
      <div>
        <span>{{ $t('Upload Files', language) }}</span>
        <span>{{ $t('Share link', language) }}</span>
        <span>{{ $t('Back up', language) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['language']
}
</script>

<style lang="scss">

</style>
