<template>
  <alertdetail-title>
    <div slot="leftpannel_title">Log | {{ dataValue.alertId }}</div>
    <!-- <div slot="leftpannel_title">Log |</div> -->
    <div slot="right-pannel">
      <div class="container-action">
        <div class="container-box">
          <div class="btn-icon"><svg-icon icon-class="link" /></div>
          <router-link :to="{path: '/alert/detail/'+dataValue.alertId+'/LogEntry'}"><div class="btn-action">{{ $t('i18nView.customlogEntry') }}</div></router-link>
        </div>
      </div>
    </div>
    <div slot="left-pannel">
      <div v-for="(item, index) in dataValue.Logs" :key="index" class="container">
        <div class="content-item">{{ item }}</div>
      </div>
      <div class="div-submit" style="display:none">
        <div class="btncenteralign"> <el-button type="primary" @click="submitForm('mailForm')">submit</el-button></div>
      </div>
    </div>
  </alertdetail-title>
</template>

<script>
import AlertdetailTitle from './components/alertdetailTitle'
import local from '../alert/local'
const viewName = 'i18nView'

const detailsLIst = []
detailsLIst.push({ 'alertId': '07042020-1002', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 2 Alert Identified', '07-27-2020 10:24 AM PST | Nicholas Cook | Assigned to Nicholas Cook.', '07-27-2020 10:24 AM PST | Nicholas Cook | IVR Enabled', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLIst.push({ 'alertId': '07042020-1003', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 1 Alert Identified', '07-28-2020 11:03 AM PST | Nicholas Cook | Assigned to Admin.', '07-27-2020 10:24 AM PST | Nicholas Cook |all sites notified', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLIst.push({ 'alertId': '07042020-1004', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 3 Alert Identified', '07-28-2020 03:15 AM PST | Nicholas Cook | Assigned to Nicholas Cook.', '07-27-2020 10:24 AM PST | Nicholas Cook | IVR Enabled and all sites notified', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLIst.push({ 'alertId': '07042020-1005', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 3 Alert Identified', '07-27-2020 09:56 AM PST | Nicholas Cook | Assigned to Admin.'] })
detailsLIst.push({ 'alertId': '07042020-1006', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 4 Alert Identified', '07-27-2020 23:24 AM PST | Nicholas Cook | Assigned to Nicholas Cook.', '07-27-2020 10:24 AM PST | Nicholas Cook | IVR Enabled ', '07-27-2020 10:25 AM PST | Nicholas Cook | Custom Log Entry.'] })
detailsLIst.push({ 'alertId': '07042020-1007', 'Logs': ['07-27-2020 10:23 AM PST | System | Level 2 Alert Identified', '07-27-2020 20:46 AM PST | Nicholas Cook | Assigned to Nicholas Cook.'] })

export default {
  name: 'AlertLog',
  components: {
    AlertdetailTitle
  },
  data() {
    return {
      dataValue: {
        alertId: '',
        Logs: []
      }
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
    const id = this.$route.params && this.$route.params.alertId
    console.log(id)
    this.fetchData(id)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    fetchData(id) {
      this.dataValue = detailsLIst.filter(item => item.alertId === id)[0]
      this.dataValue.Logs.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.btncenteralign{
  margin-top:20px;
  text-align: center;
}
.el-row {
  height: 60px;
}
.div-content-container{
  // min-height: calc(100vh - 84px);
  min-height: calc(100vh - 260px);
  border: 1px solid  #A5C2E6;
}
.div-content-title{
  border: 1px 1px 0px 0px solid  #A5C2E6;
  margin-bottom: 20px;
}
.div-content-content{
  border: 1px 1px 0px 0px solid  #A5C2E6;
}

.content-item{
    font-weight: bold;
    padding: 2px;
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
.btncenteralign{
  margin-top:20px;
text-align: center;
}
</style>
