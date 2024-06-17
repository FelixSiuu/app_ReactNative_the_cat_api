import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BreedsStackParamsList } from "../types/navigation";
import BreedsScreen from "../screens/BreedsScreen";
import BreedsDetailScreen from "../screens/BreedsDetailScreen";

export default function BreedsStack() {
  const BreedsStack = createNativeStackNavigator<BreedsStackParamsList>();

  return (
    <BreedsStack.Navigator>
      <BreedsStack.Screen
        name="Breeds"
        component={BreedsScreen}
        initialParams={{ breedId: "id1" }}
      />
      <BreedsStack.Screen
        name="BreedsDetail"
        component={BreedsDetailScreen}
        options={{ title: "Breeds Detail", headerTitleAlign: "center" }}
      />
    </BreedsStack.Navigator>
  );
}
