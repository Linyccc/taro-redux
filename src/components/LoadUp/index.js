import { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
import { View } from "@tarojs/components";
import { AtActivityIndicator } from "taro-ui";
import styles from "./index.module.scss";

export default class LoadUp extends Component {
  static propTypes = {
    status: PropTypes.string
  };

  static defaultProps = {
    status: "normal"
  };

  render() {
    const { status } = this.props;

    let view = null;
    switch (status) {
      case "refreshing":
        {
          view = (
            <View className={styles.text}>
              <AtActivityIndicator size={15} color="#2d8cf0" content="更新中" />
            </View>
          );
        }
        break;
      case "end": {
        view = <View className={styles.text}>更新成功</View>;
      }
      case "normal": {
        view = null;
      }
    }
    return view;
  }
}
