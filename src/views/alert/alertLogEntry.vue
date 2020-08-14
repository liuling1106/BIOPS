<template>
  <alertdetail-title>
    <div slot="leftpannel_title">Custom Log Entry | {{ alertID }}</div>
    <div slot="right-pannel" />
    <div slot="left-pannel">
      <el-form ref="mailForm" :model="mailData">
        <div class="div-content-container">
          <el-row class="div-content-content">
            <el-form-item>
              <el-input v-model="mailData.mailContent" type="textarea" :autosize="{ minRows: 4}" placeholder="请输入内容" />
            </el-form-item>
          </el-row>
        </div>
        <div class="div-submit">
          <el-form-item>
            <div class="btncenteralign"> <el-button type="primary" @click="submitForm('mailForm')">submit</el-button></div>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </alertdetail-title>
</template>

<script>
import AlertdetailTitle from './components/alertdetailTitle'
import { fetchAlertLog } from '@/api/alerts'

// eslint-disable-next-line no-unused-vars
const alertID = ''

export default {
  name: 'CustomLogEntry',
  components: {
    AlertdetailTitle
  },
  data() {
    return {
      mailData: {
        mailTitle: 'Editable list Inquiry Form Recipients that prepopulates with the Sites distributions list.',
        mailContent: 'The text body of the email to be sent that informs the Sites of the status change (opposite of the current state), the message content being turned on/off, and any other details deemed necessary.'
      }
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.alertId
    this.getLogs(id)
    this.alertID = id
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
    getLogs(id) {
      fetchAlertLog(id).then(response => {
        console.log(response)
      }
      )
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
</style>
