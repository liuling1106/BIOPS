<template>
  <div class="app-container-1" :class="classObj">
    <div class="alert-sidebar"> <alert-sidebar /></div>
    <div class="alert-content">
      <div class="detail-header">{{ titleLevel }} | {{ dataValue.alertId }}
        <div v-if="alertbar.opened" class="alertToggle">
          <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
        </div>
      </div>
      <div class="detail-attribute">
        <el-row class="detail-metric-row" :gutter="0">
          <el-col :xs="8" :sm="6" :md="6" :lg="6"><div class="">{{ $t('i18nView.startTime') }}</div></el-col>
          <el-col :xs="4" :sm="6" :md="6" :lg="6"><div class="">{{ dataValue.startTime }}</div></el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6"><div class="">{{ $t('i18nView.assignedTo') }}</div></el-col>
          <el-col :xs="4" :sm="6" :md="6" :lg="6"><div class="">{{ dataValue.assignedTo }}</div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="8" :sm="6" :md="6" :lg="6"><div class="">{{ $t('i18nView.upgradeTime') }}</div></el-col>
          <el-col :xs="4" :sm="6" :md="6" :lg="6"><div class="">{{ dataValue.upgradeTime }}</div></el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6"><div class="">{{ $t('i18nView.ivrStatus') }}</div></el-col>
          <el-col :xs="4" :sm="6" :md="6" :lg="6"><div class="">{{ ivrEnabled }}</div></el-col>
        </el-row>
        <el-row class="detail-metric-row">
          <el-col :xs="8" :sm="6" :md="6" :lg="6"><div class="">{{ $t('i18nView.endTime') }}</div></el-col>
          <el-col :xs="4" :sm="6" :md="6" :lg="6"><div class="">{{ dataValue.endTime }}</div></el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6"><div class="">{{ $t('i18nView.bridgeStatus') }}</div></el-col>
          <el-col :xs="4" :sm="6" :md="6" :lg="6"><div class="">{{ bridgeActive }}</div></el-col>
        </el-row>
      </div>
      <div class="detail-others">
        <span>{{ $t('i18nView.myAlert') }} |</span>
        <span>{{ $t('i18nView.myAlert') }} |</span>
        <span>{{ $t('i18nView.myAlert') }} |</span>
        <span>{{ $t('i18nView.myAlert') }} |</span>
        <span>{{ $t('i18nView.myAlert') }} |</span>
        <span>{{ $t('i18nView.myAlert') }}</span>
      </div>
      <div class="detail-trigger">
        <span>{{ $t('i18nView.triggerCriteria') }}</span>
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
          fit
          stripe
          highlight-current-row
          style="width: 100%;"
        >
          <el-table-column :label="$t('table.siteName')" prop="alertId" align="center" width="180">
            <template slot-scope="{row}">
              <span>{{ row.alertId }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.open')" prop="alertId" align="center" width="180">
            <template slot-scope="{row}">
              <span>{{ row.alertId }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.inquiryStatus')" prop="alertId" align="center" width="180">
            <template slot-scope="{row}">
              <span>{{ row.alertId }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.lastContactTime')" prop="alertId" align="center" width="180">
            <template slot-scope="{row}">
              <span>{{ row.alertId }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.rootCauses')" prop="alertId" align="center" width="180">
            <template slot-scope="{row}">
              <span>{{ row.alertId }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  // @import "~@/styles/alertbar.scss";
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
  .hideAlertbar .alert-content{ width: 80%;}
  .openAlertbar .alert-sidebar{ display: none !important}
  .openAlertbar .alert-content{width: 100% !important;}

    .alertToggle{
      font-size: 20px;
      display: inline-block;
      float: right;
      height: 35px;
      width: 35px;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  .detail-header{
    background-color: #A5C2E6;
    height: 35px;
    border: 1px solid #4472c4;
    line-height: 35px;
    font-weight: 500px;
    padding-left: 20px;
    padding-bottom: 20px
  }
    .alertToggle{
      padding-right: -20px;
      display: inline-block;
      float: right;
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
    }
  .detail-attribute{
    padding: 20px;
    border: 1px solid #A5C2E6;
  }
    .el-row{
      padding: 2px;
    }

  .detail-others{
    padding: 20px;
    border: 1px solid #A5C2E6;
    height: 100px;
  }
     span {
       padding-right: 10px;
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
   }
  .detail-metric-row{
    height: 20px;
  }
  .detail-site{
    padding: 20px;
    padding-left: 50px;
    border: 1px solid #A5C2E6;
  }
</style>
<script>
import { mapState } from 'vuex'
import local from './local'
import AlertHamburger from '@/components/Hamburger/alertHamburger'
import AlertSidebar from '@/views/alert/components/alertSidebar'
const viewName = 'i18nView'
// import { fetchAlert } from '@/api/alerts'
import { fetchArticle } from '@/api/article'

const initData = {
  alertId: 'D6b265d9-D2AA-E6DB-5cc3-16EeBB0cF8db',
  level: '2',
  startTime: '2020-07-05',
  assignedTo: 'Nicholas Cook',
  upgradeTime: '2020-07-08',
  ivrEnabled: '1',
  endTime: '2020-07-10',
  bridgeActive: '1',
  triggerCriteria: '(Metric1 > 10 & Metric2 > 5) OR (Metric 8 < 50%)',
  metric1: 10,
  metric2: 11,
  metric3: 20,
  metric4: 32,
  metric5: 16,
  metric6: 55,
  metric7: 16,
  metric8: '42%',
  sites: []
}

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
        return Boolean(this.dataValue.ivrEnabled)
      },
      set(val) {
        this.dataValue.ivrEnabled = Boolean(val)
      }
    },
    bridgeActive: {
      get() {
        return Boolean(this.dataValue.bridgeActive)
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
      fetchArticle(id).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = this.lang === 'zh' ? '编辑文章' : 'Edit Article'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Alert'
      document.title = `${title} - ${this.alertDetail.alertid}`
    }
  }
}
</script>
