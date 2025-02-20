import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpeechTTSForm from "./SpeechTTSForm";
import AvatarConfigForm from "./AvatarConfigForm";

export default function SettingDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Settings</Button>
        </DialogTrigger>
        <DialogContent className="h-[75%] flex flex-col flex-grow overflow-hidden max-h-[700px] min-h-[672px]">
          <DialogHeader>
            <DialogTitle>Avatar Settings</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="avatar">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="speechTTS">Speech & TTS</TabsTrigger>
              <TabsTrigger value="avatarConfig">Avatar Config</TabsTrigger>
            </TabsList>
            <TabsContent value="speechTTS">
              <SpeechTTSForm />
            </TabsContent>
            <TabsContent value="avatarConfig">
              <AvatarConfigForm />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
