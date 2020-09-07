import Cookies from 'js-cookie'
import { getLanguage } from '@/lang/index'
import { getAlertCounts } from '@/views/alert/index'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  alertbar: {
    opened: Cookies.get('alertbarStatus') ? !!+Cookies.get('alertbarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  language: getLanguage(),
  size: Cookies.get('size') || 'medium',
  alertsCount: getAlertCounts()
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  TOGGLE_ALERTBAR: state => {
    state.alertbar.opened = !state.alertbar.opened
    state.alertbar.withoutAnimation = false
    if (state.alertbar.opened) {
      Cookies.set('alertbarStatus', 1)
    } else {
      Cookies.set('alertbarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  SET_ALERTCOUNT: (state, count) => {
    state.alertsCount = count
    Cookies.set('alert_count', count)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  toggleAlertBar({ commit }) {
    commit('TOGGLE_ALERTBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
  setAlertCount({ commit }, count) {
    commit('SET_ALERTCOUNT', count)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
