import { ListData } from "../constants/counter";

const initstate = {
  list: []
};

export default function counter(state = initstate, action) {
  switch (action.type) {
    case ListData:
      return {
        ...state,
        list: action.list
      };
      break;
    default:
      return state;
  }
}
