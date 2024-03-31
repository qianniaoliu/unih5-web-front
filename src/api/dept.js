import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/vue-admin-template/user/login',
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

