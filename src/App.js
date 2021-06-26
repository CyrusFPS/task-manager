import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import AddTask from "./components/AddTask";

export const store = configureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/signup" exact render={() => <Signup />} />
        <Route path="/home" exact render={() => <Home />} />
        <Route path="/addTask" exact render={() => <AddTask />} />
      </Provider>
    </Router>
  );
}

export default App;
