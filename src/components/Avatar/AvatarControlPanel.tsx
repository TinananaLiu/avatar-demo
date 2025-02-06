import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import SettingDialog from "./SettingDialog";

export default function AvatarControlPanel() {
  return (
    <>
      <CardHeader>
        <CardTitle>Avatar Control Panel</CardTitle>
        <CardDescription>
          Converts your input text into speech in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="spokenText">Spoken Text</Label>
              <Textarea
                placeholder="Type your message here."
                id="spokenText"
                className="h-56 resize-none"
              />
            </div>
            <div className="flex justify-center mt-2">
              <SettingDialog />
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
}
