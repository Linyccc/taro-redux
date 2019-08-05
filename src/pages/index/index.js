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
import HomeTitle from "@/components/HomeTitle";
import Recommend from "./common/recommend.js";
import styles from "./index.module.scss";
import Empty from "@/components/Empty";
import LoadDown from "@/components/LoadDown";
import { connect } from "@tarojs/redux";
import { queryRecommend } from "@/actions/counter";
import swiper1 from "../../assets/image/swiper1.jpg";
import swiper2 from "../../assets/image/swiper2.jpg";
import swiper3 from "../../assets/image/swiper3.jpg";
import active from "../../assets/image/active.gif";
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  constructor(props) {
    super(props);
    this.state = {
      showMask: true, //初始化加载遮罩
      params: {
        page: 1,
        pageSize: 20 //默认20条
      },
      list: []
    };
  }

  getList(params) {
    const { dispatch } = this.props;
    dispatch(queryRecommend(params));
  }

  componentDidMount() {
    this.getList({ key: 1 });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list
    });
  }

  render() {
    return (
      <View>
        <Swiper
          className="home-banner"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className={styles.swiper}>
              <Image src={swiper1} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className={styles.swiper}>
              <Image src={swiper2} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className={styles.swiper}>
              <Image src={swiper3} />
            </View>
          </SwiperItem>
        </Swiper>
        <HomeTitle title="专属权益" link="#" />
        <AtGrid
          mode="rect"
          hasBorder={false}
          data={[
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
              value: "限时秒杀"
            },
            {
              image:
                "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
              value: "抢爆款"
            },
            {
              image:
                "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
              value: "超市购物"
            },
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
              value: "砍价免单"
            },
            {
              image:
                "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
              value: "9.9特卖"
            },
            {
              image:
                "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
              value: "品牌清仓"
            }
          ]}
        />
        <View className={styles.active}>
          <Image src={active} />
        </View>
        <Recommend list={this.state.list} />
      </View>
    );
  }
}

export default connect(({ counter }) => ({
  list: counter.recommendList
}))(Index);
