import Taro from "@tarojs/taro";
import getBaseUrl from "./baseUrl";
import interceptors from "./interceptors";
import { GLOBAL_CONFIG } from "../../constants/globalConfig.js";
import { isObject } from "../common.js";

let _active = 0; // 计数器,保证任意多个请求,页面上只有一个全局遮罩

interceptors.forEach(i => Taro.addInterceptor(i));

export default function request(url, options) {
  const contentType =
    (isObject(options) && options.contentType) || "application/json";

  const defaultOptions = {
    url: /^http(s)*:\/\//.test(url) ? url : getBaseUrl(url) + url,
    data: "",
    showMask: false,
    showError: true,
    method: "post",
    header: {
      "content-type": contentType,
      Authorization: Taro.getStorageSync("Authorization")
    }
  };

  let newOptions = { ...defaultOptions, ...options };

  newOptions = {
    ...newOptions,
    complete: function(res) {
      if (newOptions.showMask && --_active === 0) {
        // 接口耗时太短，避免闪现
        setTimeout(function() {
          Taro.hideLoading();
        }, 300);
      }
      if (
        res.data.resultCode !== "0" &&
        newOptions.showError &&
        res.data.resultMsg
      ) {
        Taro.showToast({
          title: res.data.resultMsg,
          icon: "none",
          duration: 2000
        });
      }
    }
  };

  if (newOptions.showMask && _active++ === 0) {
    Taro.showLoading({ title: GLOBAL_CONFIG.LOADING_TEXT });
  }

  return Taro.request(newOptions);
}
