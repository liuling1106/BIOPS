<template>
  <div class="app-container-1" :class="classObj">
    <div class="alert-sidebar"> <alert-sidebar @changeName="changeAssaginTo" /></div>
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
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric1</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric1 }}</div></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric2</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric2 }}</div></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric3</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric3 }}</div></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric4</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric4 }}</div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric5</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric5 }}</div></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric6</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric6 }}</div></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric7</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric7 }}</div></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4"><div class="">Metric8</div></el-col>
          <el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="">{{ dataValue.metric8 }}</div></el-col>
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
detailsLIst.push({ 'alertId': '07042020-1002', 'level': '3', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'No', 'startTime': '2020-07-05', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-10', 'triggerCriteria': '(Metric1 > 10 & Metric2 > 5) OR (Metric 8 < 50%)', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX Bangalore', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1003', 'level': '1', 'assignedTo': 'New', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-08', 'endTime': '2020-07-12', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'TS Windows', 'region': 'Xbox', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'NTC Sapporo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1004', 'level': '2', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=15 and [CallsInQueue]>=5', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'Xbox All', 'region': 'EMEA: Latarn', 'modality': 'Click 2 Call', 'language': 'Japan', 'sites': [{ 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1005', 'level': '1', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'Yes', 'bridgeActive': 'Yes', 'startTime': '2020-07-06', 'upgradeTime': '2020-07-09', 'endTime': '2020-07-13', 'triggerCriteria': '[LongesQueueTime]>=6 and [CallsInQueue]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'O365/Office', 'queueDetails': 'UR Office', 'region': 'Global', 'modality': 'Phone Inbound', 'language': 'French', 'sites': [{ 'siteName': 'Relia Yokohama', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1006', 'level': '4', 'assignedTo': 'NIcholas Cook', 'ivrEnabled': 'No', 'bridgeActive': 'Yes', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[LongesQueueTime]>=15', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Windows', 'queueDetails': 'Surface consumer Tech Support', 'region': 'NA', 'modality': 'Phone Inbound', 'language': 'English', 'sites': [{ 'siteName': 'CNX kuala Lumpur', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })
detailsLIst.push({ 'alertId': '07042020-1007', 'level': '1', 'assignedTo': 'New', 'ivrEnabled': 'Yes', 'bridgeActive': 'No', 'startTime': '2020-07-07', 'upgradeTime': '2020-07-10', 'endTime': '2020-07-15', 'triggerCriteria': '[CallsINQueue]>=50', 'businessSegment': 'Modern Lift, Gaming & Customer Service', 'origanization': 'Xbox', 'queueDetails': 'UR Office', 'region': 'Japan', 'modality': 'Phone Inbound', 'language': 'Spanish', 'sites': [{ 'siteName': 'Avanade Taguig', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }, { 'siteName': 'NTC tokyo', 'open': 'Yes', 'lastcontact': 'N/A', 'inquiryStatus': 'Not Sent', 'rootCauses': 'V/M/S' }] })

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
      alertbar: state => state.app.alertbar
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
    changeAssaginTo(name) {
      console.log('触发父组件修改方法')
      this.dataValue.assignedTo = name
    }
  }
}
</script>
