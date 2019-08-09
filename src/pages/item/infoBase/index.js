import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import { AtTag } from "taro-ui";
import styles from "./index.module.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.itemData);
  }

  render() {
    const info = this.props.info;
    return (
      <View className={styles.info_base}>
        <View className={styles.info_base_head}>
          <View className={styles.info_base_head_wrap}>
            <Text className={styles.info_base_head_name}>
              {info.itemInfo.name}
            </Text>
            <Text className={styles.info_base_head_desc}>
              {info.itemInfo.desc}
            </Text>
          </View>
          <View className={styles.info_base_head_star}>
            <Text className={styles.info_base_head_star_txt}>99.6%</Text>
            <Text className={styles.info_base_head_star_link}>好评率></Text>
          </View>
        </View>
        <View className={styles.info_base_price}>
          <Text className={styles.info_base_price_txt}>{`￥${
            info.price
          }`}</Text>
          {info.prePrice ? (
            <Text className={styles.info_base_price_origin}>{`￥${
              info.prePrice
            }`}</Text>
          ) : (
            ""
          )}
        </View>
        <View className={styles.info_base_tag}>
          {info.label
            ? info.label.map((item, index) => {
                const key = index;
                return (
                  <AtTag type="primary" circle size="small" key={key}>
                    {item}
                  </AtTag>
                );
              })
            : null}
        </View>
      </View>
    );
  }
}

export default Index;
