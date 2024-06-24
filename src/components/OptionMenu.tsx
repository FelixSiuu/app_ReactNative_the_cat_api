import { useState } from "react";
import { View, Text } from "react-native";
import { Button, Menu } from "react-native-paper";

type MenuProps = {
  list: Array<{ name: string; id: string }>;
};

export default function OptionMenu(props: MenuProps) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Button onPress={openMenu}>Show menu</Button>}>
      {props.list.map((item, index) => {
        return <Menu.Item key={index} onPress={() => {}} title={item.name} />;
      })}
    </Menu>
  );
}
