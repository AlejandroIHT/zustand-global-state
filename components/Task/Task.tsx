import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TaskProps {
  className?: string;
  title: string;
  shortDescription: string;
  description: string;
  progress: number;
}

const Task = ({
  className,
  title,
  shortDescription,
  description,
  progress,
}: TaskProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription>
          <div className="text-center pb-4">{shortDescription}</div>
          <div className="flex justify-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="grid grid-cols-[1fr] grid-rows-[repeat(3,_auto)] gap-y-1">
        <div className="flex justify-between p-[0_0.25rem] text-sm font-medium">
          <h3>Progress</h3>
          <h3>{`${progress}%`}</h3>
        </div>
        <Progress value={progress} />
        <div className="grid grid-cols-[1fr] grid-rows-[repeat(2,_auto)] gap-y-1 pt-4">
          <Button variant="outline">✏️ Edit</Button>
          <Button variant="ghost">🗑️ Remove</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Task;
