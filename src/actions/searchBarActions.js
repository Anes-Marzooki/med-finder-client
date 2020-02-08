import { SEARCH } from "./types";
import axios from "axios";

export const search = query => dispatch => {
  axios
    .post(`api/pharmacy/search`, { query }) // the proxy isn't working properly
    .then(res => {
      console.log("4554545", res.data);
      return res.data;
    })
    .then(pharmacies =>
      dispatch({
        type: SEARCH,
        payload: pharmacies
      })
    );
};
