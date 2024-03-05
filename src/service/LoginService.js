import {ApiService} from "./ApiService";

export async function apiLogin(env, data) {
  return ApiService.fetchData({
    url: `https://${env}-api.global66.com/customer/b2b/authentication/login`,
    method: 'post',
    data
  })
}



export async function apiDetailsAlert(alertId) {
  return ApiService.fetchData({
    url: `/alerts/${alertId}`,
    method: 'get'
  })
}


export async function apiGetClientForTopics(alertId) {
  return ApiService.fetchData({
    url: `/alerts/clients/${alertId}`,
    method: 'get'
  })
}

export async function apiSendClientsAndInitSocket(data, alertId) {
  return ApiService.fetchData({
    url: `/alerts/clients/send/${alertId}`,
    method: 'post',
    data
  })
}

export async function apiGetAlertSent(params) {
  return ApiService.fetchData({
    url: `/alerts/report/client/sent`,
    method: 'get',
    params
  })
}
