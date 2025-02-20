"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import useAvatarStore from "@/store/useAvatarStore";

// 定義表單 Schema，region 和 APIKey 必填
const formSchema = z.object({
  region: z.string().min(1, { message: "(required)" }),
  APIKey: z.string().min(1, { message: "(required)" }),
  enablePrivateEndpoint: z.boolean().optional(),
  privateEndpoint: z.string().optional(),
  ttsVoice: z.string().optional(),
  customVoiceEndpointId: z.string().optional(),
  personalVoiceSpeakerProfileID: z.string().optional(),
});

export default function SpeechTTSForm() {
  const { azureSpeech, ttsConfig, setAzureSpeech, setTTSConfig } =
    useAvatarStore();

  // 設定 react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...azureSpeech, ...ttsConfig },
  });

  const handleSave = (values: z.infer<typeof formSchema>) => {
    setAzureSpeech({
      region: values.region,
      APIKey: values.APIKey,
      enablePrivateEndpoint: values.enablePrivateEndpoint,
      privateEndpoint: values.privateEndpoint,
    });
    setTTSConfig({
      ttsVoice: values.ttsVoice,
      customVoiceEndpointId: values.customVoiceEndpointId,
      personalVoiceSpeakerProfileID: values.personalVoiceSpeakerProfileID,
    });
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSave)}>
        <CardHeader className="pb-3">
          <CardTitle>Azure Speech Resource</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-3">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col flex-[4]">
                {/* 4️⃣ Region (必填) */}
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex gap-1 items-center">
                        <FormLabel>Region</FormLabel>
                        <FormMessage className="leading-none tracking-tight" />
                      </div>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger id="region">
                            <SelectValue placeholder="Select a region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="westus2">West US 2</SelectItem>
                            <SelectItem value="westeurope">
                              West Europe
                            </SelectItem>
                            <SelectItem value="southeastasia">
                              Southeast Asia
                            </SelectItem>
                            <SelectItem value="southcentralus">
                              South Central US
                            </SelectItem>
                            <SelectItem value="northeurope">
                              North Europe
                            </SelectItem>
                            <SelectItem value="swedencentral">
                              Sweden Central
                            </SelectItem>
                            <SelectItem value="eastus2">East US 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col flex-[6]">
                {/* 5️⃣ API Key (必填) */}
                <FormField
                  control={form.control}
                  name="APIKey"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex gap-1 items-center">
                        <FormLabel>API Key</FormLabel>
                        <FormMessage className="leading-none tracking-tight" />
                      </div>

                      <FormControl>
                        <Input id="APIKey" type="password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* 6️⃣ Enable Private Endpoint */}
            <FormField
              control={form.control}
              name="enablePrivateEndpoint"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      id="enablePrivateEndpoint"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="enablePrivateEndpoint"
                    className="flex mt-0"
                  >
                    Enable Private Endpoint
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* 7️⃣ Private Endpoint (如果 `enablePrivateEndpoint` 被勾選才取消disabled) */}
            <FormField
              control={form.control}
              name="privateEndpoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={` ${
                      !form.watch("enablePrivateEndpoint")
                        ? "opacity-50 "
                        : "text-black"
                    }`}
                  >
                    Private Endpoint
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="privateEndpoint"
                      type="text"
                      placeholder="https://{your custom name}.cognitiveservices.azure.com/"
                      disabled={!form.watch("enablePrivateEndpoint")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </CardContent>

        <CardHeader className="pb-3">
          <CardTitle>TTS Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-3">
            <FormField
              control={form.control}
              name="ttsVoice"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="ttsVoice">TTS Voice</Label>
                  <FormControl>
                    <Input id="ttsVoice" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customVoiceEndpointId"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="customVoiceEndpointId">
                    Custom Voice Deployment ID (Endpoint ID)
                  </Label>
                  <FormControl>
                    <Input id="customVoiceEndpointId" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="personalVoiceSpeakerProfileID"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="personalVoiceSpeakerProfileID">
                    Personal Voice Speaker Profile ID
                  </Label>
                  <FormControl>
                    <Input id="personalVoiceSpeakerProfileID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap justify-end">
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Form>
  );
}
