import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Phone_num: "",
      Password: "",
    };
  }

  login = () => {
    const { Phone_num, Password } = this.state;
    if (Phone_num.length != 10) {
      alert("Invalid Mobile Number");
      return false;
    } else if (Password == "") {
      alert("Please enter password");
    } else {
      fetch("http://192.168.29.62:80/GroWise/login.php", {
      // fetch("http://192.168.0.104:80/GroWise/login.php", {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // we will pass our input data to server
          Phone_num: Phone_num,
          Password: Password,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          if (response == "ok") {
            //alert("Successfully Login");
            this.props.navigation.navigate("HomePg");
//            () => navigation.navigate("Sign In")
          } else {
            alert("Wrong Login Details");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/GroWise.jpeg")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter your Phone number"
          style={styles.form}
          keyboardType={"numeric"}
          onChangeText={(Phone_num) => this.setState({ Phone_num })}
        />

        <TextInput
          placeholder="Enter Password"
          style={styles.form}
          secureTextEntry={true}
          onChangeText={(Password) => this.setState({ Password })}
        />

        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "70%",
    height: "20%",
    marginBottom: 40,
  },
  form: {
    backgroundColor: "#fee9bf",
    width: 250,
    height: 50,
    color: "#47525E",
    padding: 10,
    margin: 7,
  },
  button: {
    backgroundColor: "#418a40",
    margin: 7,
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
