import CertificadoContent from "./content";

type CertificadoProps = {
  params: Promise<{ slug: string }>;
};

export default async function Certificado({ params }: CertificadoProps) {
  const slug = (await params).slug;

  return <CertificadoContent slug={slug} />;
}
