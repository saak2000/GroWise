import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Phone_num: "",
      Password: "",
      Repassword: "",
      State: "",
      City: "",
      Pin_code: "",
    };
  }

  InsertRecord = () =>{
    var Name = this.state.Name;
    var Phone_num = this.state.Phone_num;
    var Password = this.state.Password;
    var Repassword = this.state.Repassword;
    var State = this.state.State;
    var City = this.state.City;
    var Pin_code = this.state.Pin_code;

    if(Name == 0 || Phone_num == 0|| Password == 0 || Repassword == 0 || State == 0 || City == 0 || Pin_code == 0){
      alert("Required Fields are Missing");
    }else if(Phone_num.length != 10){
      alert("Invalid Mobile Numer");
    }else if(Password.length < 3 || Password.length > 8){
      alert("Min 3 characters and Max 8 charaters are required");
    }else if(Repassword !== Password){
      alert("Passwords do not match");
    }else if(Pin_code.length != 6){
      alert("Invalid Pin Code");
    }else{
      // var InsertAPIURL = "http://10.0.2.2:80/GroWise/insert.php";
           var InsertAPIURL = "http://192.168.29.62:80/GroWise/insert.php";
//10.0.2.2
      var headers = {
        'Accept':'application/json',
        'Content-Type':'application/json'
      };

      var Data = {
        //php:name variable defined here
        Name: Name,
        Phone_num: Phone_num,
        Password: Password,
        State: State,
        City: City,
        Pin_code: Pin_code
      };
    
      fetch(InsertAPIURL,
        {
          method:'POST',
          headers: headers,
          body: JSON.stringify(Data)
        }).then((response)=>response.json())
        .then((response)=>{
          console.log(response[0].message);
        })
        .catch((error)=>{
          console.log(error)
        })
         console.log(JSON.stringify(Data))
    }
  }
   
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/GroWise.jpeg")}
          style={styles.image}
        />
        <TextInput
          style={styles.form}
          name="Name" 
          placeholder="Name"
          onChangeText={(Name) => this.setState({Name})}
        />
        <TextInput
          style={styles.form}
          name="Phone_num"
          keyboardType={"numeric"}
          placeholder="Phone Number"
          onChangeText={(Phone_num) => this.setState({Phone_num})}
        />
        <TextInput
          style={styles.form}
          name="Password"
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(Password) => this.setState({Password})}
        />
        <TextInput
          style={styles.form}
          name="Repassword"
          secureTextEntry={true}
          placeholder="Re-enter your Password"
          onChangeText={(Repassword) => this.setState({Repassword})}
        />
        <TextInput
          style={styles.form}
          name="State"
          placeholder="State"
          onChangeText={(State) => this.setState({State})}
        />
        <TextInput
          style={styles.form}
          name="City"
          placeholder="City"
          onChangeText={(City) => this.setState({City})}
        />
        <TextInput
          style={styles.form}
          name="Pin_code"
          keyboardType={"numeric"}
          placeholder="Pin Code"
          onChangeText={(Pin_code) => this.setState({Pin_code})}
        />
        <TouchableOpacity
          onPress={this.InsertRecord}
          style={styles.button}
        >
          <Text style={{ fontSize: 15, color: "#ffffff" }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "70%",
    height: "20%",
    marginTop: 20,
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

export default SignUp;