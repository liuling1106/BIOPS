<template>
  <div class="app-container-1" :class="classObj">
    <div class="alert-sidebar">
      <right-pannel>
        <slot />
      </right-pannel>
    </div>
    <div class="alert-content">
      <div class="detail-header">Level1 | alertID
        <div v-if="alertbar.opened" class="alertToggle">
          <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
        </div>
      </div>
      <div class="detail-attribute"><slot name="detail-info" /></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AlertHamburger from '@/components/Hamburger/alertHamburger'
import RightPannel from './rightPannel'
import local from '../local'
const viewName = 'i18nView'

export default {
  name: 'AlertdetailTitle',
  components: {
    AlertHamburger,
    RightPannel
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
.app-container-1{
    padding: 2px;
    border: 1px solid #A5C2E6;
    min-height: calc(100vh - 84px);
    }
  .hideAlertbar .alert-sidebar{
      width: 20%;
      height: 100%;
      float: right;
      overflow: hidden;
      top: 0px;
      bottom: 0px;
    }
  .hideAlertbar .alert-content{ width: 80%; overflow-y:auto;}
  .openAlertbar .alert-sidebar{ display: none !important}
  .openAlertbar .alert-content{width: 100% !important;}

    .alertToggle{
      font-size: 20px;
      height: 35px;
      width: 35px;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
      padding-right: -20px;
      display: inline-block;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  .detail-header{
    background-color: #A5C2E6;
    height: 35px;
    border: 1px solid #4472c4;
    line-height: 35px;
    padding-left: 20px;
  }
    .alertToggle{
      padding-right: -20px;
      display: inline-block;
      float: right;
    }
    .hamburger-container {
        line-height: 35px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background .3s;
        -webkit-tap-highlight-color:transparent;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
</style>
