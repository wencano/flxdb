import { queryBasicProfile, getItem } from './service';

const Model = {
  namespace: 'profileAndbasic',
  state: {
    basicGoods: [],
  },
  effects: {
    *fetch(payload, {call, put}) {
      const response = yield call(getItem, payload)
      yield put({
        type: 'save',
        payload: response,
      })
    },

    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicProfile);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, basicGoods: action.payload };
    },
  },
};
export default Model;
