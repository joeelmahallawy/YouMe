import { atom } from "recoil";

const globalUser = atom({
  key: "globalUser", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
export default globalUser;
