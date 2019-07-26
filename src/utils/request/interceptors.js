import Taro from "@tarojs/taro";
import { HTTP_STATUS } from "./config";
import { hasLogin, pageToLogin } from "../common.js";

const customInterceptor = chain => {
  const requestParams = chain.requestParams;

  return chain.proceed(requestParams).then(res => {
    if (false) {
      Taro.showModal({
        content: "请先登录",
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#7f7f7f",
        confirmText: "登录",
        confirmColor: "#2d8cf0",
        success(res) {
          if (res.confirm) {
            pageToLogin();
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
      return Promise.reject("未登录");
    } else if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      // 只要请求成功，不管返回什么状态码，都走这个回调
      return Promise.reject("请求资源不存在");
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject("服务端出现了问题");
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      Taro.setStorageSync("Authorization", "");
      pageToLogin();
      // TODO 根据自身业务修改
      return Promise.reject("没有权限访问");
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      Taro.setStorageSync("Authorization", "");
      pageToLogin();
      return Promise.reject("需要鉴权");
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data;
    }
  });
};

const interceptors = [customInterceptor, Taro.interceptors.logInterceptor];

export default interceptors;
