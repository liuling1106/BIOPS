<template>
  <div>
    <span> {{ $t('navbar.alerts') }}</span><el-badge class="mark" :value="AlertCount" />
  </div>
</template>

<script>

export default {
  name: 'Alert',
  data() {
    return {
      AlertCount: 6
    }
  }
}

</script>
