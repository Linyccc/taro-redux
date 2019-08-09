import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import logo from "@/assets/image/octocat.png";
import "./index.scss";

export default class Empty extends Component {
  render() {
    return (
      <View className="logo-view">
        <Image className="logo-view_img" src={logo} />
      </View>
    );
  }
}
