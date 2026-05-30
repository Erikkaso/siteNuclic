import {
  FiCpu,
  FiDroplet,
  FiRadio,
} from "react-icons/fi";
import { FaGamepad } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Project {
  description: string;
  details: string[];
  icon: IconType;
  id: string;
  imageLabel: string;
  impact: string;
  shortDescription: string;
  tags: string[];
  title: string;
}

export const projects: Project[] = [
  {
    id: "celula-robotica",
    title: "Célula de Robótica",
    shortDescription:
      "Formação prática em automação, robótica móvel, sensores e sistemas embarcados.",
    description:
      "A Célula de Robótica aproxima estudantes da realidade de prototipagem, controle, eletrônica e automação. Os encontros combinam estudo orientado, desafios práticos e construção de robôs com Arduino, ESP32, sensores, motores e FreeRTOS.",
    details: [
      "Módulos de eletrônica, sensores, motores, comunicação serial e controle.",
      "Projetos com rovers, robôs seguidores de linha e braços robóticos.",
      "Trilhas para iniciantes e participantes avançados, com acompanhamento de orientadores.",
    ],
    icon: FiCpu,
    imageLabel: "Célula de Robótica - bancada com robôs e sensores",
    impact:
      "Forma alunos para competições, pesquisa aplicada e projetos reais de automação.",
    tags: ["Robótica", "Arduino", "ESP32", "FreeRTOS", "Sensores"],
  },
  {
    id: "radar-das-aguas",
    title: "Radar das Águas",
    shortDescription:
      "Monitoramento hídrico com sensores IoT para acompanhar dados ambientais em campo.",
    description:
      "O Radar das Águas usa redes de sensores, transmissão de dados e dashboards para observar variáveis ligadas à água. A proposta é levar tecnologia de baixo custo para apoiar decisões em comunidades, laboratórios e ações de extensão.",
    details: [
      "Coleta de dados com sensores de nível, vazão, temperatura e qualidade da água.",
      "Envio de dados por dispositivos embarcados conectados à nuvem.",
      "Visualização em painéis para acompanhamento histórico e alertas.",
    ],
    icon: FiDroplet,
    imageLabel: "Radar das Águas - sensores em ponto de monitoramento hídrico",
    impact:
      "Conecta pesquisa, extensão e infraestrutura IoT para problemas ambientais locais.",
    tags: ["IoT", "Sensores", "Cloud", "Dashboards", "Sustentabilidade"],
  },
  {
    id: "alphalibras",
    title: "AlphaLibras",
    shortDescription:
      "Ensino de Libras com inteligência artificial, visão computacional e gamificação.",
    description:
      "O AlphaLibras explora IA e experiência gamificada para apoiar o aprendizado de Libras. O projeto combina reconhecimento de sinais, desafios progressivos e feedback visual para tornar o estudo mais acessível e interativo.",
    details: [
      "Reconhecimento de gestos com visão computacional e modelos de IA.",
      "Trilhas de aprendizado gamificadas para reforço de vocabulário.",
      "Interface pensada para estudantes, professores e iniciativas de inclusão.",
    ],
    icon: FiRadio,
    imageLabel: "AlphaLibras - interface de IA para ensino de Libras",
    impact:
      "Une acessibilidade e tecnologia aplicada em uma solução educacional inclusiva.",
    tags: ["IA", "Acessibilidade", "Visão Computacional", "Educação"],
  },
  {
    id: "nuclic-arcade",
    title: "NUCLIC ARCADE",
    shortDescription:
      "Fliperama comunitário sem fins lucrativos com BatoceraOS e cultura maker.",
    description:
      "O NUCLIC ARCADE é um projeto maker que transforma hardware, marcenaria, software e cultura retrô em um fliperama comunitário. A iniciativa usa BatoceraOS e componentes reaproveitados para criar um espaço de convivência tecnológica.",
    details: [
      "Montagem de gabinete, controles, interface e sistema com BatoceraOS.",
      "Uso de hardware acessível e manutenção colaborativa.",
      "Atividades comunitárias sem fins lucrativos dentro do ambiente acadêmico.",
    ],
    icon: FaGamepad,
    imageLabel: "NUCLIC ARCADE - gabinete comunitário com BatoceraOS",
    impact:
      "Materializa cultura maker em um equipamento de uso coletivo e educativo.",
    tags: ["Maker", "BatoceraOS", "Hardware", "Comunidade"],
  },
];
