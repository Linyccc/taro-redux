import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, ScrollView } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Profile from "./profile/index";
import Activity from "./activity/index";
import Content from "./content/index";
import styles from "./index.module.scss";
import { getWindowHeight } from "@/utils/style";
import user from "@/assets/image/user.png";
import { connect } from "@tarojs/redux";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  config = {
    navigationBarTitleText: "个人中心"
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    const { status } = this.props;
    let userInfo = "";
    if (status === 1) {
      userInfo = "";
    } else {
      userInfo = {
        avatar: user,
        login: 1,
        nickname: "大怪兽",
        uid: "官方认证"
      };
    }
    return (
      <View className={styles.user}>
        <ScrollView scrollY style={{ height: getWindowHeight() }}>
          <Profile userInfo={userInfo} />
          <Content userInfo={userInfo} />
        </ScrollView>
        <View className={styles.user_activity}>
          <Activity />
        </View>
      </View>
    );
  }
}

export default connect(({ counter }) => ({
  status: counter.status
}))(Index);
