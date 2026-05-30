import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiCalendar, FiUsers } from "react-icons/fi";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Badge } from "../components/ui/Badge";
import { ButtonLink } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import {
  expoStats,
  galleryLabels,
  sponsorshipTiers,
} from "../data/expoiot";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ExpoIoT() {
  usePageMeta(
    "ExpoIoT | NUCLIC",
    "ExpoIoT, principal evento de Internet das Coisas da UFC Sobral, com projetos, minicursos, palestras e cotas de patrocínio.",
  );

  return (
    <main className="pt-28">
      <section className="page-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>ExpoIoT 2025</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              O encontro onde protótipos de IoT viram conversa pública.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#d8f8ff]">
              A ExpoIoT é o principal evento de Internet das Coisas da UFC
              Sobral. Reúne estudantes, professores, visitantes, empresas e
              comunidade para ver tecnologia funcionando de perto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                to="/contato"
                icon={<FiArrowRight aria-hidden="true" />}
              >
                Falar sobre patrocínio
              </ButtonLink>
              <ButtonLink to="/projetos" variant="secondary">
                Ver projetos NUCLIC
              </ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            label="Banner ExpoIoT 2025"
            height={430}
            className="shadow-glow"
          />
        </div>
      </section>

      <section className="border-y border-accent-blue/15 bg-bg-secondary/55 py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker">o que é</p>
            <h2 className="section-title">Uma vitrine para projetos aplicados</h2>
            <p className="section-copy">
              A ExpoIoT apresenta soluções em sensores, automação, nuvem,
              robótica, dashboards, sistemas embarcados e software. A proposta é
              abrir o laboratório para que visitantes vejam os alunos explicando
              arquitetura, montagem, falhas, testes e resultados.
            </p>
            <p className="mt-5 leading-7 text-[#d8f8ff]">
              O evento também oferece minicursos e palestras, fortalecendo o
              contato entre universidade, empresas, escolas, comunidade maker e
              pessoas interessadas em tecnologia.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ImagePlaceholder
              label="ExpoIoT - público visitando bancadas de IoT"
              height={220}
            />
            <ImagePlaceholder
              label="ExpoIoT - aluno demonstrando sensor conectado"
              height={220}
            />
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div>
          <p className="section-kicker">galeria</p>
          <h2 className="section-title">Registros da edição anterior</h2>
          <p className="section-copy">
            A galeria destaca momentos de apresentação, oficinas, palestras e
            interação com protótipos desenvolvidos por estudantes.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryLabels.map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              <ImagePlaceholder label={label} height={210} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-accent-blue/15 bg-bg-secondary/55 py-20">
        <div className="page-shell">
          <div>
            <p className="section-kicker">números do evento</p>
            <h2 className="section-title">Escala acadêmica com energia maker</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expoStats.map((stat) => (
              <Card key={stat.label} className="text-center" glow="purple">
                <p className="font-mono text-4xl font-bold text-accent-cyan">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-text-secondary">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">patrocínio</p>
            <h2 className="section-title">Cotas para apoiar a ExpoIoT</h2>
            <p className="section-copy">
              As cotas conectam marcas a uma comunidade universitária que cria,
              testa e apresenta soluções tecnológicas com impacto regional.
            </p>
          </div>
          <ButtonLink to="/contato">Solicitar proposta</ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {sponsorshipTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`h-full ${index === 2 ? "border-accent-purple/50" : ""}`}
              glow={index === 2 ? "purple" : "cyan"}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-sm uppercase text-accent-cyan">
                    cota
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-text-primary">
                    {tier.name}
                  </h3>
                </div>
                <span className="rounded-lg border border-accent-blue/30 bg-white/5 px-3 py-2 font-mono text-lg font-bold text-text-primary">
                  {tier.price}
                </span>
              </div>
              <ul className="mt-6 grid gap-3">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-text-secondary">
                    <FiAward
                      className="mt-1 shrink-0 text-accent-cyan"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="page-shell pb-20">
        <Card className="grid gap-6 border-accent-cyan/35 bg-gradient-to-br from-accent-blue/15 to-accent-purple/10 p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">chamada institucional</p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary">
              Sua marca pode ajudar a colocar mais projetos em funcionamento.
            </h2>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-text-secondary">
              <span className="inline-flex items-center gap-2">
                <FiUsers aria-hidden="true" /> comunidade acadêmica
              </span>
              <span className="inline-flex items-center gap-2">
                <FiCalendar aria-hidden="true" /> edição 2025
              </span>
            </div>
          </div>
          <ButtonLink to="/contato" icon={<FiArrowRight aria-hidden="true" />}>
            Entrar em contato
          </ButtonLink>
        </Card>
      </section>
    </main>
  );
}
