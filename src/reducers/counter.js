import {
  LISTDATA,
  RECOMMENDLIST,
  LOGIN,
  KEEPITEM,
  CARTLIST
} from "../constants/counter";
import { stopRecord } from "@tarojs/taro";

const initstate = {
  list: [],
  recommendList: [],
  status: 0,
  itemData: "",
  cartList: []
};

export default function counter(state = initstate, action) {
  switch (action.type) {
    case LISTDATA:
      return {
        ...state,
        list: action.list
      };
      break;
    case RECOMMENDLIST:
      return {
        ...state,
        recommendList: action.recommendlist
      };
      break;
    case LOGIN:
      return {
        ...state,
        status: action.status
      };
      break;
    case KEEPITEM:
      return {
        ...state,
        itemData: action.itemData
      };
      break;
    case CARTLIST:
      let list = state.cartList;
      if (action.cartList) {
        list.push(action.cartList);
      }
      let array = [];
      list.map((item, index) => {
        if (item.currentId == action.cartList.currentId) {
          array.push(index);
        }
      });
      if (array.length == 2) {
        list[array[0]].number =
          parseInt(list[array[0]].number) + parseInt(list[array[1]].number);
        list.splice(array[1], 1);
      }

      return {
        ...state,
        cartList: list
      };
      break;

    default:
      return state;
  }
}
