import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Text,
  Button,
  Image,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import styles from "./index.module.scss";
import noPhoto from "../../../assets/image/noPhoto.png";

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
    const image = this.props.image;
    return (
      <View>
        <Swiper
          className="home-banner"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
          style={"height:750rpx"}
        >
          {image ? (
            image.map((item, index) => {
              const key = index;
              return (
                <SwiperItem key={key}>
                  <View className={styles.swiper}>
                    <Image src={item} />
                  </View>
                </SwiperItem>
              );
            })
          ) : (
            <SwiperItem>
              <View className={styles.swiper}>
                <Image src={noPhoto} />
              </View>
            </SwiperItem>
          )}
        </Swiper>
      </View>
    );
  }
}

export default Index;
