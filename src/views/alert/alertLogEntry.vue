<template>
  <alertdetail-title>
    <div slot="leftpannel_title">Custom Log Entry | {{ alertID }}</div>
    <div slot="right-pannel" />
    <div slot="left-pannel">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <div class="div-content-container">
          <el-row class="div-content-content">
            <el-form-item prop="logsText">
              <el-input v-model="ruleForm.logsText" type="textarea" :autosize="{ minRows: 4}" placeholder="please input custom logs" name="inputlog" required />
            </el-form-item>
          </el-row>
        </div>
        <div class="div-submit">
          <el-form-item>
            <div class="btncenteralign"> <el-button type="primary" @click="submitForm('ruleForm')">submit</el-button></div>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </alertdetail-title>
</template>

<script>
import AlertdetailTitle from './components/alertdetailTitle'
import { fetchAlertLog, saveLog } from '@/api/alerts'

// eslint-disable-next-line no-unused-vars
const alertID = ''

export default {
  name: 'CustomLogEntry',
  components: {
    AlertdetailTitle
  },
  data() {
    return {
      ruleForm: {
        logsText: ''
      },
      rules: {
        logsText: [
          { required: true, message: 'please input content', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.alertId
    // this.getLogs(id)
    this.alertID = id
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // let formData =  JSON.stringify(this.ruleForm);
          const formData = { 'logsText': this.ruleForm.logsText, 'currentUser': 'Admin', alertId: this.alertID }
          console.log(formData)
          saveLog(formData).then(response => {
            console.log(response)
            this.$alert(this.$t('alerts.inqueryRequestsuccess'), this.$t('alerts.message'), {
              confirmButtonText: this.$t('alerts.confirm')
            })
            this.$router.push('/alert/detail/' + this.alertID + '/Log')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getLogs(id) {
      fetchAlertLog(id).then(response => {
        const entrylogs = response.listLogs[0].Logs
        const templogs = Array(entrylogs)
        for (let j = 0; j < templogs.length; j++) {
          this.logsText += templogs[j] + '/n'
        }
        // this.logsText =  this.logsText.trim('/n')
        console.log(this.logsText)
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
.textarea {
  white-space: pre-line;}
</style>
