import Taro, { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
import { View, Image, Text } from "@tarojs/components";
import octocat from "@/assets/image/octocat.png";

import "./empty.scss";

export default class Segment extends Component {
  static propTypes = {
    content: PropTypes.string
  };

  static defaultProps = {
    content: "这里好空呀！"
  };

  componentWillMount() {}

  render() {
    const { content } = this.props;
    return (
      <View className="content">
        <Image className="img" src={octocat} />
        <Text className="text">{content}</Text>
      </View>
    );
  }
}
