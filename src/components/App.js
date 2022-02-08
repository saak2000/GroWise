import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import Welcome from "./Welcome";
import SignUp from "./Sign Up";
import CropCatalog from "./CropCatalog";

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      // <CropCatalog/>
    );
  }
}

export default App;