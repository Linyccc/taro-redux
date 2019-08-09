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
    const info = this.props.info;
    return (
      <View className={styles.info_param}>
        <View className={styles.info_param_title}>
          <Text className={styles.info_param_title_text}>商品参数</Text>
        </View>
        {info.attrList ? (
          info.attrList.map((item, index) => {
            const key = index;
            return (
              <View className={styles.info_param_item} key={key}>
                <Text className={styles.info_param_item_name}>
                  {item.attrName}
                </Text>
                <Text className={styles.info_param_item_value}>
                  {item.attrValue}
                </Text>
              </View>
            );
          })
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default Index;
