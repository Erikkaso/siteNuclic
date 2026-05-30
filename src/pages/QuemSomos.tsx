import { motion } from "framer-motion";
import { FiCompass, FiEye, FiHeart, FiTool } from "react-icons/fi";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { usePageMeta } from "../hooks/usePageMeta";

const values = [
  {
    icon: FiTool,
    title: "Prática antes do discurso",
    text: "Valorizamos protótipos, testes, documentação e entrega funcional.",
  },
  {
    icon: FiHeart,
    title: "Colaboração",
    text: "Alunos, professores e colaboradores trabalham em ciclos de aprendizado compartilhado.",
  },
  {
    icon: FiCompass,
    title: "Impacto local",
    text: "Projetos precisam conversar com problemas reais da universidade e da região.",
  },
];

export default function QuemSomos() {
  usePageMeta(
    "Quem Somos | NUCLIC",
    "Missão, história e valores do NUCLIC, laboratório maker de sistemas de computação da UFC Sobral.",
  );

  return (
    <main className="pt-28">
      <section className="page-shell py-16">
        <div className="max-w-4xl">
          <Badge>quem somos</Badge>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Um laboratório para transformar curiosidade em tecnologia útil.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#d8f8ff]">
            O NUCLIC é o Núcleo de Sistemas de Computação da UFC Sobral. É um
            espaço maker acadêmico onde ideias saem do slide e chegam à bancada,
            ao código, ao sensor, ao robô e ao sistema funcionando.
          </p>
        </div>
      </section>

      <section className="border-y border-accent-blue/15 bg-bg-secondary/55 py-16">
        <div className="page-shell grid gap-5 md:grid-cols-3">
          <Card>
            <FiCompass className="text-accent-cyan" size={26} aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold text-text-primary">Missão</h2>
            <p className="mt-3 leading-7 text-text-secondary">
              Formar pessoas por meio de projetos práticos em computação,
              engenharia e inovação, conectando conhecimento acadêmico a
              problemas concretos.
            </p>
          </Card>
          <Card glow="purple">
            <FiEye className="text-accent-purple" size={26} aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold text-text-primary">Visão</h2>
            <p className="mt-3 leading-7 text-text-secondary">
              Ser uma referência regional em prototipagem, sistemas inteligentes
              e formação maker dentro da universidade pública.
            </p>
          </Card>
          <Card>
            <FiTool className="text-accent-cyan" size={26} aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold text-text-primary">Lema</h2>
            <p className="mt-3 leading-7 text-text-secondary">
              Menos palestra bonita, mais projeto funcionando.
            </p>
          </Card>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">história</p>
            <h2 className="section-title">Um núcleo feito de ciclos práticos</h2>
            <p className="section-copy">
              O NUCLIC cresceu a partir da necessidade de aproximar alunos da
              prática em sistemas de computação. A cada ciclo, o laboratório
              organiza células de estudo, projetos internos, mentorias,
              protótipos e apresentações públicas.
            </p>
            <p className="mt-5 leading-7 text-[#d8f8ff]">
              A ExpoIoT consolidou essa cultura ao abrir as portas para que a
              comunidade veja projetos em funcionamento. Hoje o núcleo reúne
              iniciativas em robótica, monitoramento ambiental, IA educacional,
              software, automação e cultura maker.
            </p>
          </div>
          <ImagePlaceholder
            label="Laboratório NUCLIC com bancadas, protótipos e alunos em atividade"
            height={380}
          />
        </div>
      </section>

      <section className="border-y border-accent-blue/15 bg-bg-secondary/55 py-20">
        <div className="page-shell">
          <div>
            <p className="section-kicker">valores</p>
            <h2 className="section-title">Como o laboratório trabalha</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45 }}
                >
                  <Card className="h-full">
                    <Icon className="text-accent-cyan" size={26} aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold text-text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-3 leading-7 text-text-secondary">
                      {value.text}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
