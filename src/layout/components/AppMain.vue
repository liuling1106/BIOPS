<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>

import { fetchCount } from '@/api/alerts'
import { mapState } from 'vuex'
import local from '@/views/alert/local'
const viewName = 'i18nView'

export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }, ...mapState({
      alertCount: state => state.app.alertsCount
    })
  },
  created() {
    this.GetAlertCount()
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
  },
  methods: {
    GetAlertCount() {
      window.setInterval(() => {
        setTimeout(this.fetchAlertCount, 0)
      }, 6000 * 5)
    },
    fetchAlertCount() {
      fetchCount().then(response => {
        console.log(response)
        console.log(this.alertCount)
        this.total = response.data.Count
        // var alertID = response.data.Alertid
        if (this.total > this.alertCount) {
          this.$store.dispatch('app/setAlertCount', this.total)
          console.log('setAlertCount have complete begin show notifiy')
          this.$notify.error({
            title: this.$t('i18nView.newAlert'),
            // message: this.$t('i18nView.assgintoNewalert'),
            dangerouslyUseHTMLString: true,
            // message: '<strong>这是 <i>HTML</i> 片段</strong><a href="#/alert/detail/' + this.dataValue.alertId + '">cha kan xiangqing</a>',
            // message: '<span>' + this.$t('i18nView.assgintoNewalert') + '</span><a href="#/alert/detail/"' + alertID + '" class="link-type">' + this.$t('i18nView.seeMoreDetail') + '</a>',
            message: '<span>' + this.$t('i18nView.assgintoNewalert') + '</span>',
            duration: 0
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
