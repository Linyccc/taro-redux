import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import empty from "./assets/noneData.png";
import "./index.scss";

export default class Empty extends Component {
  render() {
    return (
      <View className="user-empty">
        <Image className="user-empty_img" src={empty} />
        <Text className="user-empty_txt">暂无数据哦~</Text>
      </View>
    );
  }
}
