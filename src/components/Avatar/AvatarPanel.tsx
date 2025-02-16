import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import { useEffect } from "react";
import useAvatarStore from "@/store/useAvatarStore";
import { get } from "http";

function AvatarPanel() {
  const { azureSpeech } = useAvatarStore();

  useEffect(() => {
    if (!azureSpeech.APIKey || !azureSpeech.region) return;
  }, []);

  return <></>;
}

export default AvatarPanel;
