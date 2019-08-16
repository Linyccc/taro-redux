import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Image,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import { AtTag } from "taro-ui";
import styles from "./active.module.scss";
import Toutiao from "@/assets/image/toutiao.jpg";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const res = Taro.getSystemInfoSync();
    const scrollWidth = {
      width: res.windowWidth - 72 + "px"
    };
    return (
      <View className={styles.active}>
        <View className={styles.active_left}>
          <Image src={Toutiao} />
        </View>
        <Swiper
          className={styles.active_swiper}
          style={scrollWidth}
          circular
          autoplay
          vertical
          interval={3000}
        >
          <SwiperItem className={styles.active_swiperItem}>
            <View>
              <AtTag type="primary" circle size="small">
                热门
              </AtTag>
              <Text className={styles.active_swiperText}>
                洗脸用毛巾还是棉柔巾好？正确说法是这样
              </Text>
            </View>
            <View>
              <AtTag type="primary" circle size="small">
                热门
              </AtTag>
              <Text className={styles.active_swiperText}>
                什么是厨房垃圾处理器？它有多重要
              </Text>
            </View>
          </SwiperItem>
          <SwiperItem className={styles.active_swiperItem}>
            <View>
              <AtTag type="primary" circle size="small">
                爆款
              </AtTag>
              <Text className={styles.active_swiperText}>
                蓝牙耳机不会选？看完这个你就知道了
              </Text>
            </View>
            <View>
              <AtTag type="primary" circle size="small">
                爆款
              </AtTag>
              <Text className={styles.active_swiperText}>
                夏天出行轻“妆”上阵，梦妆陪你元气满满！
              </Text>
            </View>
          </SwiperItem>
          <SwiperItem className={styles.active_swiperItem}>
            <View>
              <AtTag type="primary" circle size="small">
                头条
              </AtTag>
              <Text className={styles.active_swiperText}>
                想知道怎么给孩子挑牛奶吗？
              </Text>
            </View>
            <View>
              <AtTag type="primary" circle size="small">
                头条
              </AtTag>
              <Text className={styles.active_swiperText}>
                锦鲤加持，不辜负努力的你！
              </Text>
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}

export default Index;
