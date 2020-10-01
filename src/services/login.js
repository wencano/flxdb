import request from '@/utils/request';
const API_URL = 'http://localhost:1337';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function strapiLogin(params) {
  console.log("strapiLogin ", params);
  return request(API_URL+'/auth/local', {
    method: 'POST',
    data: params
  });
}
