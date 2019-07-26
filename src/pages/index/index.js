import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Swiper,
  SwiperItem,
  Image
} from "@tarojs/components";
import { AtIcon, AtGrid } from "taro-ui";
import { connect } from "@tarojs/redux";
import { add, minus, asyncAdd, self } from "../../actions/counter";
// import styles from "./index.module.scss";
import swiper1 from "../../assets/image/swiper1.jpg";
import swiper2 from "../../assets/image/swiper2.jpg";
import swiper3 from "../../assets/image/swiper3.jpg";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  // add() {
  //   const { dispatch } = this.props;
  //   dispatch(add());
  // }
  // dec() {
  //   const { dispatch } = this.props;
  //   dispatch(minus());
  // }
  // asyncAdd() {
  //   const { dispatch } = this.props;
  //   dispatch(asyncAdd({ key: "1" }));
  // }
  // self() {
  //   const { dispatch } = this.props;
  //   dispatch(self({ name: "2" }));
  // }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Swiper
          className="home-banner"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem className="home-banner__swiper">
            <View className="demo-text-1">
              <Image style={"width:100%;height:150px"} src={swiper1} />
            </View>
          </SwiperItem>
          <SwiperItem className="home-banner__swiper">
            <View className="demo-text-2">
              <Image style={"width:100%;height:150px"} src={swiper2} />
            </View>
          </SwiperItem>
          <SwiperItem className="home-banner__swiper">
            <View className="demo-text-3">
              <Image style={"width:100%;height:150px"} src={swiper3} />
            </View>
          </SwiperItem>
        </Swiper>
        <View className="gb-bar">
          <View className="action">
            <AtIcon
              value="volume-plus"
              size="14"
              className="margin-right-small"
            />
            <Text>我的业务</Text>
          </View>
        </View>
        <AtGrid
          mode="rect"
          hasBorder={false}
          data={[
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
              value: "领取中心"
            },
            {
              image:
                "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
              value: "找折扣"
            },
            {
              image:
                "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
              value: "领会员"
            },
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
              value: "新品首发"
            },
            {
              image:
                "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
              value: "领京豆"
            },
            {
              image:
                "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
              value: "手机馆"
            }
          ]}
        />
      </View>
    );
  }
}

// export default connect(({ counter }) => ({
//   counter: counter.num
// }))(Index);
export default Index;
