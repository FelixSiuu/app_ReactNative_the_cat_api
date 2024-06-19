import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { DrawerScreenProps } from "@react-navigation/drawer";

export type RootStackParamList = {
  BottomTab: undefined;
};

export type BottomTabProps = BottomTabScreenProps<
  RootStackParamList,
  "BottomTab"
>;

export type BreedsStackParamList = {
  Breeds: { breed_id: string };
  BreedsList: { breed_id: string };
};

export type BreedsScreenProps = NativeStackScreenProps<
  BreedsStackParamList,
  "Breeds"
>;

export type BreedsListScreenProps = NativeStackScreenProps<
  BreedsStackParamList,
  "BreedsList"
>;
