<template>
  <div class="app-container-1" :class="classObj">
    <div class="alert-sidebar"> <alert-sidebar /></div>
    <div class="alert-content">
      <div class="detail-header">Level2 |07272020
        <div v-if="alertbar.opened" class="alertToggle">
          <alert-hamburger :is-active="alertbar.opened" @toggleClick="toggleSideBar" />
        </div>
      </div>
      <div class="detail-attribute">
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple">{{ $t('i18nView.startTime') }}</div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">{{ $t('i18nView.assignedTo') }}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple">{{ $t('i18nView.upgradeTime') }}</div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">{{ $t('i18nView.ivrStatus') }}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple">{{ $t('i18nView.endTime') }}</div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">{{ $t('i18nView.bridgeStatus') }}</div></el-col>
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
        <span>{{ $t('i18nView.myAlert') }}:</span>
        <span>{{ $t('i18nView.myAlert') }}</span>
        <span>{{ $t('i18nView.myAlert') }}</span>
        <span>{{ $t('i18nView.myAlert') }}</span>
      </div>
      <div class="detail-metric">
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple">Metric1</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">Metric1</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">Metric1</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">Metric1</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple">Metric1</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">Metric1</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">Metric1</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">Metric1</div></el-col>
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
    }
  .hideAlertbar .alert-sidebar{
      width: 20%;
      height: 100%;
      float: right;
      overflow: hidden;
    }
  .hideAlertbar .alert-content{ width: 80%;}
  .openAlertbar .alert-sidebar{ display: none !important}
  .openAlertbar .alert-content{width: 100% !important;}

  .alert-content{
    font-size: 15px;
  }

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

export default {
  name: 'AlertDetail',
  components: {
    AlertHamburger,
    AlertSidebar
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
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleAlertBar')
    }
  }
}
</script>
