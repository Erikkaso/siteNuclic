export interface ExpoStat {
  label: string;
  value: string;
}

export interface SponsorshipTier {
  benefits: string[];
  name: string;
  price: string;
}

export const expoStats: ExpoStat[] = [
  { label: "visitantes por edição", value: "500+" },
  { label: "projetos apresentados", value: "30+" },
  { label: "minicursos e palestras", value: "10+" },
  { label: "alunos envolvidos", value: "100+" },
];

export const galleryLabels = [
  "ExpoIoT - estudantes apresentando protótipos",
  "ExpoIoT - público visitando bancadas",
  "ExpoIoT - minicurso de IoT",
  "ExpoIoT - demonstração com sensores",
  "ExpoIoT - equipe organizadora",
  "ExpoIoT - palestra principal",
  "ExpoIoT - visitantes interagindo com robôs",
  "ExpoIoT - exposição de projetos finais",
];

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Megabyte",
    price: "R$150",
    benefits: [
      "Marca em materiais digitais do evento",
      "Agradecimento nas redes do NUCLIC",
      "Inserção em painel de apoiadores",
    ],
  },
  {
    name: "Gigabyte",
    price: "R$300",
    benefits: [
      "Todos os benefícios da cota Megabyte",
      "Destaque em slide de abertura",
      "Espaço para material institucional no evento",
    ],
  },
  {
    name: "Terabyte",
    price: "R$500+",
    benefits: [
      "Todos os benefícios da cota Gigabyte",
      "Destaque premium na comunicação visual",
      "Possibilidade de fala institucional curta",
    ],
  },
];
