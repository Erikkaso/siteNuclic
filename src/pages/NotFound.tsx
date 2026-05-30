import { FiHome, FiTerminal } from "react-icons/fi";
import { ButtonLink } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "404 | NUCLIC",
    "Página não encontrada no site do NUCLIC.",
  );

  return (
    <main className="grid min-h-screen place-items-center px-4 pt-28">
      <Card className="w-full max-w-3xl overflow-hidden p-0" glow="purple">
        <div className="flex items-center gap-2 border-b border-accent-blue/20 bg-slate-950/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-xs text-text-secondary">
            nuclic-terminal
          </span>
        </div>
        <section className="p-6 sm:p-9">
          <div className="flex items-center gap-3 text-accent-cyan">
            <FiTerminal size={28} aria-hidden="true" />
            <p className="font-mono text-sm uppercase tracking-[0.18em]">
              erro 404
            </p>
          </div>
          <h1 className="mt-6 text-4xl font-bold text-text-primary sm:text-5xl">
            Rota fora do circuito.
          </h1>
          <div className="mt-6 rounded-lg border border-accent-blue/20 bg-black/25 p-4 font-mono text-sm leading-7 text-text-secondary">
            <p>
              <span className="text-accent-cyan">$</span> abrir /noticias
            </p>
            <p className="text-red-200">
              retorno: conteúdo ainda não publicado nesta rota
            </p>
            <p>
              <span className="text-accent-cyan">$</span> redirecionar --home
            </p>
          </div>
          <p className="mt-6 max-w-2xl leading-7 text-text-secondary">
            A página solicitada não está disponível. Algumas rotas, como
            Notícias, foram reservadas para uma etapa futura do site.
          </p>
          <div className="mt-8">
            <ButtonLink to="/" icon={<FiHome aria-hidden="true" />}>
              Voltar para Home
            </ButtonLink>
          </div>
        </section>
      </Card>
    </main>
  );
}
