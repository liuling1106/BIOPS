<template>
  <div class="alertbar-container">
    <div class="container-title">
      <div v-if="!alertbar.opened" class="alert-toggle">
        <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
      </div>
      <div class="alertbar-title">{{ $t('i18nView.actions') }}</div>
    </div>
    <div>
      <slot>默认值</slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AlertHamburger from '@/components/Hamburger/alertHamburger'
import local from '../local'
const viewName = 'i18nView'

export default {
  name: 'RightPannel',
  components: {
    AlertHamburger
  },
  computed: {
    ...mapState({
      alertbar: state => state.app.alertbar
    }),
    classObj() {
      return {
        hideAlertbar: !this.alertbar.opened,
        openAlertbar: this.alertbar.opened
      }
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleAlertBar')
    }
  }
}
</script>
<style lang="scss">
.alertbar-container{
   background-color: #A5C2E6;
   min-height: calc(100vh - 84px);
}
.container-title{
  background-color: #A5C2E6;
  height: 35px;
  border: 1px solid #4472c4;
  line-height: 35px;
}
.alert-toggle{
  font-size: 20px;
  display: inline-block;
  padding-left: 5px;
  height: 35px;
  width: 35px;
  cursor: pointer;
  transition: background .3s;
  -webkit-tap-highlight-color:transparent;

  &:hover {
    background: rgba(32, 119, 61, 0.025)
  }
}
.alertbar-title{
  font-weight: bold;
  font-size: 15px;
  display: inline-block;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
}
.container-box{
  font-size: 14px;
  width: 100%;
  height: 2rem;
  cursor: pointer;
  background-color: #c5e0b4;
  border: 0.1px solid rgb(87, 79, 79);
}
.btn-action{
  display: inline-block;
  padding-left: 20%;
  padding-right: 20%;
  line-height: 2rem;
}
.btn-icon{
  display: inline-block;
  padding-left: 7%;
  padding-top:2%;
}
.container-view{
  margin-top:5rem;
}
.view-title{
  font-weight: bold;
  font-size: 15px;
  height: 35px;
  line-height: 35px;
  padding-left: 40%;
  padding-right: 20%;
  border-top: 1px solid #4472c4;
  border-bottom: 1px solid #4472c4;
}
.btn-view{
  padding-left: 10%;
  line-height: 2rem;
}
.not-click{
  pointer-events: none;
  background-color: #dbdbdb;
}
</style>
