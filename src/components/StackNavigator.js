import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./Welcome";
import SignUp from "./Sign Up";
import SignIn from "./Sign In";
import HomePg from "./HomePg";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={Welcome} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="HomePg" component={HomePg} />
       {/* <Stack.Screen name=" " component={CropCatalog} /> */}
    </Stack.Navigator>
  );
};
export default StackNavigator;