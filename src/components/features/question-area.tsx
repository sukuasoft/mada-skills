import { RadioGroup } from "@/components/ui/radio-group";
import ResponseButton from "./response-button";
import { ResponseAnalyzed } from "@/hooks/game";

type QuestionArea = {
  question:Question;
  onSelectOption:(option: number)=>void;
  optionSelected:number | null;
  responding:boolean;
   responseAnalyzed:ResponseAnalyzed | null
}
export default function QuestionArea({question, responding, responseAnalyzed, onSelectOption, optionSelected}:QuestionArea) {
  return (
    <div className="rounded-xl px-4  py-4 shadow-md mt-4 mb-4">
      <p className="h-[100px]  border-b border-solid border-[#eee] pb-2 px-4 flex items-center justify-center mb-2">
        {question.question}
      </p>
      <div className="flex flex-col gap-4">
        <RadioGroup defaultValue="comfortable">

            {
              question.options.map((option, index) => {
                return <ResponseButton responseAnalyzed={responseAnalyzed}  selected={index == optionSelected} responding={responding} onSelect={onSelectOption} key={index} option={index}>{option}</ResponseButton>
              } )
            }
      
        </RadioGroup>
      </div>
    </div>
  );
}
