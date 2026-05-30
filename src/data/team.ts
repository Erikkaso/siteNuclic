export interface TeamMember {
  name: string;
  photoLabel: string;
  role: string;
}

export interface Partner {
  label: string;
  name: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Prof. Orientador NUCLIC",
    photoLabel: "FOTO: Prof. Orientador NUCLIC",
    role: "Coordenação acadêmica e orientação de projetos",
  },
  {
    name: "Eric Carneiro",
    photoLabel: "FOTO: Eric Carneiro - Desenvolvedor",
    role: "Desenvolvimento, sistemas web e apoio técnico",
  },
  {
    name: "Equipe de Robótica",
    photoLabel: "FOTO: Equipe de Robótica",
    role: "Automação, sensores, Arduino, ESP32 e FreeRTOS",
  },
  {
    name: "Equipe de IoT",
    photoLabel: "FOTO: Equipe de IoT",
    role: "Sensoriamento, cloud, dashboards e prototipagem",
  },
  {
    name: "Equipe de IA",
    photoLabel: "FOTO: Equipe de IA",
    role: "Modelos inteligentes, visão computacional e educação",
  },
  {
    name: "Colaboradores NUCLIC",
    photoLabel: "FOTO: Colaboradores NUCLIC",
    role: "Extensão, eventos, documentação e operação maker",
  },
];

export const partners: Partner[] = [
  { name: "UFC Sobral", label: "LOGO: UFC Sobral" },
  { name: "Curso de Engenharia de Computação", label: "LOGO: Engenharia de Computação" },
  { name: "Parceiro Institucional", label: "LOGO: Parceiro X" },
  { name: "Comunidade Maker", label: "LOGO: Comunidade Maker" },
];
