import { CURRENT_LOCATION } from "./types";

export const getCurrentPosition = () => {
         return {
           type: "CURRENT_LOCATION",
           location: {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           }
         };
       };