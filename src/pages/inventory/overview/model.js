import { addRule, queryRule, removeRule, updateRule } from './service';

const Model = {
  namespace: 'listoverview',
  state: {
    data: {
      list: [
        {
          Image: '',
          PartID: 'C-0001',
          Quantity: '100',
          Max: '100',
          Percent: '100%',
          DateAdded: '01/13/2020',
          DateUpdated: '01/20/2020',
        },
        {
          Image: '',
          PartID: 'C-0002',
          Quantity: '3',
          Max: '100',
          Percent: '3%',
          DateAdded: '01/13/2020',
          DateUpdated: '01/30/2020',
        },
      ],
      pagination: {},
    },
  },
  effects: {
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
