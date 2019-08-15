import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, ScrollView, Image } from "@tarojs/components";
import styles from "./index.module.scss";
import {
  AtBadge,
  AtFloatLayout,
  AtTag,
  AtInputNumber,
  AtButton
} from "taro-ui";
import cart from "@/assets/image/cart_light.png";
import home from "@/assets/image/home_light.png";
import service from "@/assets/image/service_light.png";
import { connect } from "@tarojs/redux";
import { setCartlist } from "@/actions/counter";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      tagData: "", //加入购物车浮层数据
      currentData: "", //当前被选中的数据
      number: 1
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  show = () => {
    Taro.showToast({
      title: "目前仅提供了加入购物车功能",
      icon: "none",
      duration: 1000
    });
  };

  enterCart = () => {
    Taro.switchTab({
      url: "/pages/cart/index"
    });
  };

  goCart = data => {
    const { status } = this.props;
    if (status === 1) {
      Taro.navigateTo({
        url: "/pages/login/emailLogin/index"
      });
    } else {
      data.map((item, index) => {
        if (index === 0) {
          item.active = true;
          // 判断是否还有子集
          if (item.children) {
            item.children.size.map((a, b) => {
              if (b === 0) {
                a.active = true;
              } else {
                a.active = false;
              }
            });
          }
          //--- ---
          this.setState({
            currentData: item
          });
        } else {
          item.active = false;
        }
      });
      this.setState({
        tagData: data,
        isOpened: true
      });
    }
  };

  tag = e => {
    let { tagData } = this.state;
    tagData.map((item, index) => {
      if (item.name === e.name) {
        item.active = true;
        // 判断是否还有子集
        if (item.children) {
          item.children.size.map((a, b) => {
            if (b === 0) {
              a.active = true;
            } else {
              a.active = false;
            }
          });
        }
        //--- ---
        this.setState({
          currentData: item
        });
      } else {
        item.active = false;
      }
    });
    this.setState({
      tagData
    });
  };

  tagChildren = e => {
    let { currentData } = this.state;
    currentData.children.size.map((item, index) => {
      if (item.name === e.name) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    this.setState({
      currentData
    });
  };

  handleChange(value) {
    this.setState({
      number: value
    });
  }

  confirmButton = (data, currentData, currentName, currentId, number, e) => {
    const { dispatch } = this.props;
    dispatch(setCartlist(data, currentData, currentName, currentId, number));
    this.setState({
      isOpened: false
    });
    Taro.showToast({
      title: "添加购物车成功",
      icon: "none",
      duration: 1500
    });
  };

  render() {
    const data = this.props.data;
    const { tagData, currentData, number } = this.state;
    let currentName = currentData.name;
    let currentId = "";
    if (currentData.children) {
      currentData.children.size.map((item, index) => {
        if (item.active === true) {
          currentName = `${currentData.name},${item.name}`;
          currentId = item.id;
        }
      });
    } else {
      currentId = currentData.id;
    }
    let atBage = this.props.cartList.length;
    return (
      <View className={styles.footer_item}>
        <View className={styles.footer_item_nav} onClick={this.show}>
          <Image src={home} className={styles.image} />
        </View>
        <View className={styles.footer_item_nav} onClick={this.show}>
          <Image src={service} className={styles.image} />
        </View>
        <View className={styles.footer_item_nav} onClick={this.enterCart}>
          <AtBadge value={atBage}>
            <Image src={cart} className={styles.image} />
          </AtBadge>
        </View>
        <View className={styles.footer_item_nav_gobuy} onClick={this.show}>
          <Text className={styles.footer_text}>立即购买</Text>
        </View>
        <View
          className={styles.footer_item_nav_gocart}
          onClick={this.goCart.bind(this, data)}
        >
          <Text className={styles.footer_cart_text}>加入购物车</Text>
        </View>

        {/* 浮动弹层*/}
        <AtFloatLayout isOpened={this.state.isOpened} scrollY>
          <View className={styles.floatLayout}>
            {/* 头部信息 */}
            <View className={styles.floatLayout_info}>
              <Image className={styles.image} src={currentData.image} />
              <View className={styles.floatLayout_info_wrap}>
                <View className={styles.floatLayout_info_wrap_price}>
                  <Text className={styles.currentPrice}>
                    ￥{currentData.price}
                  </Text>
                  {currentData.prePrice ? (
                    <Text className={styles.currentPrePrice}>
                      ￥{currentData.prePrice}
                    </Text>
                  ) : (
                    ""
                  )}
                </View>
                <View className={styles.floatLayout_info_wrap_tip}>
                  <Text className={styles.currentType}>{currentName}</Text>
                </View>
              </View>
            </View>
            {/* body 滚动 */}

            <ScrollView
              scrollY
              className="scrollview"
              scrollWithAnimation
              style={"height:220px"}
            >
              <View className={styles.floatLayout_group}>
                <View className={styles.floatLayout_group_title}>
                  <Text>规格</Text>
                </View>
                <View className={styles.floatLayout_group_list}>
                  {tagData
                    ? tagData.map((item, index) => {
                        const key = index;
                        return (
                          <AtTag
                            key={key}
                            size="small"
                            circle
                            name={item.name}
                            className="margin-right-small,margin-bottom-df"
                            onClick={this.tag.bind(this)}
                            active={item.active}
                          >
                            {item.name}
                          </AtTag>
                        );
                      })
                    : ""}
                </View>
              </View>

              {currentData.children ? (
                <View className={styles.floatLayout_group}>
                  <View className={styles.floatLayout_group_title}>
                    <Text>{currentData.children.name}</Text>
                  </View>
                  <View className={styles.floatLayout_group_list}>
                    {currentData.children.size.map((item, index) => {
                      const key = index;
                      return (
                        <AtTag
                          key={key}
                          size="small"
                          circle
                          name={item.name}
                          className="margin-right-small,margin-bottom-df"
                          onClick={this.tagChildren.bind(this)}
                          active={item.active}
                        >
                          {item.name}
                        </AtTag>
                      );
                    })}
                  </View>
                </View>
              ) : (
                ""
              )}

              <View className={styles.floatLayout_group_number}>
                <Text>数量</Text>
                <AtInputNumber
                  min={1}
                  max={30}
                  step={1}
                  value={number}
                  onChange={this.handleChange.bind(this)}
                />
              </View>
            </ScrollView>

            {/* 底部button */}
            <View className={styles.confirmButton}>
              <Button
                onClick={this.confirmButton.bind(
                  this,
                  this.props.dataPlus,
                  currentData,
                  currentName,
                  currentId,
                  number
                )}
              >
                确定
              </Button>
            </View>
          </View>
        </AtFloatLayout>
      </View>
    );
  }
}

export default connect(({ counter }) => ({
  status: counter.status,
  cartList: counter.cartList
}))(Index);
