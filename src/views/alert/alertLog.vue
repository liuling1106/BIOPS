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
    </div>
  </alertdetail-title>
</template>

<script>
import AlertdetailTitle from './components/alertdetailTitle'
import local from '../alert/local'
const viewName = 'i18nView'
import { fetchAlertLog } from '@/api/alerts'

export default {
  name: 'AlertLog',
  components: {
    AlertdetailTitle
  },
  data() {
    return {
      dataValue: {
        alertId: '123',
        Logs: ['1', '2']
      }
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
    const alertid = this.$route.params && this.$route.params.alertId
    console.log(alertid)
    this.dataValue.alertId = alertid
    fetchAlertLog(alertid).then(response => {
      const displayLogs = response.data.Logs.reverse()
      this.dataValue.Logs = displayLogs
    })
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
