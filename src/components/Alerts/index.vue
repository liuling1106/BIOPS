<template>
  <div>
    <span> {{ $t('navbar.alerts') }}</span><el-badge class="mark" :value="alertsCount" />
  </div>
</template>
<script>
export default {
  name: 'Alert',
  computed: {
    alertsCount: {
      get() {
        return this.$store.state.app.alertsCount
      },
      set(val) {}
    }
  },
  created() {
    this.$root.Bus.$on('send', (val) => {
      this.alertsCount = val
      this.$store.dispatch('app/setAlertCount', val)
    })
  }
}

</script>
