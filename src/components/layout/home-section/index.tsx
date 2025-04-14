type HomeSectionProps = {
  children: React.ReactNode;
  description: string;
  title: string;
};

export default function HomeSection({
  title,
  description,
  children,
}: HomeSectionProps) {
  const titles = title.split(" ");
  return (
    <div className="px-10 py-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-1 ">
          <p className="text-primary-dark font-bold text-2xl">{titles[0]}</p>

          <p className="text-primary  font-bold text-2xl relative w-fit">
            {titles.length > 1 ? titles[1] : ""}
            <span className="bg-primary h-[1px] bottom-[-5px] block"></span>
          </p>
        </div>
        <p className="text-zinc-500 w-[400px] max-w-full">{description}</p>
      </div>

      <div className="mt-10 text-black">{children}</div>
    </div>
  );
}
