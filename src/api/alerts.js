import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/alerts/list',
    method: 'get',
    params: query
  })
}
export function fetchAlert(id) {
  return request({
    url: '/vue-element-admin/alerts/detail',
    method: 'get',
    params: { id }
  })
}
export function fetchAlertLog(id) {
  return request({
    url: '/vue-element-admin/alerts/log',
    method: 'get',
    params: { id }
  })
}
export function saveLog(data) {
  return request({
    url: '/vue-element-admin/alerts/saveLog',
    method: 'post',
    data: data
  })
}
export function sendRequest(data) {
  return request({
    url: '/vue-element-admin/alerts/sendRequest',
    method: 'post',
    data: data
  })
}
