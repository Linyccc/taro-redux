import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import "./index.scss";
import { getWindowHeight } from "@/utils/style";
import Menu from "./menu/index";
import List from "./list/index";
import Banner from "./banner/index";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      data: [
        {
          id: 0,
          name: "推荐专区",
          picUrl:
            "https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png",
          categoryGroupList: [
            {
              id: 0,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png",
                  id: 1000,
                  name: "999+好评"
                }
              ],
              name: ""
            }
          ]
        },
        {
          id: 1,
          name: "夏凉专区",
          picUrl:
            "https://yanxuan.nosdn.127.net/3d8cea29a40a8043dc5ddc0cbf992bcd.jpg",
          categoryGroupList: [
            {
              id: 1,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg",
                  id: 109257015,
                  name: "清爽美食"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png",
                  id: 109260001,
                  name: "降温好物"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/0955bacbb512b7be7fac01cd25e2d5fb.png",
                  id: 109254018,
                  name: "烈日防晒"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/f1b98c9f371cee2860ce8d2f1e11941c.png",
                  id: 109260002,
                  name: "夏季养生"
                }
              ],
              name: ""
            }
          ]
        },
        {
          id: 2,
          name: "爆品专区",
          picUrl:
            "https://yanxuan.nosdn.127.net/6dca35a4996e20b9bd4707f5c30fd4fe.jpg",
          categoryGroupList: [
            {
              id: 1,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/6b82cd6fb07f118aa061d612b1f09011.png",
                  id: 109243042,
                  name: "运动旅行"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png",
                  id: 109260001,
                  name: "降温好物"
                }
              ],
              name: ""
            }
          ]
        },
        {
          id: 3,
          name: "居家生活",
          picUrl:
            "https://yanxuan.nosdn.127.net/f143dc0425f2017246ac14acc765cee7.jpg",
          categoryGroupList: [
            {
              id: 1,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg",
                  id: 109257015,
                  name: "清爽美食"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png",
                  id: 109260001,
                  name: "降温好物"
                }
              ],
              name: "夏凉好物"
            },
            {
              id: 2,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/0955bacbb512b7be7fac01cd25e2d5fb.png",
                  id: 109254018,
                  name: "烈日防晒"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/f1b98c9f371cee2860ce8d2f1e11941c.png",
                  id: 109260002,
                  name: "夏季养生"
                }
              ],
              name: "床上用品"
            }
          ]
        },
        {
          id: 4,
          name: "服饰鞋包",
          picUrl:
            "https://yanxuan.nosdn.127.net/7e1e210ca9c1cb8a1a98ac593daae618.jpg",
          categoryGroupList: [
            {
              id: 1,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/0955bacbb512b7be7fac01cd25e2d5fb.png",
                  id: 109254018,
                  name: "烈日防晒"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/f1b98c9f371cee2860ce8d2f1e11941c.png",
                  id: 109260002,
                  name: "夏季养生"
                }
              ],
              name: "当季爆款"
            },
            {
              id: 2,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg",
                  id: 109257015,
                  name: "清爽美食"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png",
                  id: 109260001,
                  name: "降温好物"
                }
              ],
              name: "男装"
            }
          ]
        },
        {
          id: 5,
          name: "美食酒水",
          picUrl:
            "https://yanxuan.nosdn.127.net/52b80029ac4cbaa1d4ffd6cd87a8b6d1.jpg",
          categoryGroupList: [
            {
              id: 1,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg",
                  id: 109257015,
                  name: "清爽美食"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png",
                  id: 109260001,
                  name: "降温好物"
                }
              ],
              name: ""
            }
          ]
        },
        {
          id: 6,
          name: "个户清洁",
          picUrl:
            "https://yanxuan.nosdn.127.net/08055c6ede5b94479d0d9133430ef113.jpg",
          categoryGroupList: [
            {
              id: 1,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg",
                  id: 109257015,
                  name: "清爽美食"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png",
                  id: 109260001,
                  name: "降温好物"
                }
              ],
              name: ""
            }
          ]
        },
        {
          id: 7,
          name: "母婴亲子",
          picUrl:
            "https://yanxuan.nosdn.127.net/3750ff84767ac0b8d2401d98a8795f5e.jpg",
          categoryGroupList: [
            {
              id: 1,
              categoryList: [
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg",
                  id: 109257015,
                  name: "清爽美食"
                },
                {
                  bannerUrl:
                    "https://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png",
                  id: 109260001,
                  name: "降温好物"
                }
              ],
              name: ""
            }
          ]
        }
      ]
    };
  }

  config = {
    navigationBarTitleText: "分类"
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  handleMenu = id => {
    this.setState({ current: id });
  };

  render() {
    const { current, data } = this.state;
    const height = getWindowHeight();
    return (
      <View className="cate">
        <ScrollView scrollY className="cate__menu" style={{ height }}>
          <Menu current={current} list={data} onClick={this.handleMenu} />
        </ScrollView>

        <ScrollView scrollY className="cate__list" style={{ height }}>
          <View className="cate__list-wrap">
            <Banner current={current} banner={data} />
            <List current={current} list={data} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Index;
