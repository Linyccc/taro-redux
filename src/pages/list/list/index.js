import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import classNames from "classnames";
import "./index.scss";

export default class List extends Component {
  static defaultProps = {
    list: []
  };

  render() {
    const { list, current } = this.props;
    let curList = [];
    list.map(item => {
      if (item.id === current) {
        curList = item.categoryGroupList;
      }
    });
    return (
      <View className="cate-list">
        {curList.map(group => (
          <View key={group.id} className="cate-list__group">
            {!!group.name && (
              <View className="cate-list__title">
                <Text className="cate-list__title-txt">{group.name}</Text>
              </View>
            )}
            <View className="cate-list__wrap">
              {group.categoryList.map((item, index) => (
                <View
                  key={item.id}
                  className={classNames("cate-list__item", {
                    "cate-list__item--right": (index + 1) % 3 === 0
                  })}
                >
                  <Image className="cate-list__item-img" src={item.bannerUrl} />
                  <View className="cate-list__item-txt-wrap">
                    <Text className="cate-list__item-txt">{item.name}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  }
}
