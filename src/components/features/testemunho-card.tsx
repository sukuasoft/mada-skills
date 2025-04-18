import { Quote } from "lucide-react";

type TestemunhoCardProps = {
  name: string;
  position: string;
  content: string;
};
export default function TestemunhoCard({
  name,
  position,
  content,
}: TestemunhoCardProps) {


  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative  select-none">
        <Quote fill="#0B73E1" className="absolute right-5 top-5 text-primary"/>
    
        <p className="font-bold">{name}</p>
        <p className="text-zinc-500 text-sm mb-3">{position}</p>
     
      <p className=" text-sm">{content}</p>

    </div>
  );
}
