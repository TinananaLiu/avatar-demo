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
import FormPageOne from "@/components/Avatar/FormPageOne";
import FormPageTwo from "@/components/Avatar/FormPageTwo";

export default function AvatarPage() {
  const [page, setPage] = useState(1); // 記錄目前的步驟 (1 or 2)
  return (
    <div className="flex flex-col max-w-screen bg-gray-100 h-screen">
      <div className="mt-20 ml-20 mb-10">
        <h1 className="text-4xl font-bold leading-tight mb-1">Avatar</h1>
      </div>
      <div className="flex flex-wrap justify-center content-center h-[60%]">
        {page === 1 && (
          <Card className="w-[40%]">
            <FormPageOne />
            <CardFooter className="flex justify-end">
              <Button onClick={() => setPage(2)}>Next</Button>
            </CardFooter>
          </Card>
        )}
        {page === 2 && (
          <Card className="w-[40%]">
            <FormPageTwo />
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setPage(1)}>
                Back
              </Button>
              <Button onClick={() => setPage(2)}>Next</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
