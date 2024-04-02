import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/pc/dept/add',
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

