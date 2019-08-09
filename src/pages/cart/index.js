import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Empty from "./empty";
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux";
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

  login = () => {
    Taro.navigateTo({
      url: "/pages/login/emailLogin/index"
    });
  };

  render() {
    const { status } = this.props;
    let content = null;
    if (status === 1) {
      content = (
        <View>
          <Empty text="请先登录" />
          <View className={styles.cart_login}>
            <AtButton type="primary" onClick={this.login}>
              登录
            </AtButton>
          </View>
        </View>
      );
    } else {
      content = (
        <View>
          <Empty text="空空如也,去添加点东西吧~" />
        </View>
      );
    }
    return <View className={styles.cart}>{content}</View>;
  }
}

export default connect(({ counter }) => ({
  status: counter.status
}))(Index);
