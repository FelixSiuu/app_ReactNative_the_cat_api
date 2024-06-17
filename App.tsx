import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import VoteStack from "./src/stack/VoteStack";
import BreedsStack from "./src/stack/BreedsStack";
import type { BottomStackParamList } from "./src/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";

const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "VoteStack") {
                iconName = "thumbs-up-down";
              } else if (route.name === "BreedsStack") {
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
            name="VoteStack"
            component={VoteStack}
            options={{ headerShown: false, title: "VOTE" }}
          />
          <Tab.Screen
            name="BreedsStack"
            component={BreedsStack}
            options={{ headerShown: false, title: "BREEDS" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
