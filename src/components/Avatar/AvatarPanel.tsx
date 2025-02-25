import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import axios from "axios";
import { useEffect, useState } from "react";
import useAvatarStore from "@/store/useAvatarStore";
import { get } from "http";

function AvatarPanel() {
  const { azureSpeech, ttsConfig, avatarConfig } = useAvatarStore();
  const [avatarSynthesizer, setAvatarSynthesizer] =
    useState<SpeechSDK.AvatarSynthesizer | null>(null);
  const [peerConnection, setPeerConnection] =
    useState<RTCPeerConnection | null>(null);
  const [isSessionActive, setIsSessionActive] = useState(false);

  const startSession = async () => {
    if (!azureSpeech.APIKey || !azureSpeech.region) {
      alert("No API Key & Region!");
      return;
    }

    setIsSessionActive(true);

    try {
      const speechSynthesisConfig = azureSpeech.enablePrivateEndpoint
        ? SpeechSDK.SpeechConfig.fromEndpoint(
            new URL(
              `wss://${azureSpeech.privateEndpoint}/tts/cognitiveservices/websocket/v1?enableTalkingAvatar=true`
            ),
            azureSpeech.APIKey
          )
        : SpeechSDK.SpeechConfig.fromSubscription(
            azureSpeech.APIKey,
            azureSpeech.region
          );

      speechSynthesisConfig.endpointId = ttsConfig.customVoiceEndpointId;

      // avatar video format
      const videoFormat = new SpeechSDK.AvatarVideoFormat();
      // ...

      // avatar params
      const avatarConfiguration = new SpeechSDK.AvatarConfig(
        avatarConfig.talkingAvatarCharacter,
        avatarConfig.talkingAvatarStyle,
        videoFormat
      );
      avatarConfiguration.customized = avatarConfig.customizedAvatar;
      avatarConfiguration.backgroundColor = avatarConfig.backgroundColor;
      avatarConfiguration.backgroundImage = new URL(
        avatarConfig.backgroundImageUrl
      );

      // GET api
      const requestUrl = azureSpeech.enablePrivateEndpoint
        ? `https://${azureSpeech.privateEndpoint}/tts/cognitiveservices/avatar/relay/token/v1`
        : `https://${azureSpeech.region}.tts.speech.microsoft.com/cognitiveservices/avatar/relay/token/v1`;

      const response = await axios.get(requestUrl, {
        headers: { "Ocp-Apim-Subscription-Key": azureSpeech.APIKey },
      });

      const { Urls, Username, Password } = response.data;
      const iceServerUrl = Urls[0];
      const iceServerUsername = Username;
      const iceServerCredential = Password;

      avatarConfiguration.remoteIceServers = [
        {
          urls: [iceServerUrl],
          username: iceServerUsername,
          credential: iceServerCredential,
        },
      ];

      const synthesizer = new SpeechSDK.AvatarSynthesizer(
        speechSynthesisConfig,
        avatarConfiguration
      );

      synthesizer.avatarEventReceived = (s, e) => {
        const offsetMessage =
          e.offset === 0
            ? ""
            : `, offset from session start: ${e.offset / 10000}ms.`;
        console.log(
          `[${new Date().toISOString()}] Event received: ${
            e.description
          }${offsetMessage}`
        );
      };

      setAvatarSynthesizer(synthesizer);
    } catch (error) {}
  };

  const setupWebRTC = (
    iceServerUrl: string,
    iceServerUsername: string,
    iceServerCredential: string
  ) => {
    const pc = new RTCPeerConnection({
      iceServers: [
        {
          urls: [iceServerUrl],
          username: iceServerUsername,
          credential: iceServerCredential,
        },
      ],
    });

    pc.ontrack = (event) => {};
  };

  return <></>;
}

export default AvatarPanel;
