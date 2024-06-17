import { VoteStackParamsList } from "../types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VoteScreen from "../screens/VoteScreen";
import VoteDetailScreen from "../screens/VoteDetailScreen";

export default function VoteStack() {
  const VoteStack = createNativeStackNavigator<VoteStackParamsList>();
  return (
    <VoteStack.Navigator>
      <VoteStack.Screen name="Vote" component={VoteScreen} />
      <VoteStack.Screen
        name="VoteDetail"
        component={VoteDetailScreen}
        options={{ title: "Vote Detail", headerTitleAlign: "center" }}
      />
    </VoteStack.Navigator>
  );
}
