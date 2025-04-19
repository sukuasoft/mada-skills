import { RadioGroupItem } from "@/components/ui/radio-group";
import { ResponseAnalyzed } from "@/hooks/game";

type ResponseButtonProps = {
  children: React.ReactNode;
  option: number;
  selected?: boolean;
  onSelect: (option: number) => void,
  responding:boolean, 
  responseAnalyzed:ResponseAnalyzed | null
};
export default function ResponseButton({
  children,
  option,
  selected,
  onSelect, 
  responding, 
  responseAnalyzed
 
}: ResponseButtonProps) {
  return (
    <div 
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl select-none
      ${
        responding ? (
            responseAnalyzed ? (
                responseAnalyzed.correctOption == option
                ? "bg-green-100 pointer-events-none "
                : responseAnalyzed.wrongOption == option
                ? "bg-red-100 pointer-events-none "
                : " pointer-events-none "
            ):
            selected ? "animate-pulse pointer-events-none ":  "  pointer-events-none"

        ):  selected  ? "bg-primary-light" : "bg-[#fafafa] hover:bg-[#eee]"
      }
      `}
      onClick={() => onSelect(option)}
    >
      <RadioGroupItem checked={selected} value={`opcao${option}`} />
      <span>{children}</span>
    </div>
  );
}
