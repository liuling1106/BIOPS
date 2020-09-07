<template>
  <div>
    <span> {{ $t('navbar.alerts') }}</span><el-badge class="mark" :value="alertCount" />
  </div>
</template>
<script>
// import { getAlertCounts } from '@/views/alert/index'
import { mapState } from 'vuex'
export default {
  name: 'Alert',
  // data: {
  //   alertCount: mapState.alertsCount
  // }

  computed: {
    ...mapState({
      alertCount: state => state.app.alertsCount
    })
  }
}

</script>
