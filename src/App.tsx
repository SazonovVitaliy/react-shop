import AppRoute from "./components/AppRoute";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
