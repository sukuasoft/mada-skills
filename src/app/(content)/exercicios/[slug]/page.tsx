import ExercicioContent from "./content";

type ExercicioProps = {
  params: Promise<{ slug: string }>;
};

export default async function Exercicio({ params }: ExercicioProps) {
  const slug = (await params).slug;

  return <ExercicioContent slug={slug} />;
}
