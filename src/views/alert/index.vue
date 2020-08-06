<template>
  <div class="alert-container">
    <div class="alert-title">{{ $t('i18nView.myAlert') }}</div>
    <div class="alert-count">{{ MyAlert }}</div>
  </div>

</template>

<script>
import local from './local'
const viewName = 'i18nView'

export default {
  name: 'AlertName',
  data() {
    return {
      MyAlert: 50
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-container{
    margin: 30px;
    display: block;
    cursor: pointer;
    color: black;
    border: 1px solid black;
    height: 100px;
    width: 100px;

    .alert-title{
  display: block;
  text-align: center;
}
.alert-count{
   display: block;
   text-align: center;
   margin: 20px;;
}

}

</style>
