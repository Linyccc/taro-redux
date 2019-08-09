import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtButton, AtToast } from "taro-ui";
import Logo from "./logo/index";
import styles from "./index.module.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  config = {
    navigationBarTitleText: "登录"
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  login = (type, e) => {
    if (type != "email") {
      Taro.showToast({
        title: "暂时只支持邮箱登录",
        icon: "none"
      });
    } else {
      Taro.navigateTo({
        url: "/pages/login/emailLogin/index"
      });
    }
  };

  render() {
    return (
      <View className={styles.login}>
        <Logo />
        <View className={styles.loginButton}>
          <AtButton
            type="primary"
            className="margin-bottom-df"
            onClick={this.login.bind(this, "wx")}
          >
            微信登录
          </AtButton>
          <AtButton
            type="secondary"
            className="margin-bottom-df"
            onClick={this.login.bind(this, "email")}
          >
            邮箱账号登录
          </AtButton>
          <AtButton
            className="margin-bottom-df"
            onClick={this.login.bind(this, "mobile")}
          >
            手机号登录
          </AtButton>
          <View style="text-align:right">
            <Text className={styles.mobilezc}>手机号快捷注册</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
