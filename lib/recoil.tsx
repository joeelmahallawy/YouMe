import { atom } from "recoil";
import { supabase } from "./supabase";

const globalUser = atom({
  key: "globalUser", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
export default globalUser;
