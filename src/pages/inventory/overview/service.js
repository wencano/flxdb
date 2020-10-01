import request from '@/utils/request';
import { getStrapiAuth } from '@/utils/authority';

const API_URL = 'http://localhost:1337';

export async function queryRule(params) {
  return request('/api/rule', {
    params,
  });
}
export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}

export async function queryProducts() {
  let auth = getStrapiAuth();
  return request( API_URL + '/products', { headers: { Authorization: "Bearer " + auth.jwt }});
}

export async function removeProduct(params) {
  let auth = getStrapiAuth();
  return request(API_URL + '/products/'+params.id, {method: 'DELETE', data: {id: params.id, header: {Authorization: "Bearer " + auth.jwt}}});
}