import React from "react";
import {View,Text} from "react-native";

//import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {Icon} from 'react-native-elements';


import PrevHist from "./PrevHist";
import Results from "./Results";


class HomePg extends React.Component { 
  render() {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:40}}>Home</Text>
      </View>
    );
  }
}

//tab navigation system
// const TabNavigator=createMaterialBottomTabNavigator(
//   {
//     HomePg : {screen:HomePg,
//       navigationOptions:{
//         tabBarLabel:'Home',
//         activeColor:'#ff0000',
//         inactiveColor:'#000000',
//         barStyle:{backgroundColor:'#67baf6'},
//         tabBarIcon:()=>(
//           <View>
//             <Icon name={'home'} size={25} style={{color: '#ff0000'}} />
//           </View>
//         )
//       }
//     }
//   },
//   {
//     PrevHist : {screen:PrevHist,
//       navigationOptions:{
//         tabBarLabel:'Profile',
//         activeColor:'#ff0000',
//         inactiveColor:'#000000',
//         barStyle:{backgroundColor:'#67baf6'},
//         tabBarIcon:()=>(
//           <View>
//             <Icon name={'person'} size={25}  style={{color: '#ff0000'}}/>
//             {/* style={color:'#ff0000'} */}
//           </View>
//         )
//       }
//     }
//   },
//   {
//     Results : {screen:Results,
//       navigationOptions:{
//         tabBarLabel:'Cart',
//         activeColor:'#ff0000',
//         inactiveColor:'#000000',
//         barStyle:{backgroundColor:'#67baf6'},
//         tabBarIcon:()=>(
//           <View>
//             <Icon name={'add-shopping-cart'} size={25}  style={{color: '#ff0000'}}/>
//             {/* style={color:'#ff0000'} */}
//           </View>
//         )
//       }
//     }
//   }
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent:"center",
//     backgroundColor: "#ffffff",
//   },
//   image: {
//     width: "70%",
//     height: "20%",
//     marginBottom: 40,
//   },
//   form: {
//     backgroundColor: "#fee9bf",
//     width: 250,
//     height: 50,
//     color: "#47525E",
//     padding: 10,
//     margin: 7,
//   },
//   button: {
//     backgroundColor: "#418a40",
//     margin: 7,
//     height: 50,
//     width: 250,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default createAppContainer(TabNavigator);

//export default createBottomTabNavigator(TabNavigator);
export default HomePg;