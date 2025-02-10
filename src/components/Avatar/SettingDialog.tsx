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
import FormPageOne from "./FormPageOne";
import FormPageTwo from "./FormPageTwo";

export default function SettingDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Settings</Button>
        </DialogTrigger>
        <DialogContent className="h-[62%] flex flex-col flex-grow">
          <DialogHeader>
            <DialogTitle>Avatar settings</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="avatar">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="formone">First</TabsTrigger>
              <TabsTrigger value="formtwo">Second</TabsTrigger>
            </TabsList>
            <TabsContent value="formone">
              <FormPageOne />
            </TabsContent>
            <TabsContent value="formtwo">
              <FormPageTwo />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
