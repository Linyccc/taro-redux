import { LISTDATA, RECOMMENDLIST, LOGIN, KEEPITEM } from "../constants/counter";
import { stopRecord } from "@tarojs/taro";

const initstate = {
  list: [],
  recommendList: [],
  status: 1,
  itemData: ""
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
    default:
      return state;
  }
}
