import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Text,
  Image,
  Checkbox,
  CheckboxGroup,
  ScrollView
} from "@tarojs/components";
import { AtInputNumber, AtSwipeAction, AtCurtain } from "taro-ui";
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux";
import { keepItem } from "@/actions/counter";
import Empty from "../empty";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.setState({
      list: this.props.cartList
    });
  }

  componentDidShow() {
    this.setState({
      list: this.props.cartList
    });
  }

  detail = item => {
    const { dispatch } = this.props;
    dispatch(keepItem(item));
    Taro.navigateTo({
      url: `/pages/item/index`
    });
  };

  handleChange = (item, value, e) => {
    // console.log(value, item);
    const { list } = this.state;
    list.map((a, b) => {
      if (a.currentId === item.currentId) {
        a.number = value;
        this.setState({
          list
        });
      }
    });
  };

  checkChange = (currentId, e) => {
    // console.log(currentId, e);
    const { list } = this.state;
    list.map((a, b) => {
      if (e.detail.value.length === 0) {
        if (a.currentId === currentId) {
          a.checked = false;
          this.setState({
            list
          });
        }
      } else {
        if (a.currentId === currentId) {
          a.checked = true;
          this.setState({
            list
          });
        }
      }
    });
  };

  checkAll = e => {
    const { list } = this.state;
    if (e.detail.value.length > 0) {
      list.map((item, index) => {
        item.checked = true;
      });
    } else {
      list.map((item, index) => {
        item.checked = false;
      });
    }
    this.setState({
      list
    });
  };

  placeOrder = (checkArr, checkPrice, e) => {
    console.log(checkArr, checkPrice);
    if (checkArr.length > 0) {
      Taro.showToast({
        title: "购买成功",
        icon: "none",
        duration: 1500
      });
    } else {
      Taro.showToast({
        title: "你还未选中购买商品",
        icon: "none",
        duration: 1500
      });
    }
  };

  delete = (id, e) => {
    const { list } = this.state;
    list.map((item, index) => {
      if (item.currentId == id) {
        list.splice(index, 1);
      }
    });
    this.setState({
      list
    });
  };

  render() {
    let { list } = this.state;
    // console.log(list);
    // ---- 全选，已选，价格的判断
    let isCheckAll = true; //是否全选
    let checkAllText = "全选";
    let checkArr = []; //记录选中项
    let checkPrice = 0; //选中物品的价格合计
    for (var value of list) {
      if (value.checked === false) {
        isCheckAll = false;
      } else {
        checkArr.push(value);
      }
    }
    if (checkArr.length < list.length && checkArr.length > 0) {
      checkAllText = `已选(${checkArr.length})`;
    }

    if (checkArr.length > 0) {
      checkArr.map((item, index) => {
        checkPrice =
          parseFloat(item.currentData.price) * parseFloat(item.number) +
          checkPrice;
        checkPrice = Math.round(checkPrice * 100) / 100;
      });
    } else {
      checkPrice = "0.00";
    }

    //-- -- ---- ----

    const res = Taro.getSystemInfoSync();
    const scrollViewHeight = {
      height: res.windowHeight - 50 + "px"
    };
    const infoWidth = {
      width: res.windowWidth - 177 + "px"
    };
    return list.length > 0 ? (
      <View className={styles.cart}>
        <ScrollView
          scrollY
          className={styles.scrollView}
          scrollWithAnimation
          style={scrollViewHeight}
        >
          {list.map((item, index) => {
            const key = index;
            return (
              <AtSwipeAction
                key={key}
                className="margin-bottom-small"
                options={[
                  {
                    text: "删除",
                    style: {
                      backgroundColor: "#FF4949"
                    }
                  }
                ]}
                onClick={this.delete.bind(this, item.currentId)}
              >
                <View className={styles.listItem}>
                  <View className={styles.check}>
                    <CheckboxGroup
                      onChange={this.checkChange.bind(this, item.currentId)}
                    >
                      <Checkbox
                        value={item.currentId}
                        checked={item.checked}
                        color="#0081ff"
                      />
                    </CheckboxGroup>
                  </View>
                  <Image
                    className={styles.image}
                    src={item.currentData.image}
                    onClick={this.detail.bind(this, item.data)}
                  />
                  <View className={styles.info} style={infoWidth}>
                    <Text
                      className={styles.infoTitle}
                      onClick={this.detail.bind(this, item.data)}
                    >
                      {item.data.itemInfo.name}
                    </Text>
                    <Text
                      className={styles.infoSize}
                      onClick={this.detail.bind(this, item.data)}
                    >
                      {item.currentName}
                    </Text>
                    <View className={styles.last}>
                      <Text
                        className={styles.infoPrice}
                        onClick={this.detail.bind(this, item.data)}
                      >
                        {`￥${item.currentData.price}`}
                      </Text>
                      <AtInputNumber
                        min={1}
                        max={30}
                        step={1}
                        value={item.number}
                        onChange={this.handleChange.bind(this, item)}
                      />
                    </View>
                  </View>
                </View>
              </AtSwipeAction>
            );
          })}
        </ScrollView>
        <View className={styles.footer}>
          <View className={styles.footer_item_nav}>
            <CheckboxGroup onChange={this.checkAll.bind(this)}>
              <Checkbox value="all" checked={isCheckAll} color="#0081ff">
                {checkAllText}
              </Checkbox>
            </CheckboxGroup>
          </View>
          <View className={styles.footer_item_nav_price}>
            <Text className={styles.footer_text}>{`￥${checkPrice}`}</Text>
          </View>
          <View
            className={styles.footer_item_nav_buy}
            onClick={this.placeOrder.bind(this, checkArr, checkPrice)}
          >
            <Text className={styles.footer_cart_text}>下单</Text>
          </View>
        </View>
      </View>
    ) : (
      <View>
        <Empty text="空空如也,去添加点东西吧~" />
      </View>
    );
  }
}

export default connect(({ counter }) => ({
  cartList: counter.cartList
}))(Index);
