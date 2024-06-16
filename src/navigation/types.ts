import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Start: undefined;
  Vote: undefined;
  Breeds: { breedId: string };
};

export type StartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Start"
>;

export type VoteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Vote"
>;

export type BreedsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Breeds"
>;

export type BottomStackParamList = {
  Vote: undefined;
  Breeds: { breedId: string };
};

export type BottomVoteScreenProps = BottomTabScreenProps<
  BottomStackParamList,
  "Vote"
>;

export type BottomBreedsScreenProps = BottomTabScreenProps<
  BottomStackParamList,
  "Breeds"
>;
