import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Text, Icon, Input, Button, SocialIcon } from "react-native-elements";

export class EmailInputScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView>
          <View>
            <Icon
              name="md-fitness"
              size={80}
              type="ionicon"
              color={"#7365E2"}
            />
            <Text>What is your email address?</Text>
          </View>
          <Input
            leftIcon={
              <Icon
                name="email-outline"
                size={25}
                placeholder="enter your Email"
              />
            }
            keyboardType="email-address"
            returnKeyType="next"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default EmailInputScreen;
