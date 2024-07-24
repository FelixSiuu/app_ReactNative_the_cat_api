import { useState } from "react";
import { View, Text } from "react-native";
import { Button, Icon, Menu } from "react-native-paper";

type MenuProps = {
  list: Array<{ name: string; id: string }>;
  type: string;
  onSelected: (id: string) => void;
  currentId: string;
  className?: string;
};

export default function OptionMenu(props: MenuProps) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [selected, setSelected] = useState(props.list[0].name);

  return (
    <View className="relative flex-1">
      <View className="absolute bottom-[9] right-[5]">
        <Icon source={visible ? "menu-up" : "menu-down"} size={20} />
      </View>
      <Text>{props.type}</Text>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>{selected}</Button>}>
        {props.list.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              onPress={() => {
                setSelected(item.name);
                props.onSelected(item.id);
                closeMenu();
              }}
              title={item.name}
              disabled={item.id === props.currentId ? true : false}
            />
          );
        })}
      </Menu>
    </View>
  );
}
