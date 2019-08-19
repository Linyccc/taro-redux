import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import styles from "./likes.module.scss";
import { AtCountdown } from "taro-ui";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const res = Taro.getSystemInfoSync();

    return (
      <View className={styles.likes}>
        <View className={styles.likes_pre}>
          <View className={styles.likes_pre_item}>
            <Text className={styles.likes_title}>限时抢购</Text>
            <Text className={styles.likes_desc}>低价抢苹果X</Text>
            <View className={styles.likes_pre_item_imageGroup}>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image3.suning.cn/uimg/cms/img/156317651546760648.png"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image1.suning.cn/uimg/cms/img/156317651141708528.png"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
            </View>
          </View>
          <View className={styles.likes_pre_item}>
            <Text className={styles.likes_title}>以旧换新</Text>
            <Text className={styles.likes_desc}>省心更省钱</Text>
            <View className={styles.likes_pre_item_imageGroup}>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image1.suning.cn/uimg/cms/img/156317664873985788.png"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image2.suning.cn/uimg/cms/img/156317664395821269.png"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
            </View>
          </View>
        </View>
        <View className={styles.likes_last}>
          <View className={styles.likes_last_item}>
            <Text className={styles.likes_title}>汽车生活</Text>
            <Text className={styles.likes_desc}>低至39800</Text>

            <Image
              src="https://image1.suning.cn/uimg/cms/img/156317749614588216.jpg"
              className={styles.likes_last_item_image}
            />
          </View>
          <View className={styles.likes_last_item}>
            <Text className={styles.likes_title}>苏宁3C</Text>
            <Text className={styles.likes_desc}>定金最高抵押</Text>

            <Image
              src="https://image1.suning.cn/uimg/cms/img/156611193891844356.jpg"
              className={styles.likes_last_item_image}
            />
          </View>
          <View className={styles.likes_last_item}>
            <Text className={styles.likes_title}>帮客服务</Text>
            <Text className={styles.likes_desc}>到家生活服务</Text>

            <Image
              src="https://image3.suning.cn/uimg/cms/img/154693630298587535.jpg"
              className={styles.likes_last_item_image}
            />
          </View>
          <View className={styles.likes_last_item}>
            <Text className={styles.likes_title}>运动户外</Text>
            <Text className={styles.likes_desc}>大牌特惠</Text>

            <Image
              src="https://image3.suning.cn/uimg/cms/img/155783973957487251.jpg"
              className={styles.likes_last_item_image}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
