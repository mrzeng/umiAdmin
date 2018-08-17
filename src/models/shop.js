import { message } from 'antd';
import { getShopInfoService,updateShopInfoService } from 'services/shop';

export default{
  namespace:'shop',
  state:{
    editable:true,
    shopInfo:{}
  },
  reducers:{
    saveLogo(state,{payload:shop_logo}){
      let shopInfo = {...state.shopInfo,shop_logo}
      return {...state,shopInfo}
    },
    setEditable(state){
      return{...state,editable:!state.editable}
    },
    setInfo(state,{payload:shopInfo}){
      return{...state,shopInfo}
    }
  },
  effects:{
    *getShopInfoEffect({ payload },{select,call, put}){
      const shopInfo = yield call(getShopInfoService, payload);
      yield put({
        type:'setInfo',
        payload:shopInfo.data
      });
    },
    *submitEdit({ payload },{select,call, put}){
      const data = yield call(updateShopInfoService,payload);
      if (data && data.success){
        message.success(data.msg);
        yield put({
          type:'setEditable'
        })
      }else{
        message.error(data.msg);
      }
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return history.listen(({ pathname, query }) => {

        let arr = pathname.split('/');
        let linkType = arr[1] ? arr[1] : 'index';
        let subLink = arr[2];
        let subChildLink = arr[3];


        if(subChildLink === 'info'){
          // let link = subLink.toString();
          // const linkIndex = left.state.linklist[linkType].indexOf(link);
          dispatch({
            type:'getShopInfoEffect'
          })
        }
      });
    }
  }
}
