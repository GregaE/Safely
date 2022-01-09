import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

// Screens

export type homeNavigationType=StackNavigationProp<RootStackParamList, "Home">
export type settingsNavigationType=StackNavigationProp<RootStackParamList, "Settings">

