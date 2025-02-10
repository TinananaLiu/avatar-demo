"use client";
import { useState } from "react";
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

const inputItems = [
  { id: "talkingAvatarCharacter", label: "Avatar Character" },
  { id: "talkingAvatarStyle", label: "Avatar Style" },
  { id: "backgroundColor", label: "Background Color" },
  { id: "backgroundImageUrl", label: "Background Image (URL)" },
];

const checkboxItems = [
  { id: "customizedAvatar", label: "Custom Avatar" },
  { id: "transparentBackground", label: "Transparent Background" },
  { id: "videoCrop", label: "Video Crop" },
];

export default function FormPageTwo() {
  return (
    <>
      <CardHeader>
        <CardTitle>Avatar Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {inputItems.map((item) => (
              <div key={item.id} className="flex flex-col space-y-1.5">
                <Label htmlFor={item.id}>{item.label}</Label>
                <Input id={item.id} />
              </div>
            ))}
            {checkboxItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox id={item.id} />
                <label
                  htmlFor={item.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-end">
        <Button>Save</Button>
      </CardFooter>
    </>
  );
}
