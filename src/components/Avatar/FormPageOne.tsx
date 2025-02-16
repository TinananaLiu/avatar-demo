"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import useAvatarStore from "@/store/useAvatarStore";

export default function FormPageOne() {
  const { azureSpeech, ttsConfig, setAzureSpeech, setTTSConfig } =
    useAvatarStore();
  //const [isPrivateEnabled, setIsPrivateEnabled] = useState(false);
  const handleSave = () => {
    if (!azureSpeech.APIKey || !azureSpeech.region) {
      alert("請填寫 API Key 和 Region！");
      return;
    }
    setAzureSpeech(azureSpeech);
    console.log(azureSpeech);
    //setTTSConfig(ttsConfig);
  };
  return (
    <>
      <CardHeader>
        <CardTitle>Azure Speech Resource</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col space-y-1.5 flex-[4]">
                <Label htmlFor="region">Region</Label>
                <Select
                  value={azureSpeech.region}
                  onValueChange={(value) => setAzureSpeech({ region: value })}
                >
                  <SelectTrigger id="region">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="westus2">West US 2</SelectItem>
                    <SelectItem value="westeurope">West Europe</SelectItem>
                    <SelectItem value="southeastasia">
                      Southeast Asia
                    </SelectItem>
                    <SelectItem value="southcentralus">
                      South Central US
                    </SelectItem>
                    <SelectItem value="northeurope">North Europe</SelectItem>
                    <SelectItem value="swedencentral">
                      Sweden Central
                    </SelectItem>
                    <SelectItem value="eastus2">East US 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5 flex-[6]">
                <Label htmlFor="APIKey">API Key</Label>
                <Input
                  id="APIKey"
                  type="password"
                  value={azureSpeech.APIKey}
                  onChange={(e) => setAzureSpeech({ APIKey: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="enablePrivateEndpoint"
                checked={azureSpeech.enablePrivateEndpoint} // type CheckedState = boolean | "indeterminate";
                onCheckedChange={(checked) =>
                  setAzureSpeech({ enablePrivateEndpoint: checked === true })
                }
                // Convert "checked" to "true | false", ignoring "indeterminate", prevent type mismatch
              />
              <label
                htmlFor="enablePrivateEndpoint"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enable Private Endpoint
              </label>
            </div>
            {azureSpeech.enablePrivateEndpoint && (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="privateEndpoint">Private Endpoint</Label>
                <Input
                  id="privateEndpoint"
                  type="text"
                  placeholder="https://{your custom name}.cognitiveservices.azure.com/"
                  value={azureSpeech.privateEndpoint}
                  onChange={(e) =>
                    setAzureSpeech({ privateEndpoint: e.target.value })
                  }
                />
              </div>
            )}
          </div>
        </form>
      </CardContent>
      <CardHeader>
        <CardTitle>TTS Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="ttsVoice">TTS Voice</Label>
              <Input id="ttsVoice" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="customVoiceEndpointId">
                Custom Voice Deployment ID (Endpoint ID)
              </Label>
              <Input id="customVoiceEndpointId" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="personalVoiceSpeakerProfileID">
                Personal Voice Speaker Profile ID
              </Label>
              <Input id="personalVoiceSpeakerProfileID" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-end">
        <Button onClick={handleSave}>Save</Button>
      </CardFooter>
    </>
  );
}
