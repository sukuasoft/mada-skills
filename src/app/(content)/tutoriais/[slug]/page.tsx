import TutorialContent from "./content";

type TutorialProps = {
  params: Promise<{ slug: string }>;
};

export default async function Tutorial({ params }: TutorialProps) {
  const slug = (await params).slug;

  return <TutorialContent slug={slug} />;
}
