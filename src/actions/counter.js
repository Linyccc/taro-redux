import { ListData, RecommendList } from "../constants/counter";
import request from "../utils/request/index";
// 同步
export const listData = list => {
  return {
    type: ListData,
    list: list
  };
};

export const recommendList = list => {
  return {
    type: RecommendList,
    recommendlist: list
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
