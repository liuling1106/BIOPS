<template>
  <div class="app-container-1" :class="classObj">
    <div class="alert-sidebar"> <alert-sidebar :alert-status="dataValue.status" @changeName="changeAssaginTo" @btnResolve="resolve" /></div>
    <div class="alert-content">
      <div class="detail-header">{{ titleLevel }} | {{ dataValue.alertId }}
        <div v-if="alertbar.opened" class="alertToggle">
          <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
        </div>
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
          <el-table-column :label="$t('table.siteName')" prop="alertId" align="center" min-width="20%">
            <template slot-scope="{row}">
              <span>{{ row.siteName }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.open')" prop="alertId" align="center" min-width="21%">
            <template slot-scope="{row}">
              <span>{{ row.open }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.inquiryStatus')" prop="alertId" align="center" min-width="19%">
            <template slot-scope="{row}">
              <span>{{ row.inquiryStatus }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.lastContactTime')" prop="alertId" align="center" min-width="19%">
            <template slot-scope="{row}">
              <span>{{ row.lastcontact }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.rootCauses')" prop="alertId" align="center" min-width="21%">
            <template slot-scope="{row}">
              <span>{{ row.rootCauses }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  // @import "~@/styles/alertbar.scss";

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
  .el-table .background-row {
   background:#c5e0b4;
 }
</style>
<script>
import { mapState } from 'vuex'
import local from './local'
import AlertHamburger from '@/components/Hamburger/alertHamburger'
import AlertSidebar from '@/views/alert/components/alertSidebar'
const viewName = 'i18nView'
// import { fetchAlert } from '@/api/alerts'
// import { fetchArticle } from '@/api/article'

const detailsLIst = []
detailsLIst.push({ 'alertId': '07042020-1002', 'status': 'New', 'level': '3', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'No', 'startTime': '2020-07-05', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-10', 'triggerCriteria': '(Metric1 > 10 & Metric2 > 5) OR (Metric 8 < 50%)', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX Bangalore', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }], 'metric1': '20', 'metric2': '45', 'metric3': '30', 'metric4': '32', 'metric5': '16', 'metric6': '55', 'metric7': '42', 'metric8': '42%' })
detailsLIst.push({ 'alertId': '07042020-1003', 'status': 'New', 'level': '1', 'assignedTo': 'New', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-12', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'TS Windows', 'region': 'Xbox', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'NTC Sapporo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }], 'metric1': '5', 'metric2': '11', 'metric3': '42', 'metric4': '35', 'metric5': '18', 'metric6': '86', 'metric7': '23', 'metric8': '35%' })
detailsLIst.push({ 'alertId': '07042020-1004', 'status': 'Active', 'level': '2', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=15 and [CallsInQueue]>=5', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'Xbox All', 'region': 'EMEA: Latarn', 'modality': 'Click 2 Call', 'language': 'Japan', 'sites': [{ 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }], 'metric1': '23', 'metric2': '54', 'metric3': '12', 'metric4': '83', 'metric5': '20', 'metric6': '7', 'metric7': '35', 'metric8': '22%' })
detailsLIst.push({ 'alertId': '07042020-1005', 'status': 'Active', 'level': '1', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=6 and [CallsInQueue]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'Global', 'modality': 'Phone Inbound', 'language': 'French', 'sites': [{ 'siteName': 'Relia Yokohama', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }], 'metric1': '5', 'metric2': '11', 'metric3': '42', 'metric4': '35', 'metric5': '18', 'metric6': '86', 'metric7': '23', 'metric8': '39%' })
detailsLIst.push({ 'alertId': '07042020-1006', 'status': 'Resolved', 'level': '4', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Windows', 'queueDetails': 'Surface consumer Tech Support', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX kuala Lumpur', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }], 'metric1': '65', 'metric2': '51', 'metric3': '44', 'metric4': '35', 'metric5': '26', 'metric6': '53', 'metric7': '23', 'metric8': '35%' })
detailsLIst.push({ 'alertId': '07042020-1007', 'status': 'Resolved', 'level': '1', 'assignedTo': 'Admin', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[CallsINQueue]>=50', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Xbox', 'queueDetails': 'UR Office', 'region': 'Japan', 'modality': 'Phone Inbound', 'language': 'Spanish', 'sites': [{ 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }], 'metric1': '95', 'metric2': '32', 'metric3': '45', 'metric4': '14', 'metric5': '95', 'metric6': '56', 'metric7': '11', 'metric8': '22%' })

const initData = { 'alertId': '07042020-1002', 'level': '3', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'No', 'startTime': '2020-07-05', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-10', 'triggerCriteria': '(Metric1 > 10 & Metric2 > 5) OR (Metric 8 < 50%)', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX Bangalore', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] }

export default {
  name: 'AlertDetail',
  components: {
    AlertHamburger,
    AlertSidebar
  },
  data() {
    return {
      dataValue: Object.assign({}, initData)
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
    const alertid = this.$route.params && this.$route.params.alertId
    this.fetchData(alertid)
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleAlertBar')
    },
    fetchData(id) {
      this.dataValue = detailsLIst.filter(item => item.alertId === id)[0]
      // console.log(this.dataValue)
      // fetchAlert(id).then(response => {
      //   console.log(response)
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    tableRowClassName({ row, rowIndex }) {
      return 'background-row'
    },
    changeAssaginTo() {
      try {
        this.dataValue.assignedTo = this.currentUser
        this.showNotification()
      } catch (error) {
        return false
      }
    },
    resolve(status) {
      try {
        console.log('父方法中的status' + status)
        this.dataValue.status = status
        return true
      } catch (error) {
        return false
      }
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
    }
  }
}
</script>
