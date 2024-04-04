import request from '@/utils/request'

// 省级国标
export function queryProvinceAddr(data) {
  return request({
    url: '/app/queryProvinceAddr',
    method: 'get'
  })
}

// 市级国标
export function queryCityAddr(params) {
  return request({
    url: '/app/queryCityAddr',
    method: 'get',
    params: params
  })
}

// 区县国标
export function queryDistrictAddr(params) {
  return request({
    url: '/app/queryDistrictAddr',
    method: 'get',
    params: params
  })
}

// 乡镇国标
export function queryTownAddr(params) {
  return request({
    url: '/app/queryTownAddr',
    method: 'get',
    params: params
  })
}
