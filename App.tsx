import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VoteScreen from "./src/screens/VoteScreen";
import BreedsScreen from "./src/screens/BreedsScreen";
import StartScreen from "./src/screens/StartScreen";
import { RootStackParamList } from "./src/navigation/types";
import type { BottomStackParamList } from "./src/navigation/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack/lib/typescript/src/types";
import LogoTitle from "./src/components/LogoTitle";
import { Icon } from "react-native-paper";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomStackParamList>();

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Vote") {
                iconName = "thumbs-up-down";
              } else if (route.name === "Breeds") {
                iconName = "format-list-bulleted";
              } else {
                iconName = "";
              }

              return (
                <Icon
                  source={iconName}
                  size={16}
                  color={focused ? "#3874cb" : "gray"}
                />
              );
            },
            tabBarActiveTintColor: "#3874cb",
            tabBarInactiveTintColor: "gray"
          })}>
          <Tab.Screen
            name="Vote"
            component={VoteScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Breeds"
            component={BreedsScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
