import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tab from "./src/navigation/Tab";
import Drawer from "./src/navigation/Drawer";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer />
        {/* <Tab /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
