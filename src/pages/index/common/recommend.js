import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtIcon, AtGrid, AtTag } from "taro-ui";
import "./recommend.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     list: nextProps.list
  //   });
  // }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { list } = this.props;
    const content = null;
    if (list && list.length > 0) {
      content = list.map((item, index) => {
        let key = index;
        return (
          <View className="home-recommend__list-item" key={key}>
            <Image className="home-recommend__list-item-img" src={item.image} />
            <View className="home-recommend__list-item-title">
              {item.title}
            </View>
            {item.label.length > 0 ? (
              <View className="home-recommend__list-item-label">
                {item.label.map(function(item1, number) {
                  return (
                    <View
                      className="home-recommend__list-item-label-item"
                      key={number}
                    >
                      {item1}
                    </View>
                  );
                })}
              </View>
            ) : (
              <View />
            )}
            <View className="home-recommend__list-item-price">
              {`￥${item.price}`}
            </View>
            {item.prePrice ? (
              <View className="home-recommend__list-item-prePrice">
                {`原价￥${item.prePrice}`}
              </View>
            ) : (
              <View />
            )}
          </View>
        );
      });
    } else {
      <View> --暂无推荐-- </View>;
    }
    return (
      <View className="home-recommend">
        <View className="home-recommend__title">
          <Text className="home-recommend__title-txt">为你推荐</Text>
        </View>
        <View className="home-recommend__list">{content}</View>
      </View>
    );
  }
}

export default Index;
