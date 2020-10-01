import { routerRedux } from 'dva/router';
import { strapiLogin, getFakeCaptcha, fakeAccountLogin } from './service';
import { getPageQuery, setAuthority, setStrapiAuth } from './utils/utils';

const Model = {
  namespace: 'userAndlogin',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      
      let strapi_login = {identifier: payload.userName, password: payload.password};
      const response = yield call(strapiLogin, strapi_login);

      console.log("STRAPI LOGIN ", strapi_login, response );

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully

      if (response.user) {
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }

        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      if( payload && payload.user ) {
        setAuthority(payload.user.role.type);
        setStrapiAuth(payload);
      }
      return { ...state, status: payload.status, type: payload.type };
    },
  },
};
export default Model;
