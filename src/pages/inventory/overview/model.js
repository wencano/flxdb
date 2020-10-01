import { addRule, queryRule, removeRule, updateRule, queryProducts, removeProduct } from './service';

const Model = {
  namespace: 'listoverview',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {
    *getItems(_, {call, put}) {
      const response = yield call(queryProducts);
      const api_payload = {
        list: response,
        pagination: {}
      };
      yield put({
        type: 'save',
        payload: api_payload,
      });
    },

    *fetch({ payload }, { call, put }) {
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *remove({ payload, callback }, { call, put }) {
      const deleted = yield call(removeProduct, payload);
      const response = yield call(queryProducts) // retrieve updated list of products
      yield put({
        type: 'save',
        payload: response,
      });
      callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, data: action.payload };
    },
  },
};
export default Model;
