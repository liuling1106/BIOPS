import request from '@/utils/request'
// var qs = require('querystring')

export function fetchCount(query) {
  return request({
    url: '/GetAlertCount',
    method: 'get'//,
    // params: query
  })
}
export function fetchList(query) {
  return request({
    url: '/GetAllAlert',
    method: 'get'//,
    // params: query
  })
}
export function fetchAlert(alertid) {
  return request({
    url: '/GetAlertDetail',
    method: 'get',
    params: { alertid }
  })
}
export function alertAssgineTo(data) {
  console.log(data)
  return request({
    url: '/assginToGet',
    method: 'get',
    // headers: { 'Content-Type': 'application/json;charset=utf-8' },
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // data: { data }
    params: data
    // data: data
  })
}
export function changeAlertStatus(data) {
  return request({
    url: '/changeStatusGet',
    method: 'get',
    // headers: { 'Content-Type': 'application/json; charset=utf-8', dataType: 'json' },
    // headers: { 'contentType': 'application/json; charset=utf-8', dataType: 'json' }
    // data: qs.stringify(data)
    params: data
  })
}
export function fetchAlertLog(alertid) {
  return request({
    url: '/GetAlertLog',
    method: 'get',
    params: { alertid }
  })
}
export function fetchAlertSite(alertid, siteName) {
  return request({
    url: '/GetAlertSite',
    method: 'get',
    params: { alertid, siteName }
  })
}
export function saveLog(data) {
  return request({
    url: '/GetAlertSite',
    method: 'post',
    data: data
  })
}
export function changeAlertSiteStatus(data) {
  return request({
    url: '/changeAlertSiteStatus',
    method: 'get',
    params: data
  })
}
export function sendRequest(data) {
  return request({
    url: '/vue-element-admin/alerts/sendRequest',
    method: 'post',
    data: data
  })
}
