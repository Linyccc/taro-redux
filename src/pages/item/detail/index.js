import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import styles from "./index.module.scss";

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
    return <View />;
  }
}

export default Index;
