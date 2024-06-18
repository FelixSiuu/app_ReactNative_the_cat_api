import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";
import SettingsScreen from "../screens/SettingsScreen";
import { RootStackParamList } from "../types/navigation";
import TopBar from "./TopBar";
import { Icon } from "react-native-paper";

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerTitle: props => <Icon source={"cat"} {...props} size={24} />
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}
