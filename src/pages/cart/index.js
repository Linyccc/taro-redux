import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Empty from "./empty";
import styles from "./index.module.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  config = {
    navigationBarTitleText: "购物车"
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View className={styles.cart}>
        <Empty text="请先登录" />
        <View className={styles.cart_login}>
          <AtButton type="primary">登录</AtButton>
        </View>
      </View>
    );
  }
}

export default Index;
