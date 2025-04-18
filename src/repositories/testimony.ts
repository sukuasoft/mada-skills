const testimonies: Testimony[] = [
  {
    position: "Estudante de TI",
    name: "Carlos Augusto",
    content:
      "O MadaSkills foi essencial para eu entender HTML e CSS de forma prática. Os tutoriais são claros e os exercícios ajudam muito a fixar o conteúdo!",
  },
  {
    position: "Programadora Júnior",
    name: "Lizeth Militão",
    content:
      "A plataforma me ajudou a ganhar confiança em JavaScript. Consegui meu primeiro estágio graças ao que aprendi aqui!",
  },
  {
    position: "Desenvolver Frontend",
    name: "Noé Vaz",
    content:
      "A certificação final me motivou a terminar todos os módulos. É uma ótima forma de comprovar o conhecimento, mesmo sendo autodidata.",
  },
];


export function getTestimonies(): Testimony[] {
  return testimonies;
}