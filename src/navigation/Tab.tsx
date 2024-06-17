import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-paper";
import { BottomStackParamList } from "../types/navigation";
import VoteStack from "./VoteStack";
import BreedsStack from "./BreedsStack";

export default function Tab() {
  const Tab = createBottomTabNavigator<BottomStackParamList>();

  return (
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
  );
}
