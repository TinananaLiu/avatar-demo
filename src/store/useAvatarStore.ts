import { create } from "zustand";

export interface IState {
  azureSpeech: {
    region: string;
    APIKey: string;
    enablePrivateEndpoint: boolean;
    privateEndpoint: string;
  };
  ttsConfig: {
    ttsVoice: string;
    customVoiceEndpointId: string;
    personalVoiceSpeakerProfileID: string;
  };
  avatarConfig: {
    talkingAvatarCharacter: string;
    talkingAvatarStyle: string;
    backgroundColor: string;
    backgroundImageUrl: string;
    customizedAvatar: boolean;
    transparentBackground: boolean;
    videoCrop: boolean;
  };
  setAzureSpeech: (value: Partial<IState["azureSpeech"]>) => void;
  setTTSConfig: (value: Partial<IState["ttsConfig"]>) => void;
  setAvatarConfig: (value: Partial<IState["avatarConfig"]>) => void;
}

const azureSpeech = {
  region: "",
  APIKey: "",
  enablePrivateEndpoint: false,
  privateEndpoint: "",
};

const ttsConfig = {
  ttsVoice: "",
  customVoiceEndpointId: "",
  personalVoiceSpeakerProfileID: "",
};

const avatarConfig = {
  talkingAvatarCharacter: "",
  talkingAvatarStyle: "",
  backgroundColor: "",
  backgroundImageUrl: "",
  customizedAvatar: false,
  transparentBackground: false,
  videoCrop: false,
};

const useAvatarStore = create<IState>((set) => ({
  azureSpeech,
  ttsConfig,
  avatarConfig,
  setAzureSpeech: (value) =>
    set((state) => ({
      azureSpeech: { ...state.azureSpeech, ...value },
    })),
  setTTSConfig: (value) =>
    set((state) => ({
      ttsConfig: { ...state.ttsConfig, ...value },
    })),
  setAvatarConfig: (value) =>
    set((state) => {
      return {
        avatarConfig: {
          ...state.avatarConfig,
          ...value,
        },
      };
    }),
}));

export default useAvatarStore;
