import { ListData, RecommendList } from "../constants/counter";

const initstate = {
  list: [],
  recommendList: []
};

export default function counter(state = initstate, action) {
  switch (action.type) {
    case ListData:
      return {
        ...state,
        list: action.list
      };
      break;
    case RecommendList:
      return {
        ...state,
        recommendList: action.recommendlist
      };
      break;
    default:
      return state;
  }
}
