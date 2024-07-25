import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  BottomTab: undefined;
};

export type BottomTabProps = BottomTabScreenProps<
  RootStackParamList,
  "BottomTab"
>;

export type BottomTabBarParamList = {
  Home: undefined;
  Settings: undefined;
};

export type BottomTabBarProps = BottomTabScreenProps<
  BottomTabBarParamList,
  "Home",
  "Settings"
>;
