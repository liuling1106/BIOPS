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

