<template>
  <alertdetail-title>
    <div slot="leftpannel_title">SiteName: {{ dataValue.siteName }} | Inquiry Request | {{ dataValue.alertID }}</div>
    <div slot="right-pannel" />
    <div slot="left-pannel">
      <el-form ref="entryForm" :model="entryForm" :rules="rules">
        <div class="div-content-container">
          <el-row class="div-content-title">
            <el-form-item prop="title">
              <el-input v-model="entryForm.title" type="textarea" :autosize="{ minRows: 4}" placeholder="please input custom info" name="inputlog" />
            </el-form-item>
          </el-row>
          <el-row class="div-content-content">
            <el-form-item prop="contentText">
              <el-input v-model="entryForm.contentText" type="textarea" :autosize="{ minRows: 6}" placeholder="please input custom info" name="inputlog" />
            </el-form-item>
          </el-row>
        </div>
        <div class="div-submit">
          <el-form-item>
            <div class="btncenteralign"> <el-button type="primary" @click="submitForm('entryForm')">Send</el-button></div>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </alertdetail-title>
</template>

<script>
import AlertdetailTitle from './components/alertdetailTitle'
import { changeAlertSiteStatus } from '@/api/alerts'
import { mapState } from 'vuex'
export default {
  name: 'SiteRequest',
  components: {
    AlertdetailTitle
  },
  data() {
    return {
      entryForm: {
        title: 'Editable list Inquiry Form Recipients that prepopulates with the Sites distributions list.',
        contentText: 'Inquiry Field 1: Editable Value Inquiry Field 2: Editable Value Inquiry Field 3: Editable Value'
      },
      rules: {
        title: [
          { required: true, message: 'please input content', trigger: 'blur' }
        ],
        contentText: [
          { required: true, message: 'please input content', trigger: 'blur' }
        ]
      },
      dataValue: { alertID: '1111', siteName: '222' }
    }
  },
  computed: {
    ...mapState({
      alertbar: state => state.app.alertbar,
      currentUser: state => state.user.name
    })
  },
  created() {
    const id = this.$route.params && this.$route.params.alertId
    const siteName = this.$route.params && this.$route.params.siteName
    // this.getLogs(id)
    this.dataValue.alertID = id
    this.dataValue.siteName = siteName
    console.log(this.dataValue)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log({ alertId: this.dataValue.alertID, siteName: this.dataValue.siteName, inquiryStatus: 'Send', currentUser: this.currentUser })
          // return
          changeAlertSiteStatus({ alertId: this.dataValue.alertID, siteName: this.dataValue.siteName, inquiryStatus: 'Send', currentUser: this.currentUser }).then(response => {
            console.log(response)
            // this.$router.push('/alert/detail/' + this.dataValue.alertID)
            this.$alert(this.$t('alerts.inqueryRequestsuccess'), this.$t('alerts.message'), {
              confirmButtonText: this.$t('alerts.confirm')
            })
            this.$router.push('/alert/detail/' + this.dataValue.alertID)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
  white-space: pre-line;
}
</style>
