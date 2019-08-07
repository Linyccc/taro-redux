import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import styles from "./index.module.scss";

export default class Empty extends Component {
  render() {
    const { list } = this.props.list;
    let content = null;
    for (var i = 0; i < list.lenght; i++) {
      content = (
        <View className="at-row">
          <View className="at-col" style={"text-align:center"}>
            <Image
              src="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
              className={styles.list_img}
            />
            <View className={styles.list_title}>限时秒杀</View>
          </View>
        </View>
      );
    }
    return (
      <View className="enter_List">
        {/* <View className="at-row">
          <View className="at-col" style={"text-align:center"}>
            <Image
              src="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
              className={styles.list_img}
            />
            <View className={styles.list_title}>限时秒杀</View>
          </View>
        </View> */}
        <View className="at-row" />
      </View>
    );
  }
}
