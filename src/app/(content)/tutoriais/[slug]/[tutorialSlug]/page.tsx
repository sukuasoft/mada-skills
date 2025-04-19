import TutorialContent from "./content";

type TutorialProps = {
  params: Promise<{ slug: string, tutorialSlug:string }>;
};

export default async function Tutorial({ params }: TutorialProps) {
  const {slug, tutorialSlug} = (await params);
  console.log(slug, tutorialSlug);

  return <TutorialContent slug={slug}  tutorialSlug={tutorialSlug} />;
}
