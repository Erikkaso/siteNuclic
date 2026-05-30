import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiRadio,
} from "react-icons/fi";
import { Badge } from "../components/ui/Badge";
import { ButtonLink } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import mascotImage from "../assets/images/mascote-sorrindo.png";

const areas = [
  {
    icon: FiRadio,
    title: "IoT",
    description:
      "Sensores, telemetria, protocolos e protótipos conectados para problemas reais.",
  },
  {
    icon: FiDatabase,
    title: "Inteligência Artificial",
    description:
      "Modelos aplicados em educação, visão computacional e automação de decisões.",
  },
  {
    icon: FiCloud,
    title: "Cloud",
    description:
      "Backends, dashboards e infraestrutura para dados de laboratório e extensão.",
  },
  {
    icon: FiCpu,
    title: "Robótica",
    description:
      "Arduino, ESP32, FreeRTOS, motores, sensores e sistemas embarcados.",
  },
];

const stats = [
  { label: "anos de atuação maker", suffix: "+", value: 5 },
  { label: "alunos impactados", suffix: "+", value: 100 },
  { label: "projetos em ciclos internos", suffix: "+", value: 10 },
  { label: "evento principal de IoT", suffix: "", value: 1 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

interface AnimatedStatProps {
  label: string;
  suffix: string;
  value: number;
}

function AnimatedStat({ label, suffix, value }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * progress));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <Card ref={ref} className="p-6 text-center" glow="purple">
      <p className="font-mono text-4xl font-bold text-accent-cyan md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-wide text-text-secondary">
        {label}
      </p>
    </Card>
  );
}

export default function Home() {
  usePageMeta(
    "NUCLIC | Núcleo de Sistemas de Computação da UFC Sobral",
    "Conheça o NUCLIC, laboratório maker da UFC Sobral com projetos em IoT, IA, cloud, robótica, sistemas embarcados e ExpoIoT.",
  );

  return (
    <main>
      <section className="page-shell pt-24 lg:pt-28">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,730px)_minmax(320px,1fr)]">
          <motion.article
            className="relative min-h-[590px] overflow-hidden rounded-md border border-white/85 bg-gradient-to-b from-[#2596be] to-[#1f86aa] p-6 text-white sm:min-h-[654px] sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="pointer-events-none absolute -bottom-28 -left-6 text-[230px] font-bold leading-none text-[#005f78]/20">
              N
            </span>
            <span className="pointer-events-none absolute bottom-4 left-[150px] h-40 w-[365px] rounded-t-full bg-white/10" />
            <div className="relative z-10">
              <h1 className="text-[70px] font-normal leading-none tracking-normal sm:text-[100px]">
                Nuclic
              </h1>
              <p className="mt-2 text-2xl font-bold leading-tight sm:text-[26px]">
                Laboratório de Sistemas de Computação
              </p>
              <div className="mt-8 grid max-w-[560px] grid-cols-1 gap-2.5 sm:grid-cols-[auto_auto]">
                {["Internet das Coisas", "Inteligência Artificial", "Robótica", "Computação em Nuvem"].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="inline-flex min-h-9 items-center rounded-full bg-white/24 px-4 text-sm text-white ring-1 ring-white/45 sm:text-base"
                    >
                      {pill}
                    </span>
                  ),
                )}
              </div>
            </div>
            <img
              src={mascotImage}
              alt="Carnaubinha"
              className="pointer-events-none absolute -bottom-24 left-1/2 z-[1] w-[360px] max-w-none -translate-x-1/2 select-none drop-shadow-[18px_20px_18px_rgba(0,47,63,0.28)] sm:left-10 sm:w-[470px] sm:translate-x-0"
            />
            <ButtonLink
              to="/projetos"
              className="absolute bottom-5 right-5 z-10 min-h-10 border-white/70 bg-[#075b75] px-4 text-lg text-white shadow-[0_12px_24px_rgba(7,91,117,0.24)] hover:bg-[#0a4f64]"
              icon={<FiArrowRight aria-hidden="true" />}
            >
              Conheça o Nuclic
            </ButtonLink>
          </motion.article>

          <div className="grid gap-4 lg:grid-rows-2">
            <Card className="relative min-h-[285px] overflow-hidden border-white/85 bg-gradient-to-b from-[#37a7cb] to-[#2596be] p-5 text-white sm:min-h-[319px]">
              <h2 className="text-5xl font-normal leading-none sm:text-[58px]">
                Notícias
              </h2>
              <p className="mt-5 max-w-sm text-xl leading-8 sm:text-2xl">
                Acompanhe novidades, editais, eventos e bastidores do grupo.
              </p>
              <ButtonLink
                to="/noticias"
                className="absolute bottom-4 right-4 bg-white/88 text-lg text-[#075b75] hover:bg-white"
              >
                Acompanhe
              </ButtonLink>
            </Card>
            <Card className="relative min-h-[285px] overflow-hidden border-white/85 bg-gradient-to-b from-[#2596be] to-[#147da1] p-5 text-white sm:min-h-[319px]">
              <h2 className="text-5xl font-normal leading-none sm:text-[58px]">
                Projetos
              </h2>
              <p className="mt-5 max-w-sm text-xl leading-8 sm:text-2xl">
                Conheça nossas iniciativas em robótica, IoT, IA e sistemas
                embarcados.
              </p>
              <ButtonLink
                to="/projetos"
                className="absolute bottom-4 right-4 bg-white/88 text-lg text-[#075b75] hover:bg-white"
              >
                Ver projetos
              </ButtonLink>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <div>
            <p className="section-kicker">áreas de atuação</p>
            <h2 className="section-title">Do sensor ao sistema em produção</h2>
            <p className="section-copy">
              A rotina do NUCLIC junta estudo, prototipagem e entrega prática.
              As áreas se cruzam nos projetos internos e nas ações de extensão.
            </p>
          </div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.div key={area.title} variants={item}>
                  <Card className="h-full">
                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-text-primary">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {area.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-accent-blue/15 bg-bg-secondary/55 py-20">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-kicker">nossos projetos</p>
              <h2 className="section-title">Iniciativas internas do laboratório</h2>
              <p className="section-copy">
                Cada projeto funciona como trilha de aprendizado e como entrega
                aplicada para a comunidade acadêmica.
              </p>
            </div>
            <ButtonLink to="/projetos" variant="secondary">
              Abrir página de projetos
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <Card key={project.id} className="flex h-full flex-col gap-4">
                  <ImagePlaceholder
                    label={project.imageLabel}
                    height={170}
                    className="shrink-0"
                  />
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-purple/15 text-accent-purple">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-text-secondary">
                    {project.shortDescription}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">expoiot</p>
            <h2 className="section-title">
              O principal evento de IoT da UFC Sobral
            </h2>
            <p className="section-copy">
              A ExpoIoT reúne centenas de visitantes, dezenas de projetos,
              minicursos e palestras em uma vitrine para soluções criadas por
              estudantes, professores e colaboradores.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                to="/expoiot"
                className="bg-[#006b83] shadow-[0_14px_28px_rgba(0,63,79,0.2)]"
              >
                Ver ExpoIoT
              </ButtonLink>
              <ButtonLink to="/contato" variant="secondary">
                Cotas de patrocínio
              </ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            label="Banner ExpoIoT 2025 com público e bancadas de projetos"
            height={360}
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="page-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
