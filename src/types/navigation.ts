import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type BottomStackParamList = {
  VoteStack: undefined;
  BreedsStack: undefined;
};

export type BottomVoteScreenProps = BottomTabScreenProps<
  BottomStackParamList,
  "VoteStack"
>;

export type BottomBreedsScreenProps = BottomTabScreenProps<
  BottomStackParamList,
  "BreedsStack"
>;

export type VoteStackParamsList = {
  Vote: undefined;
  VoteDetail: undefined;
};

export type VoteStackVoteScreenProps = NativeStackScreenProps<
  VoteStackParamsList,
  "Vote"
>;

export type VoteStackDetailScreenProps = NativeStackScreenProps<
  VoteStackParamsList,
  "VoteDetail"
>;

export type BreedsStackParamsList = {
  Breeds: { breedId: string };
  BreedsDetail: undefined;
};

export type BreedsStackBreedsScreenProps = NativeStackScreenProps<
  BreedsStackParamsList,
  "Breeds"
>;

export type BreedsStackDetailScreenProps = NativeStackScreenProps<
  BreedsStackParamsList,
  "BreedsDetail"
>;
