<template>
  <div class="app-container-1" :class="classObj">
    <div class="right-sidebar">
      <div class="right-sidebar-container">
        <div class="rightbar-titlecontainer">
          <div v-if="!alertbar.opened" class="alert-toggle">
            <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
          </div>
          <div class="rightbar-title">{{ $t('i18nView.actions') }}</div>
        </div>
        <div class="container-action">
          <slot name="right-pannel" />
        </div>
      </div>
    </div>
    <div class="left-sidebar">
      <div class="leftbar-header">
        <div class="leftbar-header_title">
          <slot name="leftpannel_title">id|name</slot>
        </div>
        <div v-if="alertbar.opened" class="alertToggle">
          <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
        </div>
      </div>
      <div class="leftbar-content">
        <slot name="left-pannel">left pannel</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AlertHamburger from '@/components/Hamburger/alertHamburger'
import local from '../local'
const viewName = 'i18nView'

export default {
  name: 'AlertdetailTitle',
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
.app-container-1{
    padding: 2px;
    border: 1px solid #A5C2E6;
    // min-height: calc(100vh - 84px);
    }
  .hideAlertbar .right-sidebar{
      width: 20%;
      height: 100%;
      float: right;
      overflow: hidden;
      top: 0px;
      bottom: 0px;
    }
  .hideAlertbar .left-sidebar {
    width: 80%;
    }
  .openAlertbar .right-sidebar{ display: none !important}
  .openAlertbar .left-sidebar{
      width: 100% !important;
      }

    .alertToggle{
      font-size: 20px;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
      display: inline;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  .leftbar-header{
    background-color: #A5C2E6;
    height: 35px;
    border: 1px solid #4472c4;
    line-height: 35px;
    padding-left: 20px;
  }
  .left-right-title{
      display: inline-block;
  }
  .leftbar-header_title{
      display: inline-block;
  }
    .alertToggle{
      display: inline-block;
      float: right;
      padding-right: -20px;
    }
.right-sidebar-container{
   background-color: #A5C2E6;
   min-height: calc(100vh - 84px);
}
.rightbar-titlecontainer{
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
  .container-box{
  font-size: 14px;
  width: 100%;
  height: 2rem;
  cursor: pointer;
  background-color: #c5e0b4;
  border: 0.1px solid rgb(87, 79, 79);
}
.rightbar-title{
  font-weight: bold;
  font-size: 15px;
  display: inline-block;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
}
.leftbar-content{
    padding: 2px;
}
</style>
