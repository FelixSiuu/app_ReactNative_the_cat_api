import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VoteScreen from "./src/screens/VoteScreen";
import BreedsScreen from "./src/screens/BreedsScreen";
import StartScreen from "./src/screens/StartScreen";
import { RootStackParamList } from "./src/navigation/types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack/lib/typescript/src/types";
import LogoTitle from "./src/components/LogoTitle";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const screensTitleOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: "#1976d2"
    },
    headerTintColor: "#fff",
    headerTitleAlign: "center"
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false,
              headerTitle: (props: any) => <LogoTitle {...props} />,
              headerStyle: {
                backgroundColor: "#000000"
              }
            }}></Stack.Screen>
          <Stack.Screen
            name="Vote"
            component={VoteScreen}
            options={{
              headerShown: false,
              headerBackTitleStyle: { fontSize: 14 },
              title: "Vote",
              ...screensTitleOptions
            }}
          />
          <Stack.Screen
            name="Breeds"
            component={BreedsScreen}
            options={{
              headerShown: false,
              title: "Breeds",
              ...screensTitleOptions
            }}
            initialParams={{ breedId: "id0" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
