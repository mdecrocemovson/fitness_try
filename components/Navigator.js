import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import EmailInputScreen from "../screens/EmailInputScreen";
import PasswordInputScreen from "../screens/PasswordInputScreen";

const Navigator = createStackNavigator(
  {
    IntroScreen: IntroScreen,
    LoginScreen: LoginScreen,
    EmailInputScreen: EmailInputScreen,
    PasswordInputScreen: PasswordInputScreen
  },
  { initialRouteName: "EmailInputScreen" }
);

export default createAppContainer(Navigator);
