import { View } from "react-native";
import { Button } from "react-native-paper";
import { StartScreenProps } from "../navigation/types";

export default function StartScreen({ navigation }: StartScreenProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Vote")}
        uppercase>
        Start!
      </Button>
    </View>
  );
}
