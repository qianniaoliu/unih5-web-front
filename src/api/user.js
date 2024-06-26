import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/pc/user/login',
    method: 'post',
    data: data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
export function addUser(req) {
  return request({
    url: '/pc/user/add',
    method: 'post',
    data: req
  })
}

export function updateUser(req) {
  return request({
    url: '/pc/user/update',
    method: 'post',
    data: req
  })
}

export function deleteUser(req) {
  return request({
    url: '/pc/user/delete',
    method: 'post',
    data: req
  })
}

export function queryUserPage(req) {
  return request({
    url: '/pc/user/query',
    method: 'get',
    params: req
  })
}
