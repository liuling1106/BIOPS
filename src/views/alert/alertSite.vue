<template>
  <alertdetail-title>
    <!-- <div slot="leftpannel_title">Log |</div> -->
    <div slot="leftpannel_title">SiteName:{{ siteName }} | {{ dataValue.alertId }}</div>
    <div slot="right-pannel">
      <div class="container-action">
        <div class="container-box">
          <div class="btn-icon"><svg-icon icon-class="link" /></div>
          <router-link :to="{path: '/alert/detail/'+dataValue.alertId+'/'+ siteName + '/siterequest'}">
            <div class="btn-action" @click="eventinquiryRequest">{{ $t('i18nView.context') }}</div>
          </router-link>
        </div>
      </div>
    </div>
    <div slot="left-pannel">
      <div class="site-attr">
        <el-row class="detail-metric-row">
          <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.sitePhone') }}</span> <span>{{ dataValue.siteattr.sitePhone }}</span></div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.distributionList') }}</span> <span>{{ dataValue.siteattr.distributionList }}</span></div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.primarySDM') }}</span> <span>{{ dataValue.siteattr.primarySDM }}</span></div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.secondarySDM') }}</span> <span>{{ dataValue.siteattr.SecondarySDM }}</span></div></el-col>
        </el-row>
      </div>
      <div class="site-otherattr">
        <div class="site-request">
          <div class="site-request-title">{{ $t('i18nView.context') }}</div>
          <div class="site-request-content">
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.status') }}: </span> <span>{{ dataValue.siteRequest.inquiryStatus }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.lastContactTime') }}</span> <span>{{ dataValue.siteRequest.lastcontact }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.timeElapsed') }}</span> <span>{{ dataValue.siteRequest.timeElapsed }}</span></div></el-col>
            </el-row>
          </div>
        </div>
        <div class="site-request">
          <div class="site-request-title">{{ $t('i18nView.howrofoperation') }}</div>
          <div class="site-request-content">
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.Monday') }}</span> <span>{{ dataValue.siteHour.Monday }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.Tuesday') }}</span> <span>{{ dataValue.siteHour.Tuesday }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.Wednesday') }}</span> <span>{{ dataValue.siteHour.Wednesday }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.Thursday') }}</span> <span>{{ dataValue.siteHour.Thursday }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.Friday') }}</span> <span>{{ dataValue.siteHour.Friday }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.Saturday') }}</span> <span>{{ dataValue.siteHour.Saturday }}</span></div></el-col>
            </el-row>
            <el-row class="detail-metric-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class=""><span class="for-label">{{ $t('i18nView.Sunday') }}</span> <span>{{ dataValue.siteHour.Sunday }}</span></div></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </alertdetail-title>
</template>

<script>
import AlertdetailTitle from './components/alertdetailTitle'
import local from '../alert/local'
const viewName = 'i18nView'
import { fetchAlertSite } from '@/api/alerts'

const detailsLIst = []
detailsLIst.push({ 'alertId': '07042020-1008', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsLIst.push({ 'alertId': '07042020-1004', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsLIst.push({ 'alertId': '07042020-1005', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsLIst.push({ 'alertId': '07042020-1006', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})
detailsLIst.push({ 'alertId': '07042020-1007', 'siteattr': { 'sitePhone': '(023) 266-1488', 'distributionList': 'XXXXXXXX@vendor.com, YYYYYYYY@vendor.org, ZZZZZZZZZ@vendor.com', 'primarySDM': 'Name | Phone | Email', 'SecondarySDM': 'Name | Phone | Email' }, 'siteRequest': { 'status': 'Not Sent', 'lastContactTime': 'N/A', 'timeElapsed': 'N/A' }, 'siteHour': { 'Monday': 'XX:XX AM to XX:XX PM', 'Tuesday': 'XX:XX AM to XX:XX PM', 'Wednesday': 'XX:XX AM to XX:XX PM', 'Thursday': 'XX:XX AM to XX:XX PM', 'Friday': 'XX:XX AM to XX:XX PM', 'Saturday': 'XX:XX AM to XX:XX PM', 'Sunday': 'XX:XX AM to XX:XX PM' }})

export default {
  name: 'AlertSite',
  components: {
    AlertdetailTitle
  },
  data() {
    return {
      dataValue: Object.assign({}, detailsLIst[0]),
      siteName: ''
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
    const id = this.$route.params && this.$route.params.alertId
    console.log(id)
    this.siteName = this.$route.params && this.$route.params.siteName
    console.log(this.siteName)
    fetchAlertSite(id, this.siteName).then(response => {
      console.log(response)
      // console.log(response.data.Logs)
      // console.log(response.code)
      // console.log(response.loglists)
      // console.log(response.loglists.Logs)
      // const displayLogs = response.data.Logs.reverse()
      // this.dataValue.Logs = displayLogs
      this.dataValue = response.data
    })
  },
  methods: {
    fetchAlertSite(id) {
      console.log('start fetchadata')
      console.log(this.dataValue)
      // detailsLIst.forEach(element => {
      //   console.log(element.alertId)
      // })
      // this.dataValue = detailsLIst.filter(item => item.alertId === id)[0]
      // console.log(this.dataValue)
    },
    eventinquiryRequest() {

    }
  }
}
</script>

<style lang="scss" scoped>
.leftbar-content{
    padding: 2px;
}
.right-sidebar{
  height: 100vh*0.82 -37px
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
  padding-left: 10%;
  padding-right: 10%;
  line-height: 2rem;
}
.btn-icon{
  display: inline-block;
  padding-left: 7%;
  padding-top:2%;
}
.site-attr{
    border: 1px solid #A5C2E6;
    height: 100vh*0.3;
    // height:  calc(100vh - 424px);
}
.site-otherattr{
    // height: calc(100vh - 364px);
    height: 100vh*0.52;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.site-request{
    flex:1;
    border: 1px solid #A5C2E6;
}
 .for-label{
      color: grey;
    }
    .detail-metric-row{
         height: 20px;
         padding: 10px;
    }
.site-request .site-request-title{
    font-weight: bold;
    text-align: center;
}
.site-request .site-request-content{
text-align: center;
}
</style>
