<template>
  <div class="app-container-1" :class="classObj">
    <div class="alert-sidebar">
      <right-pannel>
        <div class="container-action">
          <div class="container-box" :class="{'not-click':notClick}">
            <div class="btn-icon"><svg-icon icon-class="link" /></div>
            <div class="btn-action" @click="handleAssginToMe">{{ $t('i18nView.assginToMe') }}</div>
          </div>
          <div class="container-box" :class="{'not-click':notClick}">
            <div class="btn-icon"><i class="el-icon-platform-eleme" /></div>
            <!-- <div class="btn-action"><router-link :to=" + alertId+ '/IVRMessaging'">{{ $t('i18nView.ivrMessage') }}|{{ alertId }}</router-link></div> -->
            <router-link :to="{path: '/alert/detail/'+dataValue.alertId+'/IVRMessaging'}"><div class="btn-action">{{ $t('i18nView.ivrMessage') }}</div></router-link>
          </div>
          <div class="container-box">
            <div class="btn-icon"><i class="el-icon-video-camera-solid" /></div>
            <div class="btn-action" @click="handleResolve()">{{ resolveText }}</div>
          </div>
        </div>
        <div class="container-view">
          <div class="view-title">{{ $t('i18nView.view') }}</div>
          <div class="container-box">
            <router-link :to="{path: '/alert/detail/'+dataValue.alertId+'/Log'}"><div class="btn-view">{{ $t('i18nView.log') }}</div></router-link>
          </div>
          <div v-for="(item, index) in dataValue.sites" :key="index" class="container-box">
            <router-link :to="{path: '/alert/detail/'+dataValue.alertId+'/' + item.siteName}"><div class="btn-view">{{ item.siteName }}</div></router-link>
          </div>
        </div>
      </right-pannel>
    </div>
    <div class="alert-content">
      <div class="detail-header">{{ titleLevel }} | {{ dataValue.alertId }} |
        <span class="" :style="{ 'color': activeColor(dataValue.status)}">{{ dataValue.status }}</span>
        <div v-if="alertbar.opened" class="alertToggle">
          <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
        </div>
        <!-- <div class="header-right" :style="{ 'color': activeColor(dataValue.status)}">{{ dataValue.status }}</div> -->
      </div>
      <div class="detail-attribute">
        <el-row class="detail-metric-row">
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.startTime') }}</span> <span>{{ dataValue.startTime }}</span></div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.assignedTo') }}</span> <span>{{ dataValue.assignedTo }}</span></div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.upgradeTime') }}</span> <span>{{ dataValue.upgradeTime }}</span></div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.ivrStatus') }}</span> <span>{{ ivrEnabled }}</span></div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.endTime') }}</span> <span>{{ dataValue.endTime }}</span></div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.bridgeStatus') }}</span> <span>{{ bridgeActive }}</span></div></el-col>
        </el-row>
      </div>
      <div class="detail-others">
        <el-row>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.businessSegment') }}</span> <span>{{ dataValue.businessSegment }}</span></div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.origanization') }}</span> <span>{{ dataValue.origanization }}</span></div></el-col>
        </el-row>
        <el-row>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.queueDetails') }}</span> <span>{{ dataValue.queueDetails }}</span></div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.region') }}</span> <span>{{ dataValue.region }}</span></div></el-col>
        </el-row>
        <el-row>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.modality') }}</span> <span>{{ dataValue.modality }}</span></div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12"><div class=""><span class="for-label">{{ $t('i18nView.language') }}</span> <span>{{ dataValue.language }}</span></div></el-col>
        </el-row>
      </div>
      <div class="detail-trigger">
        <span class="for-label">{{ $t('i18nView.triggerCriteria') }}</span>
        <span>{{ dataValue.triggerCriteria }}</span>
      </div>
      <div class="detail-metric">
        <el-row class="detail-metric-row">
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric1') }}</span> <span>{{ dataValue.metric1 }}</span></div></el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric2') }}</span> <span>{{ dataValue.metric2 }}</span></div></el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric3') }}</span> <span>{{ dataValue.metric3 }}</span></div></el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric4') }}</span> <span>{{ dataValue.metric4 }}</span></div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric5') }}</span> <span>{{ dataValue.metric5 }}</span></div></el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric6') }}</span> <span>{{ dataValue.metric6 }}</span></div></el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric7') }}</span> <span>{{ dataValue.metric7 }}</span></div></el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6"><div class=""><span class="for-label">{{ $t('i18nView.metric8') }}</span> <span>{{ dataValue.metric8 }}</span></div></el-col>
        </el-row>
      </div>
      <div class="detail-site">
        <el-table
          :header-cell-style="{background:'#A5C2E6',color:'#606266'}"
          :data="dataValue.sites"
          fit
          style="width: 100%;"
          :row-class-name="tableRowClassName"
        >
          <el-table-column :label="$t('table.siteName')" align="center" min-width="20%">
            <template slot-scope="{row}">
              <span>{{ row.siteName }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.open')" align="center" min-width="21%">
            <template slot-scope="{row}">
              <span>{{ row.open }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.inquiryStatus')" align="center" min-width="19%">
            <template slot-scope="{row}">
              <span>{{ row.inquiryStatus }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.lastContactTime')" align="center" min-width="19%">
            <template slot-scope="{row}">
              <span>{{ row.lastcontact }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.rootCauses')" align="center" min-width="21%">
            <template slot-scope="{row}">
              <span>{{ row.rootCauses }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AlertHamburger from '@/components/Hamburger/alertHamburger'
import RightPannel from './components/rightPannel'
import local from './local'
const viewName = 'i18nView'
import { fetchAlert, alertAssgineTo, changeAlertStatus } from '@/api/alerts'

export default {
  name: 'AlertDetail',
  components: {
    AlertHamburger,
    RightPannel
  },
  data() {
    return {
      notClick: false,
      dataValue: {},
      siteName: 'Site 1'
    }
  },
  computed: {
    ...mapState({
      alertbar: state => state.app.alertbar,
      currentUser: state => state.user.name
    }),
    classObj() {
      return {
        hideAlertbar: !this.alertbar.opened,
        openAlertbar: this.alertbar.opened
      }
    },
    resolveText: {
      get() {
        if (this.dataValue.status === 'Resolved') {
          return this.$t('i18nView.reactivate')
        } else {
          return this.$t('i18nView.resolve')
        }
      },
      set(val) {
        this.alertStatus = val
      }
    },
    titleLevel: {
      get() {
        return 'Level' + this.dataValue.level
      },
      set(val) {
        this.dataValue.level = 'Level' + val
      }
    },
    ivrEnabled: {
      get() {
        return this.dataValue.ivrEnabled === true ? 'Enable' : 'Disabled'
      },
      set(val) {
        this.dataValue.ivrEnabled = Boolean(val)
      }
    },
    bridgeActive: {
      get() {
        return this.dataValue.bridgeActive === true ? 'Active' : 'Inactive'
      },
      set(val) {
        this.dataValue.bridgeActive = Boolean(val)
      }
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
    const alertID = this.$route.params && this.$route.params.alertId
    // this.fetchData(alertid)
    fetchAlert(alertID).then(response => {
      console.log(response)
      this.dataValue = response.data
      if (this.dataValue.status === 'Resolved') {
        this.notClick = true
      }
    })
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleAlertBar')
    },
    fetchData(id) {
      // this.dataValue = detailsLIst.filter(item => item.alertId === id)[0]
    },
    handleAssginToMe() {
      // this.dataValue.assignedTo = this.currentUser
      // var qs = require('querystring')

      // const obj = JSON.stringify({ 'alertid': this.dataValue.alertId, 'attr': 'ss', 'currentuser': this.currentUser })
      const obj = { 'name': 'xiaoj', 'age': 1 }
      // const param = new URLSearchParams()
      // param.append('name', 'xiaoj')
      // param.append('age', 3)
      // this.axios({}).then(function(){}).catch(function(){}
      alertAssgineTo(obj).then(response => {
        console.log(response)
        // this.dataValue.assignedTo = this.currentUser
      })
      // this.showNotification()
    },
    handleResolve() {
      let changedStatus = 'Resolved'
      this.notClick = true
      if (this.dataValue.status === 'Resolved') {
        changedStatus = 'Active'
        this.notClick = false
      }
      // this.dataValue.status = changedStatus
      const data = JSON.stringify({ 'alertid': this.dataValue.alertId, 'attr': changedStatus, 'currentuser': this.currentUser })
      changeAlertStatus(data).then(response => {
        console.log(response)
        // this.dataValue.status = changedStatus
      })
    },
    showNotification() {
      this.$notify.error({
        title: this.$t('i18nView.newAlert'),
        // message: this.$t('i18nView.assgintoNewalert'),
        dangerouslyUseHTMLString: true,
        // message: '<strong>这是 <i>HTML</i> 片段</strong><a href="#/alert/detail/' + this.dataValue.alertId + '">cha kan xiangqing</a>',
        message: '<span>' + this.$t('i18nView.assgintoNewalert') + '</span><a href="#/alert/detail/07042020-1003" class="link-type">' + this.$t('i18nView.seeMoreDetail') + '</a>',
        duration: 3600
      })
    },
    tableRowClassName({ row, rowIndex }) {
      return 'background-row'
    },
    activeColor(status) {
      if (status === 'New') {
        return 'red'
      } else if (status === 'Active') {
        return '#F0AD4E'
      } else if (status === 'Resolved') {
        return 'green'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
 span {
       padding-right: 10px;
     }
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
      padding-right: -30px;
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
    .not-click{
        pointer-events: none;
        background-color: #dbdbdb;
    }
  .detail-attribute{
    padding: 20px;
    border: 1px solid #A5C2E6;
  }

  .detail-others{
    padding: 20px;
    border: 1px solid #A5C2E6;
  }
  .detail-trigger{
    padding: 20px;
    border: 1px solid #A5C2E6;
  }
  .detail-metric{
    padding: 20px;
    border: 1px solid #A5C2E6;
  }
  .el-col{
    bottom: 5px;
    padding-bottom: 5px;
   }
  .detail-metric-row{
    height: 20px;
  }
  .for-label{
      color: grey;
    }
  .detail-site{
    padding: 2px;
    border: 1px solid #A5C2E6;
  }
.header-right{
    display: inline-block;
    float: right;
    padding-right: 5px;
  }
</style>
