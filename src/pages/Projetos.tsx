import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { projects, type Project } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  usePageMeta(
    "Projetos | NUCLIC",
    "Projetos internos do NUCLIC: Célula de Robótica, Radar das Águas, AlphaLibras e NUCLIC ARCADE.",
  );

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <main className="pt-28">
      <section className="page-shell py-16">
        <div className="max-w-4xl">
          <Badge>projetos internos</Badge>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Projetos que conectam código, hardware e impacto local.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#d8f8ff]">
            As iniciativas do NUCLIC funcionam como laboratórios vivos. Cada
            card apresenta uma frente de trabalho com tecnologias, objetivos e
            próximos passos claros.
          </p>
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
              >
                <Card className="flex h-full flex-col">
                  <ImagePlaceholder label={project.imageLabel} height={260} />
                  <div className="mt-6 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan">
                      <Icon size={23} aria-hidden="true" />
                    </span>
                    <h2 className="text-2xl font-bold text-text-primary">
                      {project.title}
                    </h2>
                  </div>
                  <p className="mt-4 leading-7 text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      icon={<FiExternalLink aria-hidden="true" />}
                      variant="secondary"
                    >
                      Saiba mais
                    </Button>
                  </div>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </section>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-bg-primary/80 p-4 backdrop-blur"
          role="presentation"
          onMouseDown={() => setSelectedProject(null)}
        >
          <motion.section
            aria-labelledby="project-modal-title"
            aria-modal="true"
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-accent-blue/30 bg-bg-card p-5 shadow-2xl shadow-black/40"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            role="dialog"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge>{selectedProject.tags[0]}</Badge>
                <h2
                  id="project-modal-title"
                  className="mt-4 text-3xl font-bold text-text-primary"
                >
                  {selectedProject.title}
                </h2>
              </div>
              <button
                type="button"
                className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent-blue/30 bg-white/5 text-text-secondary transition hover:text-text-primary"
                aria-label="Fechar detalhes do projeto"
                onClick={() => setSelectedProject(null)}
              >
                <FiX aria-hidden="true" />
              </button>
            </div>

            <ImagePlaceholder
              label={selectedProject.imageLabel}
              height={260}
              className="mt-6"
            />

            <p className="mt-6 leading-7 text-text-secondary">
              {selectedProject.description}
            </p>
            <div className="mt-6 rounded-lg border border-accent-purple/20 bg-accent-purple/10 p-4">
              <h3 className="font-mono text-sm font-semibold uppercase text-accent-cyan">
                impacto
              </h3>
              <p className="mt-2 leading-7 text-text-secondary">
                {selectedProject.impact}
              </p>
            </div>
            <ul className="mt-6 grid gap-3">
              {selectedProject.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-lg border border-accent-blue/15 bg-white/[0.03] p-4 text-text-secondary"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      ) : null}
    </main>
  );
}
