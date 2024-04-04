import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/pc/dept/add',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/pc/dept/update',
    method: 'put',
    data
  })
}

export function deleteData(data) {
  return request({
    url: '/pc/dept/delete',
    method: 'post',
    data
  })
}

export function getQuantity(token) {
  return request({
    url: '/pc/low/dept/quantity',
    method: 'get',
    params: { token }
  })
}

export function queryDeptPage(params) {
  return request({
    url: '/pc/dept/query/low/depts',
    method: 'get',
    params: params
  })
}

export function queryDeptLists(params) {
  return request({
    url: '/pc/dept/query/depts',
    method: 'get',
    params: params
  })
}

