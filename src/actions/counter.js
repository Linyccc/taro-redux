import { LISTDATA, RECOMMENDLIST, LOGIN, KEEPITEM } from "../constants/counter";
import request from "../utils/request/index";
// 同步
export const listData = list => {
  return {
    type: LISTDATA,
    list: list
  };
};

export const recommendList = list => {
  return {
    type: RECOMMENDLIST,
    recommendlist: list
  };
};

export const keepLogin = value => {
  return {
    type: LOGIN,
    status: value
  };
};

export const keepItem = value => {
  return {
    type: KEEPITEM,
    itemData: value
  };
};

// 异步
export function queryData(params, showMask) {
  return dispatch => {
    request(
      "https://easy-mock.com/mock/5d2bdbfe8f337566364f60b9/example/super/api",
      {
        method: "get",
        data: params,
        showMask: showMask
      }
    ).then(res => {
      dispatch(listData(res.resultData));
    });
  };
}
// 值得推荐
export function queryRecommend(params, showMask) {
  return dispatch => {
    request(
      "https://easy-mock.com/mock/5d2bdbfe8f337566364f60b9/example/redux/recommend",
      {
        method: "get",
        data: params,
        showMask: showMask
      }
    ).then(res => {
      dispatch(recommendList(res.resultData));
    });
  };
}
//登录
export function login(params) {
  let value = "";
  return dispatch => {
    if (params.user === "admin" && params.password === "123") {
      value = 0;
    } else {
      value = 1;
    }
    dispatch(keepLogin(value));
  };
}
