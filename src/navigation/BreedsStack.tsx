import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BreedsScreen from "../screens/BreedsScreen";
import BreedsList from "../screens/BreedsList";
import { BreedsStackParamList } from "../types/navigation";

export default function BreedsStack() {
  const BreedsStack = createNativeStackNavigator<BreedsStackParamList>();
  return (
    <BreedsStack.Navigator initialRouteName="Breeds">
      <BreedsStack.Screen
        name="Breeds"
        initialParams={{ breed_id: "abys" }}
        component={BreedsScreen}
        options={{ headerShown: false }}
      />
      <BreedsStack.Screen
        name="BreedsList"
        initialParams={{ breed_id: "abys" }}
        component={BreedsList}
        options={({ route }) => ({
          title: `selected: ${route.params.breed_id}`,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1976d2"
          },
          headerTintColor: "#fff"
        })}
      />
    </BreedsStack.Navigator>
  );
}
