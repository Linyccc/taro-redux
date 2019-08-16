import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtIcon, AtGrid, AtTag } from "taro-ui";
import "./recommend.scss";
import { connect } from "@tarojs/redux";
import { keepItem } from "@/actions/counter";

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

  detail = item => {
    const { dispatch } = this.props;
    dispatch(keepItem(item));
    Taro.navigateTo({
      url: `/pages/item/index`
    });
  };

  render() {
    const { list } = this.props;
    let content = null;
    if (list && list.length > 0) {
      content = list.map((item, index) => {
        let key = index;
        return (
          <View
            className="home-recommend__list-item"
            key={key}
            onClick={this.detail.bind(this, item)}
          >
            <Image className="home-recommend__list-item-img" src={item.image} />
            <View className="home-recommend__list-item-title">
              {item.title}
            </View>
            {item.label.length > 0 ? (
              <View className="home-recommend__list-item-label">
                {item.label.map((item1, number) => {
                  const key = number;
                  return (
                    <AtTag type="primary" circle size="small" key={key}>
                      {item1}
                    </AtTag>
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
          <Text className="home-recommend__title-txt">--为你推荐--</Text>
        </View>
        <View className="home-recommend__list">{content}</View>
      </View>
    );
  }
}

export default connect(({ counter }) => ({}))(Index);
