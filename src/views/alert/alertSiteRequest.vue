<template>
  <alertdetail-title>
    <div slot="leftpannel_title">SiteName: {{ siteName }} | Inquiry Request | {{ alertID }}</div>
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
// import { sendRequest } from '@/api/alerts'

export default {
  name: 'SiteRequest',
  components: {
    AlertdetailTitle
  },
  alertID: '1111',
  siteName: '222',
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
      }
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.alertId
    const siteName = this.$route.params && this.$route.params.siteName
    // this.getLogs(id)
    this.alertID = id
    this.siteName = siteName
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/alert/detail/' + this.alertID)
          this.$message({
            message: this.$t('i18nView.submitSuccess'),
            type: 'success'
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
