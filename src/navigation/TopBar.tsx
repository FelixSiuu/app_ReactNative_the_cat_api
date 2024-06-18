import { Appbar, Icon, Text } from "react-native-paper";

function TopBarTitle() {
  return (
    <Text className="text-[16px]">
      <Icon source={"cat"} size={16} />
      Title
    </Text>
  );
}

export default function TopBar() {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Content title={<TopBarTitle />} />
      <Appbar.Action icon="cog-outline" onPress={() => {}} />
    </Appbar.Header>
  );
}
