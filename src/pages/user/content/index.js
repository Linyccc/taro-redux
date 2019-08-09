import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import empty from "./assets/noneData.png";
import "./index.scss";
import HomeTitle from "@/components/HomeTitle";
import EnterList from "@/components/EnterList";
import pay from "@/assets/image/pay.png";
import send from "@/assets/image/send.png";
import deliver from "@/assets/image/deliver.png";
import mark from "@/assets/image/mark.png";
import service from "@/assets/image/service.png";

export default class Empty extends Component {
  static defaultProps = {};

  list(item, index) {
    Taro.showToast({
      title: "功能暂未开发",
      icon: "none",
      duration: 1000
    });
  }

  render() {
    const { userInfo } = this.props;
    return (
      <View>
        {userInfo.login ? (
          <View className="user-content-atlist">
            <HomeTitle title="我的订单" link="#" />
            <View className="padding-l-r">
              <EnterList
                list={[
                  {
                    image: pay,
                    value: "代付款",
                    do: ""
                  },
                  {
                    image: send,
                    value: "待发货",
                    do: ""
                  },
                  {
                    image: deliver,
                    value: "待收货",
                    do: ""
                  },
                  {
                    image: mark,
                    value: "评价",
                    do: "2"
                  },
                  {
                    image: service,
                    value: "退款/售后",
                    do: ""
                  }
                ]}
              />
            </View>
            <HomeTitle title="工具与服务" />
            <View className="padding-l-r">
              <AtGrid
                // hasBorder={false}
                mode="rect"
                columnNum={4}
                onClick={this.list}
                data={[
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "shopping-bag"
                    },
                    value: "我的拼团"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "analytics"
                    },
                    value: "我的砍价"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "star"
                    },
                    value: "我的积分"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "credit-card"
                    },
                    value: "礼品卡"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "map-pin"
                    },
                    value: "地址管理"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "lock"
                    },
                    value: "账号安全"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "phone"
                    },
                    value: "联系客户"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "message"
                    },
                    value: "用户反馈"
                  },
                  {
                    iconInfo: {
                      size: 16,
                      color: "#333",
                      value: "user"
                    },
                    value: "帮助中心"
                  }
                ]}
              />
            </View>
          </View>
        ) : (
          <View className="user-empty">
            <Image className="user-empty_img" src={empty} />
            <Text className="user-empty_txt">暂无数据哦~</Text>
          </View>
        )}
      </View>
    );
  }
}
