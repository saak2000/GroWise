import React from "react";
import {View,Text} from "react-native";


class PrevHist extends React.Component {
  
  render() {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:40}}>PrevHist</Text>
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

export default PrevHist;
