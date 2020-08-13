<template>
  <div class="alertbar-container">
    <div class="container-title">
      <div v-if="!alertbar.opened" class="alert-toggle">
        <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
      </div>
      <div class="alertbar-title">{{ $t('i18nView.actions') }}</div>
    </div>
    <div class="container-action">
      <div class="container-box" :class="{'not-click':notClick}">
        <div class="btn-icon"><svg-icon icon-class="link" /></div>
        <div class="btn-action" @click="handleAssginToMe">{{ $t('i18nView.assginToMe') }}</div>
      </div>
      <div class="container-box" :class="{'not-click':notClick}">
        <div class="btn-icon"><i class="el-icon-platform-eleme" /></div>
        <!-- <div class="btn-action"><router-link :to=" + alertId+ '/IVRMessaging'">{{ $t('i18nView.ivrMessage') }}|{{ alertId }}</router-link></div> -->
        <div class="btn-action"><router-link :to="{path: '/alert/detail/'+alertId+'/IVRMessaging'}">{{ $t('i18nView.ivrMessage') }}</router-link></div>
      </div>
      <div class="container-box">
        <div class="btn-icon"><i class="el-icon-video-camera-solid" /></div>
        <div class="btn-action" @click="handleResolve()">{{ resolveText }}</div>
      </div>
    </div>
    <div class="container-view">
      <div class="view-title">{{ $t('i18nView.view') }}</div>
      <div class="container-box">
        <div class="btn-view">{{ $t('i18nView.log') }}</div>
      </div>
      <div class="container-box">
        <div class="btn-view">{{ $t('i18nView.site1') }}</div>
      </div>
      <div class="container-box">
        <div class="btn-view">{{ $t('i18nView.site2') }}</div>
      </div>
    </div>
    <!-- <el-dialog :visible.sync="dialogFormVisible" title="发送给我">
      <el-form>
        <el-form-item>
          <el-button type="primary" @click="submitTome('xiaojing')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AlertHamburger from '@/components/Hamburger/alertHamburger'
import local from '../local'
const viewName = 'i18nView'

export default {
  name: 'AlertSideBar',
  components: {
    AlertHamburger
  },
  notClick: {
    type: Boolean,
    default: false
  },
  props: {
    alertStatus: {
      type: String,
      required: true
    },
    alertId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      notClick: false
    }
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
    },
    resolveText: {
      get() {
        console.log('...' + this.alertStatus)
        // return 'Level' + this.alertStatus
        if (this.alertStatus === 'Resolved') {
          return this.$t('i18nView.reactivate')
        } else {
          return this.$t('i18nView.resolve')
        }
      },
      set(val) {
        this.alertStatus = val
      }
    }
  },
  created() {
    console.log('alertId...' + this.alertId)
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
    if (this.alertStatus === 'Resolved') {
      this.notClick = true
    } else {
      this.notClick = false
    }
    // console.log('...' + this.alertStatus)
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleAlertBar')
    },
    handleAssginToMe() {
      this.$emit('changeName')
      // if (this.$emit('changeName')) {
      //   setTimeout(() => {
      //     // TODO how to add router in notification
      //     this.showNotification()
      //   }, 800)
      // }
    },
    handleResolve() {
      if (this.alertStatus === 'Resolved') {
        if (this.$emit('btnResolve', 'Active')) {
          this.notClick = false
        // console.log(this.alertStatus + '.dianji anniu wanbi')
        }
      } else {
        if (this.$emit('btnResolve', 'Resolved')) {
          this.notClick = true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
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
