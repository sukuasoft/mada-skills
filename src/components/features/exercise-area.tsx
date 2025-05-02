import { maxTime } from "@/lib/constants";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import QuizArea from "./question-area";
import { ChevronRight } from "lucide-react";

import { ResponseAnalyzed } from "@/hooks/game";
import Loading from "./loading";

type ExerciseAreaProps = {
  maxQuestions: number;
  questionsAnswered: number;
 currentQuestion: Question | null;
 restTime:number;
 onSelectOption:(option: number)=>void;
 optionSelected:number | null;
responding:boolean;
submitResponse:()=>void;
responseAnalyzed:ResponseAnalyzed | null;

}

export default function ExerciseArea({questionsAnswered,responseAnalyzed, submitResponse, responding, restTime,optionSelected ,onSelectOption ,maxQuestions, currentQuestion}: ExerciseAreaProps) {
  return (
    <div>
      <Progress value={(restTime/maxTime) * 100} className="mb-4" />
      <p className="text-end">{questionsAnswered+1}/{maxQuestions}</p>
      {
        currentQuestion && (
          <QuizArea 
          responseAnalyzed={responseAnalyzed}
          responding={responding}
          optionSelected={optionSelected}
          onSelectOption={onSelectOption}
          question={currentQuestion} />
        )
      }
    
      <Button onClick={submitResponse}  disabled={optionSelected== null || responding} className="mt-2">
        Submeter
        {
          responding ? (
              <Loading  size={30} />
          ): 
          (  <ChevronRight />)
        }
      
      </Button>
    </div>
  );
}
