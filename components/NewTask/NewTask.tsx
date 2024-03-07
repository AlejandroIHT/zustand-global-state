"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useTaskStore from "@/hooks/useTaskStore";

const NewTask = () => {
  const {
    title,
    description,
    shortDescription,
    progress,
    updateTitle,
    updateDescription,
    updateProgress,
    updateShortDescription,
  } = useTaskStore((state) => state);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTitle(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateDescription(e.target.value);
  };
  const handleShortDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateShortDescription(e.target.value);
  };
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProgress(Number(e.target.value));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-fuchsia-800 text-white" variant="secondary">
          ⚙️ New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>
            Sure you that the all fields are filled before submitting the form.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              className="col-span-3"
              onChange={handleTitleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="short-description" className="text-right">
              Short descripion
            </Label>
            <Input
              id="short-description"
              value={shortDescription}
              className="col-span-3"
              onChange={handleShortDescriptionChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="body" className="text-right">
              Body
            </Label>
            <Input
              id="body"
              value={description}
              className="col-span-3"
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="progress" className="text-right">
              Progress (%)
            </Label>
            <Input
              id="progress"
              value={progress}
              className="col-span-3"
              type="number"
              onChange={handleProgressChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewTask;
