import { RadioGroup } from "@/components/ui/radio-group";
import ResponseButton from "./response-button";

export default function QuizArea() {
  return (
    <div className="rounded-xl px-4  py-4 shadow-md mt-4 mb-4">
      <p className="h-[100px]  border-b border-solid border-[#eee] pb-2 px-4 flex items-center justify-center mb-2">
        Pergunta
      </p>
      <div className="flex flex-col gap-4">
        <RadioGroup defaultValue="comfortable">

            <ResponseButton option='A' selected={true}>
                Opção A
            </ResponseButton>
       


            <ResponseButton option='B'>
                Opção B
            </ResponseButton>


            <ResponseButton option='C'>
                Opção C
            </ResponseButton>


            <ResponseButton option='D'>
                Opção D
            </ResponseButton>
       
       
       

        </RadioGroup>
      </div>
    </div>
  );
}
