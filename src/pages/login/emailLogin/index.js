import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Form, Switch, Input } from "@tarojs/components";
import { AtButton, AtMessage } from "taro-ui";
import Logo from "../logo/index";
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux";
import { login } from "@/actions/counter";
import Validator from "@/utils/validator";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   user: "",
      //   password: ""
      loading: false
    };
  }

  config = {
    navigationBarTitleText: "邮箱登录"
  };

  componentDidMount() {
    this.initValidator();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  // 实例化校验
  initValidator() {
    this.validatorInstance = new Validator({
      rules: {
        user: {
          required: true
        },
        password: {
          required: true
        }
      },
      messages: {
        user: {
          required: "请输入用户名"
        },
        password: {
          required: "请输入密码"
        }
      }
    });
  }

  login(value) {
    //传个状态给redux 进行管理
    const { dispatch } = this.props;
    this.setState({
      loading: true
    });
    dispatch(login(value));
    // 假请求
    setTimeout(() => {
      this.setState({
        loading: false
      });
      if (value.user === "admin" && value.password === "123") {
        Taro.atMessage({
          message: "登录成功",
          type: "success"
        });
        Taro.switchTab({
          url: "/pages/index/index"
        });
      } else {
        Taro.atMessage({
          message: "登录失败,请重新输入",
          type: "error"
        });
      }
    }, 1000);
  }

  formSubmit = e => {
    const value = e.detail.value;
    if (!this.validatorInstance.checkData(value)) {
      // 不正确
    } else {
      // 正确
      this.login(value);
    }
  };

  render() {
    return (
      <View className={styles.emalLogin}>
        <AtMessage />
        <Logo />
        <View className={styles.from}>
          <Form onSubmit={this.formSubmit.bind(this)}>
            <View className={styles.input_item}>
              <Input placeholder="请输入账号" name="user" />
            </View>
            <View className={styles.input_item}>
              <Input type="password" placeholder="请输入密码" name="password" />
            </View>
            <View className="margin-top-lg">
              <Button
                formType="submit"
                className="button_primary"
                loading={this.state.loading}
              >
                登录
              </Button>
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

export default connect(({ counter }) => ({
  status: counter.status
}))(Index);
