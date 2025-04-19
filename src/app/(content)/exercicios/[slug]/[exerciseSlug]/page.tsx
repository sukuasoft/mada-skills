import ExerciseContent from "./content";

type ExerciseProps = {
  params: Promise<{ slug: string, exerciseSlug:string }>;
};

export default async function Exercise({ params }: ExerciseProps) {
  const {slug, exerciseSlug} = (await params);

  return <ExerciseContent slug={slug}  exerciseSlug={exerciseSlug} />;
}
