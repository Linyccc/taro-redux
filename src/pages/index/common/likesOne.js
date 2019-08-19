import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Image,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import styles from "./likesOne.module.scss";
import { AtIcon } from "taro-ui";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specially: "父母倍有面榜"
    };
  }

  componentDidMount() {}
  onChange = event => {
    let specially = "";
    switch (event.detail.current) {
      case 0:
        specially = "父母倍有面榜";
        break;
      case 1:
        specially = "装修美家榜";
        break;
      case 2:
        specially = "极物生活榜";
        break;
      default:
        specially = "父母倍有面榜";
    }
    this.setState({
      specially
    });
  };

  render() {
    const res = Taro.getSystemInfoSync();

    return (
      <View className={styles.likes}>
        <View className={styles.likes_swiper}>
          <View className={styles.likes_swiper_item_left}>
            <View className={styles.title}>
              <AtIcon value="bookmark" size="16" color="#F00" />
              <Text>专享优惠</Text>
            </View>
            <Text className={styles.desc}>{this.state.specially}</Text>
          </View>
          <View className={styles.likes_swiper_item_right}>
            <Swiper
              className={styles.swiper}
              circular
              autoplay
              interval={3000}
              onChange={this.onChange}
            >
              <SwiperItem className={styles.swiper_item}>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010808682858_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>高钙奶品</Text>
                </View>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000666285404_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>舒适按摩</Text>
                </View>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000693841898_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>在家足疗</Text>
                </View>
              </SwiperItem>
              <SwiperItem className={styles.swiper_item}>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000620723825_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>安睡卧室</Text>
                </View>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image1.suning.cn/uimg/b2c/qrqm/0070139843000000010597421942_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>时尚客厅</Text>
                </View>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010574747639_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>灯光照明</Text>
                </View>
              </SwiperItem>
              <SwiperItem className={styles.swiper_item}>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010221787021_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>精选优品</Text>
                </View>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000010642276883_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>美妆博主</Text>
                </View>
                <View className={styles.swiper_card}>
                  <Image
                    src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010579337579_200x200.jpg"
                    className={styles.swiper_card_image}
                  />
                  <Text className={styles.swiper_card_text}>洗护用品</Text>
                </View>
              </SwiperItem>
            </Swiper>
          </View>
        </View>
        <View className={styles.likes_pre}>
          <View className={styles.likes_pre_item}>
            <Text className={styles.likes_title}>甄选营养好奶</Text>
            <Text className={styles.likes_desc}>24h热销6万件</Text>
            <View className={styles.likes_pre_item_imageGroup}>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000154722868_200x200.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image3.suning.cn/uimg/b2c/qrqm/0070660883000000010853710517_200x200.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
            </View>
          </View>
          <View className={styles.likes_pre_item}>
            <Text className={styles.likes_title}>日用家纺</Text>
            <Text className={styles.likes_desc}>家纺大促 满300-50</Text>
            <View className={styles.likes_pre_item_imageGroup}>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image1.suning.cn/uimg/cms/img/155468697934125679.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image1.suning.cn/uimg/cms/img/154772621803968969.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
            </View>
          </View>
        </View>
        <View className={styles.likes_pre}>
          <View className={styles.likes_pre_item} style={"border-bottom:none"}>
            <Text className={styles.likes_title}>家电专场</Text>
            <Text className={styles.likes_desc}>30天包退 365天包换</Text>
            <View className={styles.likes_pre_item_imageGroup}>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000010517489156_200x200.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000658519899_200x200.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
            </View>
          </View>
          <View className={styles.likes_pre_item} style={"border-bottom:none"}>
            <Text className={styles.likes_title}>美味好奶</Text>
            <Text className={styles.likes_desc}>生活更有味道</Text>
            <View className={styles.likes_pre_item_imageGroup}>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://imgservice.suning.cn/uimg1/b2c/image/n_mOwLUif_FNzWhFBW7fCg.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
              <View className={styles.likes_pre_item_image}>
                <Image
                  src="https://imgservice.suning.cn/uimg1/b2c/image/jhhYDtC1YqgcY0hG6DbN2A.jpg"
                  className={styles.likes_pre_item_image_item}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
