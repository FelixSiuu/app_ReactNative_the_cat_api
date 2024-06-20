import { View, Text } from "react-native";
import { Icon } from "react-native-paper";

export default function RatingList(props: {
  breed_info: { [key: string]: any };
}) {
  const dataList = [
    { key: "Affection Level", value: props.breed_info.affection_level },
    { key: "Adaptability", value: props.breed_info.adaptability },
    { key: "Child Friendly", value: props.breed_info.child_friendly },
    { key: "Dog Friendly", value: props.breed_info.dog_friendly },
    { key: "Energy Level", value: props.breed_info.energy_level },
    { key: "Grooming", value: props.breed_info.grooming },
    { key: "Health Issues", value: props.breed_info.health_issues },
    { key: "Intelligence", value: props.breed_info.intelligence },
    { key: "Shedding Level", value: props.breed_info.shedding_level },
    { key: "Social Needs", value: props.breed_info.social_needs },
    { key: "Stranger Friendly", value: props.breed_info.stranger_friendly },
    { key: "Vocalisation", value: props.breed_info.vocalisation }
  ];

  const scoreList = [
    "star-outline",
    "star-outline",
    "star-outline",
    "star-outline",
    "star-outline"
  ];

  return (
    <View className="gap-[10]">
      {dataList.map((item, index) => {
        return (
          <View key={index} className="flex-row justify-between">
            <Text>{item.key}</Text>
            <Text>
              {scoreList.map((starItem, index) => {
                return (
                  <Icon
                    source={index + 1 < item.value ? "star" : starItem}
                    key={index}
                    size={16}
                    color={"#efb23d"}
                  />
                );
              })}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
