import request from 'utils/request';
import { api } from 'utils/config';


const { getShopInfoApi,updateShopInfoApi,getShopAdminsApi,delShopAdminApi } = api;

export function getShopInfoService () {
  return request({
    url: getShopInfoApi,
    method: 'get'
  })
}
export function updateShopInfoService(data){
  return request({
    url: updateShopInfoApi,
    method: 'post',
    data,
  })
}
export function getShopAdminsService(){
  return request({
    url: getShopAdminsApi,
    method: 'get'
  })
}
export function delShopAdminService(data){
  return request({
    url: delShopAdminApi,
    method: 'post',
    data,
  })
}

// export function delShopAdminService(id) {
//   return request(`/shop/admins/${id}`, {
//     method: 'DELETE',
//   });
// }
