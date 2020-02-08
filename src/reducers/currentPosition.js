import { CURRENT_LOCATION } from "../actions/types";

const navigation = (
  state = navigator.geolocation.getCurrentPosition,
  action
) => {
  switch (action.type) {
    case :
      return ;
    case :
      return ;
    default:
      return state;
  }
};

export default navigation;
