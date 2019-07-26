import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import request from "@/utils/request/index";
import styles from "./index.module.scss";
import Empty from "@/components/Empty";
import { connect } from "@tarojs/redux";
import { queryData } from "../../actions/counter";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  config = {
    navigationBarTitleText: "待办列表"
  };

  getList(params) {
    const { dispatch } = this.props;
    dispatch(queryData(params));
  }

  componentDidMount() {
    this.getList({ key: 1 });
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.list, nextProps.list);
    this.setState({
      list: nextProps.list
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { list } = this.state;
    const content = null;
    if (list.length > 0) {
      content = list.map((item, index) => {
        return (
          <AtListItem
            key={item.id}
            title={item.title}
            note={item.note}
            arrow="right"
            thumb={item.thumb}
          />
        );
      });
    } else {
      content = <Empty />;
    }

    return (
      <View>
        <AtList>{content}</AtList>
      </View>
    );
  }
}
export default connect(({ counter }) => ({
  list: counter.list
}))(Index);
