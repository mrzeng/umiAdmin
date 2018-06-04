import intl from 'react-intl-universal';
import {getTree,postSubTree,updateTreeName} from 'services/albums';
const albums = {
  namespace:'albums',
  state:{
    currentTree: '-1',
    currentEditTree:'-1',
    tree:[],
    total:'0',
    refresh:0,
    openAll:true,
    actions:{
      showDelete:false,
      showEdit:false,
      showAdd:true
    }
  },
  reducers:{
    saveTree(state,{payload:tree}){
      return { ...state,tree}
    },
    saveTotal(state,{payload:total}){
      return { ...state,total}
    },
    toggleOpen(state,{payload:id}){
      if(id === '-1'){
        return { ...state,openAll:!state.openAll}
      }
      const newTree = state.tree;
      let a = state.refresh;
      a++;
      newTree.map(item => {
        if(item.id === id){
          return item.open = ! item.open
        }
      });
      return { ...state,tree:newTree,refresh:a}
    },
    setCurrentTree(state,{payload:currentTree,actions,currentEditTree}){
      return { ...state,currentTree,actions,currentEditTree}
    },
    setCurrentEditTree(state,{payload:currentEditTree}){
      return { ...state,currentEditTree}
    },
    setDisplay(state,{payload:display}){
      return{ ...state,display}
    },
    appendSubTree(state,{payload:tree,currentEditTree,currentTree}){
      return{ ...state,tree,currentEditTree,currentTree}
    }

  },

  effects:{
    *getTree({ payload },{select,call, put}){
      const {data} = yield call(getTree);
      const {tree,total} = data;
      const currentEditTree = -1;
      yield put({
        type:'saveTree',
        payload:tree
      });
      yield put({
        type:'saveTotal',
        payload:total
      });
      yield put({
        type:'setCurrentEditTree',
        payload:currentEditTree
      });
    },
    *updateTreeName({payload},{select,call,put}){

      const data = yield call(updateTreeName, payload);

      if(data && data.success){
        const {tree,total} = data;
        const currentEditTree = -1;
        yield put({
          type:'getTree'
        });
        yield put({
          type:'setCurrentEditTree',
          payload:currentEditTree
        });
      }else{}
    },
    *postSubTree({payload:parentID},{select,call,put}){
      const {data} = yield call(postSubTree);

    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return dispatch({
        type: 'getTree',
      });
    }
  }
};

export default albums;
