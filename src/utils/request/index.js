import Taro from "@tarojs/taro";
import getBaseUrl from "./baseUrl";
import { isObject } from "../common.js";

let _active = 0; // 计数器,保证任意多个请求,页面上只有一个全局遮罩

export default function request(url, options) {
  return new Promise(function(resolve, reject) {
    const contentType =
      (isObject(options) && options.contentType) || "application/json";
    const defaultOptions = {
      url: /^http(s)*:\/\//.test(url) ? url : getBaseUrl(url) + url,
      data: "",
      showMask: false,
      method: "post",
      header: {
        "content-type": contentType
      }
    };

    let newOptions = { ...defaultOptions, ...options };

    newOptions.success = res => {
      // console.log(res);
      if (newOptions.showMask && --_active === 0) {
        // 接口耗时太短，避免闪现
        setTimeout(function() {
          Taro.hideLoading();
        }, 300);
      }
      if (`${res.data.resultCode}` == "0") {
        resolve(res.data);
      } else {
        reject(`${res.data.resultCode}`);
      }
    };
    newOptions.fail = res => {
      reject();
    };

    if (newOptions.showMask && _active++ === 0) {
      Taro.showLoading({ title: "加载中" });
    }

    return Taro.request(newOptions);
  });
}
