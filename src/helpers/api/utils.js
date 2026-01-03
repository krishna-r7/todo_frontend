import Config from "@/config";
import { message } from "antd";

export const handleResponse = (response) => {
  // console.log(response)
  if (response?.status === 202) message.loading({ content: response.data.error, duration: 2 });
  else if (response?.response?.status === 500) message.error(response?.message);
  else if (response?.response?.status === 400) message.error(response?.response?.data?.message);
  else if (response?.response?.status === 429) message.error(response?.response?.data?.message);
  else if (response?.response?.status === 401) {
    Config.UNAUTHORIZED_EXCEPTION = true;
    message.error("You are not authorized for the action.");
    // toast.error("You are not authorized for the action.");
  } else if (response?.status === 200 || response?.success === true) {
    // console.log(response );
    message.success(response?.message); 
    return response?.data;
  }
  else {
    console.log("⚠️ Unhandled response:", response);
    message.error("Something went wrong. Please contact server admin.");
    return false;
  }
  return false;
};

export const login= (state, action) => {
  state.userSession = action.payload;
  localStorage.setItem('userSession', JSON.stringify(action.payload));
}
export const logout = (state) => {
  state.userSession = null;
  localStorage.removeItem('userSession');
  localStorage.clear();
}
