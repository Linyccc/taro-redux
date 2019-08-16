import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import styles from "./cards.module.scss";
import Red from "@/assets/image/red.png";
import Pink from "@/assets/image/pink.png";
import Orange from "@/assets/image/orange.png";
import Blue from "@/assets/image/blue.png";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const res = Taro.getSystemInfoSync();
    const width = (res.windowWidth - 40) / 4 + "px";
    const height = (res.windowWidth - 40) / 4 / 0.64 + "px";
    const imageStyle = {
      height: height,
      width: width
    };

    return (
      <View className={styles.cards}>
        <View className={styles.cards_item1} style={imageStyle}>
          aaa
        </View>
        <View className={styles.cards_item2} style={imageStyle}>
          aaa
        </View>
        <View className={styles.cards_item3} style={imageStyle}>
          aaa
        </View>
        <View className={styles.cards_item4} style={imageStyle}>
          aaa
        </View>
      </View>
    );
  }
}

export default Index;
