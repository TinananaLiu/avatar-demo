"use client";
import { Radio } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import FormPageOne from "@/components/Avatar/FormPageOne";
import FormPageTwo from "@/components/Avatar/FormPageTwo";
import AvatarControlPanel from "@/components/Avatar/AvatarControlPanel";

const formPages = [<FormPageOne />, <FormPageTwo />, <AvatarControlPanel />];

export default function AvatarPage() {
  const [page, setPage] = useState(1); // 記錄目前的步驟 (1 or 2)
  const [isLive, setIsLive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className="flex flex-col max-w-screen bg-gray-100 h-screen">
      <div className="mt-20 ml-20 mb-10">
        <h1 className="text-4xl font-bold leading-tight mb-1">Avatar</h1>
      </div>
      <div className="flex flex-wrap justify-center content-center h-[60%] gap-5">
        <Card className="w-[25%] h-[70%]">
          <AvatarControlPanel />
          {/* {formPages[page - 1]}
          <CardFooter className="flex justify-between">
            {page > 1 ? (
              <Button variant="outline" onClick={() => setPage(page - 1)}>
                Back
              </Button>
            ) : (
              <div className="flex-1" />
            )}
            {page < formPages.length ? (
              <Button onClick={() => setPage(page + 1)}>Next</Button>
            ) : (
              <Button>Submit</Button>
            )}
          </CardFooter> */}
        </Card>
        <div className="flex flex-col w-[50%] gap-5 h-[80%]">
          <div className="h-full">
            <Card className="h-full">
              <CardHeader className="flex flex-row justify-between">
                <Badge
                  icon={<Radio className="w-4 h-4" />}
                  variant={isLive ? "destructive" : "secondary"}
                >
                  LIVE
                </Badge>
                {/* <CardTitle>Live Video</CardTitle>
                <Radio /> */}
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6"></CardContent>
            </Card>
          </div>
          <div className="flex gap-5 justify-center">
            <Button
              variant="destructive"
              disabled={!isDisabled}
              onClick={() => {
                setIsLive(true);
                setIsDisabled(false);
              }}
            >
              Start session
            </Button>
            <Button variant="destructive" disabled={isDisabled}>
              Speak
            </Button>
            <Button variant="destructive" disabled={isDisabled}>
              Stop speaking
            </Button>
            <Button
              variant="destructive"
              disabled={isDisabled}
              onClick={() => {
                setIsLive(false);
                setIsDisabled(true);
              }}
            >
              Stop session
            </Button>
          </div>
        </div>

        {/* {page === 1 && (
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
        )} */}
      </div>
    </div>
  );
}
