import clsx from "clsx";
import { View, Text } from "react-native";

export default function Toast({ show }: { show: boolean }) {
  return (
    <View
      className={clsx("absolute left-0 top-[10%] w-full", {
        hidden: show === false
      })}>
      <Text className="mx-auto h-[40px] w-[300px] rounded-[8px] bg-[#323232] pl-[30px] text-[16px] leading-[40px] text-white">
        You love this cat !
      </Text>
    </View>
  );
}
