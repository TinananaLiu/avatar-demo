import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";
import SettingDialog from "./SettingDialog";

export default function AvatarControlPanel() {
  return (
    <Card className="w-[20%] h-[70%] overflow-hidden min-h-[300px] flex flex-col gap-3">
      <CardHeader className="pb-0">
        <CardTitle>Avatar Control Panel</CardTitle>
        <CardDescription>
          Converts your input text into speech in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-[80%]">
        <form className="flex flex-col gap-4 h-full">
          <div className="flex flex-col space-y-1.5 h-[80%]">
            <Label htmlFor="spokenText">Spoken Text</Label>
            <Textarea
              id="spokenText"
              className="flex-grow min-h-[100px] resize-none overflow-auto"
            />
          </div>
          <div className="flex justify-center">
            <SettingDialog />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
