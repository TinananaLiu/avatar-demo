"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import useAvatarStore, { IState } from "@/store/useAvatarStore";

// 定義表單 Schema
const formSchema = z
  .object({
    talkingAvatarCharacter: z.string(),
    talkingAvatarStyle: z.string(),
    backgroundColor: z.string(),
    backgroundImageUrl: z.string().url().or(z.literal("")),
    customizedAvatar: z.boolean(),
    transparentBackground: z.boolean(),
    videoCrop: z.boolean(),
  })
  .partial();

const inputItems = [
  { id: "talkingAvatarCharacter", label: "Avatar Character" },
  { id: "talkingAvatarStyle", label: "Avatar Style" },
  { id: "backgroundColor", label: "Background Color" },
  { id: "backgroundImageUrl", label: "Background Image (URL)" },
] as const;

const checkboxItems = [
  { id: "customizedAvatar", label: "Custom Avatar" },
  { id: "transparentBackground", label: "Transparent Background" },
  { id: "videoCrop", label: "Video Crop" },
] as const;

export default function AvatarConfigForm() {
  const { avatarConfig, setAvatarConfig } = useAvatarStore();

  // 設定 react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: avatarConfig,
  });

  const handleSave = (values: z.infer<typeof formSchema>) => {
    setAvatarConfig(values);
    console.log(avatarConfig);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSave)}>
        <CardHeader className="pb-4">
          <CardTitle>Avatar Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-3">
            <Label className="font-semibold">Appearance</Label>
            {inputItems.map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name={item.id}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={
                          item.id === "backgroundImageUrl"
                            ? "https://www.example.com/1920-1080-image.jpg"
                            : undefined
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}

            <Label className="font-semibold mt-3">Options</Label>
            {checkboxItems.map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name={item.id}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>{item.label}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-end">
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Form>
    // <>
    //   <CardHeader>
    //     <CardTitle>Avatar Configuration</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <form>
    //       <div className="grid w-full items-center gap-4">
    //         {inputItems.map((item) => (
    //           <div key={item.id} className="flex flex-col space-y-1.5">
    //             <Label htmlFor={item.id}>{item.label}</Label>
    //             <Input
    //               id={item.id}
    //               value={avatarConfig[item.id]}
    //               onChange={(e) =>
    //                 setAvatarConfig({
    //                   ...avatarConfig,
    //                   [item.id]: e.target.value,
    //                   // checkboxItems: avatarConfig.checkboxItems,
    //                 })
    //               }
    //             />
    //           </div>
    //         ))}
    //         {checkboxItems.map((item) => (
    //           <div key={item.id} className="flex items-center space-x-2">
    //             <Checkbox
    //               id={item.id}
    //               checked={avatarConfig[item.id]}
    //               onCheckedChange={(checked) =>
    //                 setAvatarConfig({
    //                   // inputItems: avatarConfig.inputItems,
    //                   ...avatarConfig,
    //                   [item.id]: checked === true,
    //                 })
    //               }
    //             />
    //             <label
    //               htmlFor={item.id}
    //               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //             >
    //               {item.label}
    //             </label>
    //           </div>
    //         ))}
    //       </div>
    //     </form>
    //   </CardContent>
    //   <CardFooter className="flex flex-wrap justify-end">
    //     <Button onClick={handleSave}>Save</Button>
    //   </CardFooter>
    // </>
  );
}
