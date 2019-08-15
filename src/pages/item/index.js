import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, ScrollView, Image } from "@tarojs/components";
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux";
import SwiperView from "./swiper/index";
import InfoBase from "./infoBase/index";
import InfoParam from "./infoParam/index";
import Detail from "./detail/index";
import Footer from "./footer/index";

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
          <Footer data={itemData.detail} dataPlus={itemData} />
        </View>
      </View>
    );
  }
}

export default connect(({ counter }) => ({
  itemData: counter.itemData
}))(Index);
