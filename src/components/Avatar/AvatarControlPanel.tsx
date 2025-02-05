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

export default function AvatarControlPanel() {
  return (
    <>
      <CardHeader>
        <CardTitle>Avatar Control Panel</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="spokenText">Spoken Text</Label>
              <Textarea
                placeholder="Type your message here."
                id="spokenText"
                className="resize-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
}
