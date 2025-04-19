import ExerciseContent from "./content";

type ExerciseProps = {
  params: Promise<{ slug: string, exerciseSlug:string }>;
};

export default async function Exercise({ params }: ExerciseProps) {
  const {slug, exerciseSlug} = (await params);
  console.log(slug, exerciseSlug);

  return <ExerciseContent slug={slug}  exerciseSlug={exerciseSlug} />;
}
