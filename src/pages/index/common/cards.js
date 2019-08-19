import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import styles from "./cards.module.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const res = Taro.getSystemInfoSync();
    const width = (res.windowWidth - 24) / 2 + "px";
    const height = (res.windowWidth - 24) / 2 / 2.59 + "px";
    const imageStyle = {
      height: height,
      width: width
    };

    return (
      <View className={styles.cards}>
        <View className={styles.cards_item1} style={imageStyle} />
        <View className={styles.cards_item2} style={imageStyle} />
      </View>
    );
  }
}

export default Index;
