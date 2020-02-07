import ReactHabitat from "react-habitat";
import {ReduxDomFactory} from "react-habitat-redux";

import "./index.css";
import App from "./App";
import {store} from "./redux";

class MyApp extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a store
    //const store = configureStore();

    const containerBuilder = new ReactHabitat.ContainerBuilder();

    // Set a new 'Redux' factory for the store
    containerBuilder.factory = new ReduxDomFactory(store);

    // Register your top level component(s)
    containerBuilder.register(App).as("App");

    // Finally, set the container
    this.setContainer(containerBuilder.build());
  }
}

// Always export a 'new' instance so it immediately evokes
export default new MyApp();
