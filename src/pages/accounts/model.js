import { addRule, queryRule, removeRule, updateRule } from './service';

const Model = {
  namespace: 'listAndtableList1',
  state: {
    data: {
      list: [
        {
          FirstName: 'Abigail',
          LastName: 'Fernandez',
          EmailAddress: 'apfernandez2@up.edu.ph',
          PhoneNumber: '09219641792',
        },
        {
          FirstName: 'Abigail',
          LastName: 'Fernandez',
          EmailAddress: 'apfernandez2@up.edu.ph',
          PhoneNumber: '09219641792',
        },
        {
          FirstName: 'Abigail',
          LastName: 'Fernandez',
          EmailAddress: 'apfernandez2@up.edu.ph',
          PhoneNumber: '09219641792',
        },
        {
          FirstName: 'Abigail',
          LastName: 'Fernandez',
          EmailAddress: 'apfernandez2@up.edu.ph',
          PhoneNumber: '09219641792',
        },
        {
          FirstName: 'Abigail',
          LastName: 'Fernandez',
          EmailAddress: 'apfernandez2@up.edu.ph',
          PhoneNumber: '09219641792',
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
