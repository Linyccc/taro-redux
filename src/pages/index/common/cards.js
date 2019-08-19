import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import styles from "./cards.module.scss";
import card1 from "@/assets/image/card1.png";
import card2 from "@/assets/image/card2.png";

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
        <View style={"margin-right:8px"}>
          <Image className={styles.cards_item} src={card1} style={imageStyle} />
        </View>
        <View>
          <Image src={card2} style={imageStyle} className={styles.cards_item} />
        </View>
      </View>
    );
  }
}

export default Index;
