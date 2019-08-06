import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, ScrollView } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Profile from "./profile/index";
import Activity from "./activity/index";
import styles from "./index.module.scss";
import { getWindowHeight } from "@/utils/style";

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
    const userInfo = "";
    return (
      <View className={styles.user}>
        <ScrollView scrollY style={{ height: getWindowHeight() }}>
          <Profile userInfo={userInfo} />
        </ScrollView>
        <View className={styles.user_activity}>
          <Activity />
        </View>
      </View>
    );
  }
}

export default Index;
