import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./src/navigation/RootStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
