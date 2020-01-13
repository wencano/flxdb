import { addRule, queryRule, removeRule, updateRule } from './service';

const Model = {
  namespace: 'listAndtableList1',
  state: {
    data: {
      list: [
        {
          EmployeeID: '111-111-101',
          FullName: 'Abigail Fernandez',
          Status: 'Active',
          DateAdded: '01/13/2020',
        },
        {
          EmployeeID: '111-111-102',
          FullName: 'Abigail Fernandez',
          Status: 'Active',
          DateAdded: '01/13/2020',
        },
        {
          EmployeeID: '111-111-103',
          FullName: 'Abigail Fernandez',
          Status: 'Active',
          DateAdded: '01/13/2020',
        },
        {
          EmployeeID: '111-111-104',
          FullName: 'Abigail Fernandez',
          Status: 'Active',
          DateAdded: '01/13/2020',
        },
        {
          EmployeeID: '111-111-105',
          FullName: 'Abigail Fernandez',
          Status: 'Active',
          DateAdded: '01/13/2020',
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
