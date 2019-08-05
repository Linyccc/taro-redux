import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import styles from "./index.module.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  config = {
    navigationBarTitleText: "分类"
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return <View>分类</View>;
  }
}

export default Index;
