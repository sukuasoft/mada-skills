import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import QuizArea from "./quiz-area";
import { ChevronRight } from "lucide-react";

export default function ExerciseArea() {
  return (
    <div>
      <Progress value={55} className="mb-4" />
      <p className="text-end">1/5</p>
      <QuizArea />
    
      <Button className="mt-2">
        Submeter
        <ChevronRight />
      </Button>
    </div>
  );
}
