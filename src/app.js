import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  config = {
    pages: ["pages/index/index", "pages/doList/index", "pages/doneList/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "demo",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      color: "#8a8a8a",
      selectedColor: "#0081ff",
      backgroundColor: "#fbfbfb",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./assets/image/home.png",
          selectedIconPath: "./assets/image/home1.png"
        },
        {
          pagePath: "pages/doList/index",
          text: "待办列表",
          iconPath: "./assets/image/active.png",
          selectedIconPath: "./assets/image/active1.png"
        },
        {
          pagePath: "pages/doneList/index",
          text: "已办列表",
          iconPath: "./assets/image/info.png",
          selectedIconPath: "./assets/image/info1.png"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
