import request from '@/utils/request';
import { getStrapiAuth } from '@/utils/authority';

const API_URL = 'http://localhost:1337'

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function getItem(params){
  let auth = getStrapiAuth();
  return request(API_URL + "/products/"+params.id, {id: params.id, headers: {Authorization: "Bearer " + auth.jwt}});
}
