type ConquistaProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
};
export default function Conquista({ title, value, icon }: ConquistaProps) {
  return (
    <div className="flex items-center gap-3 ">
      <div className="bg-primary-light text-primary rounded-md p-3">
        {icon}
      </div>

      <div>
        <p className="font-bold text-lg max-sm:text-sm">{value}+</p>
        <p className="text-zinc-500 max-sm:text-xs">{title}</p>
      </div>
    </div>
  );
}
