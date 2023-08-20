import React from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./routes/Router";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer
        autoClose={2000}
        theme="light"
      />
    </Provider>
  );
}

export default App;
