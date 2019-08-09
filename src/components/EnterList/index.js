import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtBadge } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  render() {
    const list = this.props.list;
    return (
      <View className="enter_List">
        <View className="at-row">
          {list.map((item, index) => {
            let key = index;
            return (
              <View className="at-col" style="text-align:center" key={key}>
                <AtBadge value={item.do} maxValue={99}>
                  <Image src={item.image} className="user_content-order_img" />
                </AtBadge>
                <View className="user_content-order_name">{item.value}</View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
