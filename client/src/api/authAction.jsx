import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doLogin, doRegister } from "./authApi";
export const loginUser = (username, password) => async (dispatch) => {
  try {
    const user = await doLogin(username, password);
    console.log(user);
    toast.loading("Is Checking......", {
      position: toast.POSITION.TOP_RIGHT,
    });

    setTimeout(() => {
      toast.dismiss();
      toast.success("Login success ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 4000);
    localStorage.setItem("token",user.token)
    return true;
  } catch (error) {
    toast.loading("Is Checking......", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss();
      toast.error(`Error ${error.response.data} !`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 3000);
    console.log(error);
    return error;
  }
};

export const registerUser = (username, password,phone) => async (dispatch) => {
  try {
    const user = await doRegister(username, password,phone);
    console.log(user);
    toast.loading("Is Checking......", {
      position: toast.POSITION.TOP_RIGHT,
    });

    setTimeout(() => {
      toast.dismiss();
      toast.success("Register success ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 4000);
    return true;
  } catch (error) {
    toast.loading("Is Checking......", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss();
      toast.error(`${error.response.data} !`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 4000);
    console.log(error);
    return error;
  }
};
