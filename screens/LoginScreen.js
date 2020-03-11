import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Text, Icon, Input, Button, SocialIcon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F6FA",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  headerContainer: {
    top: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  wrapper: {},
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderLeftWidth: 0,
    height: 50,
    backgroundColor: "white",
    marginBottom: 20
  },
  socialWrapper: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  socialLogin: {
    flexDirection: "row",
    marginTop: 10
  }
});

export class LoginScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.headerContainer}>
          <Icon name="md-fitness" size={80} type="ionicon" />
        </View>
        <KeyboardAvoidingView behavior={"padding"} enabled>
          <ScrollView keyboardShouldPersistTaps="handled"></ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.wrapper}>
          <Input
            style={styles.input}
            placeholder="Email"
            leftIcon={<Icon name="email" size={24} color="black" />}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <Input
            style={styles.input}
            placeholder="Password"
            leftIcon={<Icon name="email" size={24} />}
            returnKeyType="next"
          />
        </View>
        <View style={styles.socialWrapper}>
          <Text>Sign in with</Text>
          <View style={styles.socialLogin}>
            <SocialIcon type="facebook" />
            <SocialIcon type="google" />
            <SocialIcon type="twitter" />
          </View>
          <Button
            title="Login"
            buttonstyle={{
              backgroundColor: "#7265E3",
              borderRadius: 15
            }}
            containerStyle={{ marginVertical: 10, height: 50, width: 300 }}
            onPress={() => console.log("dad?")}
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("ForgotPasswordScreen")
            }
          >
            <Text h5 style={{textAlign: 'center', color:'blue'}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default LoginScreen;
