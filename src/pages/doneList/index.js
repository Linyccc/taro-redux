import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import request from "@/utils/request/index";
import styles from "./index.module.scss";
import Empty from "@/components/Empty";
import LoadDown from "@/components/LoadDown";
import { connect } from "@tarojs/redux";
import { queryData } from "../../actions/counter";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMask: true, //初始化加载遮罩
      params: {
        page: 1,
        pageSize: 20 //默认20条
      },
      list: [],
      status: "normal", // 1.normal:正常  2.notMoreData:没有更多数据见底   3.refreshing : 刷新状态     注:可把此数据放到全局进行引用
      showDown: false //只有在下拉的时候显示
    };
  }

  config = {
    navigationBarTitleText: "已办列表",
    enablePullDownRefresh: true
  };

  getList() {
    const { dispatch } = this.props;
    const { params, showMask } = this.state;
    // 这个是异步的请求的时候进行Loading效果，为了防止上拉对loadDown可进行隐藏处理
    this.setState({
      status: "refreshing"
    });
    dispatch(queryData(params, showMask));
  }

  componentDidMount() {
    this.getList();
  }

  componentWillReceiveProps(nextProps) {
    let that = this;
    let { params, list } = this.state;
    if (params.page === 1) {
      that.setState({
        list: nextProps.list
      });
    } else {
      that.setState({
        list: list.concat(nextProps.list)
      });
    }
    const curStatus = nextProps.list < 20 ? "notMoreData" : "normal";
    this.setState({
      status: curStatus
    });
  }

  // 顶部下拉刷新，原生事件
  onPullDownRefresh() {
    let that = this;
    const { params, status } = this.state;
    this.setState(
      {
        params: {
          ...params,
          page: 1
        },
        showDown: false,
        showMask: false
      },
      () => {
        that.getList();
      }
    );
  }

  // 滚动条拉到底部，原生事件
  onReachBottom() {
    const that = this;
    const { params, status } = this.state;
    if (status !== "notMoreData") {
      this.setState(
        {
          params: {
            ...params,
            page: params.page + 1
          },
          showDown: true,
          showMask: false
        },
        () => {
          that.getList();
        }
      );
    }
  }

  render() {
    const { list, showDown, status } = this.state;
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
        {showDown && <LoadDown status={status} />}
      </View>
    );
  }
}
export default connect(({ counter }) => ({
  list: counter.list
}))(Index);
