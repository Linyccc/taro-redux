import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, ScrollView, Image } from "@tarojs/components";
import { AtBadge } from "taro-ui";
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux";
import cart from "@/assets/image/cart_light.png";
import home from "@/assets/image/home_light.png";
import service from "@/assets/image/service_light.png";
import SwiperView from "./swiper/index";
import InfoBase from "./infoBase/index";
import InfoParam from "./infoParam/index";
import Detail from "./detail/index";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  config = {
    navigationBarTitleText: "商品详情"
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.itemData);
  }

  render() {
    // console.log(this.props.itemData);
    const itemData = this.props.itemData;
    const res = Taro.getSystemInfoSync();
    const scrollViewHeight = {
      height: res.windowHeight - 50 + "px"
    };
    return (
      <View className={styles.main}>
        {/* 滚动部分 */}
        <ScrollView
          scrollY
          className="scrollview"
          scrollWithAnimation
          style={scrollViewHeight}
        >
          <SwiperView image={itemData.swiper} />
          <InfoBase info={itemData} />
          <InfoParam info={itemData.itemInfo} />
          <Detail />
        </ScrollView>

        {/* 底部 */}
        <View className={styles.footer}>
          <View className={`at-row ${styles.footer_item}`}>
            <View className={`at-col at-col-2 ${styles.footer_item_nav}`}>
              <Image src={home} className={styles.image} />
            </View>
            <View className={`at-col at-col-2 ${styles.footer_item_nav}`}>
              <Image src={service} className={styles.image} />
            </View>
            <View className={`at-col at-col-2 ${styles.footer_item_nav}`}>
              <AtBadge value={2}>
                <Image src={cart} className={styles.image} />
              </AtBadge>
            </View>
            <View className={`at-col at-col-3 ${styles.footer_item_nav}`}>
              <Text className={styles.footer_text}>立即购买</Text>
            </View>
            <View
              className={`at-col at-col-3 ${styles.footer_item_nav_gocart}`}
            >
              <Text className={styles.footer_cart_text}>加入购物车</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(({ counter }) => ({
  itemData: counter.itemData
}))(Index);
