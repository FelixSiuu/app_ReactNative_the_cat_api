import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";
import { DrawerParamsList } from "../types/navigation";

export default function Drawer() {
  const Drawer = createDrawerNavigator<DrawerParamsList>();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={SettingsScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
