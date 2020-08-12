<template>
  <main-title>
    <h3 slot="detail-info">have a test slot</h3>
  </main-title>
</template>

<script>
import MainTitle from './components/mainTitle'
export default {
  name: 'DetailIVR',
  components: {
    MainTitle
  }
}
</script>
