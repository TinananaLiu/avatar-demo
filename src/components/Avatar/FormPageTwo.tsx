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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formFields = [
  { id: "talkingAvatarCharacter", label: "Avatar Character" },
  { id: "talkingAvatarStyle", label: "Avatar Style" },
  { id: "backgroundColor", label: "Background Color" },
  { id: "backgroundImageUrl", label: "Background Image (URL)" },
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
            {formFields.map((field) => (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input id={field.id} />
              </div>
            ))}
          </div>
        </form>
      </CardContent>
    </>
  );
}
