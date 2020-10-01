import { addRule, queryRule, removeRule, updateRule, queryBands } from './service';

const Model = {
  namespace: 'listAndtableList1',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {
    *getItems(_, {call, put}) {

      const response = yield call(queryBands);

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
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
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
