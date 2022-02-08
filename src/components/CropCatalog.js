{/* <TouchableHighlight >
  <Image style={styles.imagestyle}
  source={require('./ic_action_name.png')} />
  onPress={() => this.moveToAddNewCustomer()}>
 </TouchableHighlight> */}

//  import React from "react";
// import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

// const CropCatalog = ({navigation}) => {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={require("../../assets/GroWise.jpeg")}
//           style={styles.image}
//         />
//         {/* <TouchableOpacity
//           onPress={() => navigation.navigate('Sign Up')}
//           style={{ backgroundColor: "#fee9bf",  height:50, width: 250, justifyContent:'center', alignItems:'center' }}
//         >
//           <Text style={{ fontSize: 20, color: "#47525E" }}>Sign Up</Text>
//         </TouchableOpacity> */}
//       </View>
//     );
//   }

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: "#ffffff",
//     // flex: 1,
//     // height: "100%",
//     // width: "100%",
//   },
//   image: {
//    },
// });

import React from "react";
import {View,Text} from "react-native";


class CropCatalog extends React.Component {
  
  render() {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:40}}>CropCatalog</Text>
      </View>
    );
  }
}

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



export default CropCatalog;