<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" :alert="alertId" @pop="popNotification" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>

import local from '@/views/alert/local'
const viewName = 'i18nView'

export default {
  name: 'AppMain',
  data() {
    return {
      alertId: ''
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', local.en)
      this.$i18n.mergeLocaleMessage('zh', local.zh)
    }
  },
  methods: {
    popNotification(alertID) {
      this.$notify.warning({
        title: this.$t('i18nView.newAlert'),
        dangerouslyUseHTMLString: true,
        message: '<span>' + this.$t('i18nView.assgintoNewalert') + '</span><a href="#/alert/detail/' + alertID + '" class="link-type">' + this.$t('i18nView.seeMoreDetail') + '</a>',
        duration: 0
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
