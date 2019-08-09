import { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
import { View } from "@tarojs/components";
import { AtActivityIndicator } from "taro-ui";
import "./loadDown.scss";

export default class LoadMore extends Component {
  static propTypes = {
    status: PropTypes.number
  };

  static defaultProps = {
    status: "notMoreData"
  };

  render() {
    const { status } = this.props;

    let view = null;
    switch (status) {
      case "normal":
        {
          view = <View className="normal" />;
        }
        break;
      case "refreshing":
        {
          view = (
            <View className="loading">
              <AtActivityIndicator
                size={15}
                color="#2d8cf0"
                content="加载中..."
              />
            </View>
          );
        }
        break;
      case "notMoreData": {
        view = <View className="no-more-data">-- 到底了 --</View>;
      }
    }
    return <View className="content">{view}</View>;
  }
}
