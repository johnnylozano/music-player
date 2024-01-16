/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSong = /* GraphQL */ `subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
  onCreateSong(filter: $filter) {
    id
    songName
    songArtist
    audioSrc
    imageSrc
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSongSubscriptionVariables,
  APITypes.OnCreateSongSubscription
>;
export const onUpdateSong = /* GraphQL */ `subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
  onUpdateSong(filter: $filter) {
    id
    songName
    songArtist
    audioSrc
    imageSrc
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSongSubscriptionVariables,
  APITypes.OnUpdateSongSubscription
>;
export const onDeleteSong = /* GraphQL */ `subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
  onDeleteSong(filter: $filter) {
    id
    songName
    songArtist
    audioSrc
    imageSrc
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSongSubscriptionVariables,
  APITypes.OnDeleteSongSubscription
>;
