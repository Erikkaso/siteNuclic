import { useRef, useState, type FormEvent } from "react";
import { FiAward, FiMapPin, FiMail, FiSend } from "react-icons/fi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { usePageMeta } from "../hooks/usePageMeta";
import { sponsorshipTiers } from "../data/expoiot";

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface FormspreeError {
  message: string;
}

interface FormspreeResponse {
  errors?: FormspreeError[];
}

export default function Contato() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  usePageMeta(
    "Contato | NUCLIC",
    "Entre em contato com o NUCLIC da UFC Sobral para projetos, parcerias, patrocínio da ExpoIoT e colaboração institucional.",
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const formData = new FormData(formRef.current);
      const response = await fetch("https://formspree.io/f/SEU_ID_FORMSPREE", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        const data = (await response.json()) as FormspreeResponse;
        const msg =
          data?.errors?.map((err) => err.message).join(", ") ||
          "Erro ao enviar.";
        setStatus("error");
        setErrorMsg(msg);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Verifique sua conexão e tente novamente.");
    }
  };

  const handleSponsorTierClick = (tierName: string) => {
    if (!formRef.current) {
      return;
    }

    const subject = formRef.current.elements.namedItem(
      "assunto",
    ) as HTMLSelectElement | null;
    const message = formRef.current.elements.namedItem(
      "mensagem",
    ) as HTMLTextAreaElement | null;

    if (subject) {
      subject.value = "Patrocínio ExpoIoT";
    }

    if (message) {
      message.value = `Olá, tenho interesse na Cota ${tierName} da ExpoIoT. Gostaria de receber mais informações sobre benefícios, disponibilidade e próximos passos.`;
    }

    const formPanel = document.getElementById("formulario-contato");

    if (formPanel) {
      const top =
        formPanel.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }

    window.setTimeout(() => {
      const firstInput = formRef.current?.elements.namedItem(
        "nome",
      ) as HTMLInputElement | null;
      firstInput?.focus({ preventScroll: true });
    }, 420);
  };

  return (
    <main className="pt-28">
      <section className="page-shell py-16">
        <div className="max-w-4xl">
          <Badge>contato</Badge>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Vamos conversar sobre projetos, parcerias e ExpoIoT.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#d8f8ff]">
            Envie uma mensagem para o NUCLIC sobre projetos, parcerias,
            patrocínio da ExpoIoT, ações de extensão ou colaboração acadêmica.
          </p>
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="mb-8">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">interesse em patrocínio</p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Cotas ExpoIoT
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#d8f8ff]">
              Escolha uma cota para preencher a mensagem automaticamente e
              agilizar o contato com a equipe.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sponsorshipTiers.map((tier) => (
              <Card
                key={tier.name}
                className="flex h-full flex-col border-white/85 bg-white/75"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[#006b83]">
                      cota
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#004f63]">
                      {tier.name}
                    </h3>
                  </div>
                  <span className="rounded-lg bg-[#006b83] px-3 py-2 text-sm font-bold text-white">
                    {tier.price}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#004f63]">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <FiAward className="mt-1 shrink-0 text-[#0a9abc]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="focus-ring mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-[#006b83] px-4 text-white transition hover:-translate-y-0.5 hover:bg-[#00566a]"
                  onClick={() => handleSponsorTierClick(tier.name)}
                >
                  Tenho interesse
                </button>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Card id="formulario-contato" className="p-5 sm:p-7">
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-text-primary">
                    Nome completo
                  </span>
                  <input
                    className="focus-ring rounded-lg border border-[#006b83]/30 bg-white/45 px-4 py-3 text-[#004f63] outline-none transition placeholder:text-[#004f63]/55 hover:bg-white/60"
                    name="nome"
                    placeholder="Seu nome"
                    required
                    type="text"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-text-primary">
                    Empresa
                    <span className="font-normal text-text-secondary">
                      {" "}
                      (opcional)
                    </span>
                  </span>
                  <input
                    className="focus-ring rounded-lg border border-[#006b83]/30 bg-white/45 px-4 py-3 text-[#004f63] outline-none transition placeholder:text-[#004f63]/55 hover:bg-white/60"
                    name="empresa"
                    placeholder="Instituição ou empresa"
                    type="text"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-text-primary">
                    E-mail
                  </span>
                  <input
                    className="focus-ring rounded-lg border border-[#006b83]/30 bg-white/45 px-4 py-3 text-[#004f63] outline-none transition placeholder:text-[#004f63]/55 hover:bg-white/60"
                    name="email"
                    placeholder="voce@email.com"
                    required
                    type="email"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-text-primary">
                    Assunto
                  </span>
                  <select
                    className="focus-ring rounded-lg border border-[#006b83]/30 bg-white/45 px-4 py-3 text-[#004f63] outline-none transition hover:bg-white/60"
                    name="assunto"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="Projetos">Projetos</option>
                    <option value="Patrocínio ExpoIoT">Patrocínio ExpoIoT</option>
                    <option value="Parceria institucional">
                      Parceria institucional
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-text-primary">
                  Mensagem
                </span>
                <textarea
                  className="focus-ring min-h-40 resize-y rounded-lg border border-[#006b83]/30 bg-white/45 px-4 py-3 text-[#004f63] outline-none transition placeholder:text-[#004f63]/55 hover:bg-white/60"
                  name="mensagem"
                  placeholder="Conte rapidamente como podemos ajudar."
                  required
                />
              </label>

              <input type="hidden" name="_subject" value="Contato pelo site NUCLIC" />

              {status === "success" ? (
                <p
                  className="rounded-lg border border-emerald-500/30 bg-emerald-50/80 px-4 py-3 text-sm font-semibold text-emerald-800"
                  role="status"
                >
                  Mensagem enviada com sucesso. O NUCLIC retornará pelo e-mail
                  informado.
                </p>
              ) : null}

              {status === "error" ? (
                <p
                  className="rounded-lg border border-red-500/30 bg-red-50/80 px-4 py-3 text-sm font-semibold text-red-800"
                  role="alert"
                >
                  {errorMsg}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={status === "loading"}
                icon={<FiSend aria-hidden="true" />}
              >
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </Card>

          <div className="grid gap-5">
            <Card>
              <FiMail className="text-accent-cyan" size={26} aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold text-text-primary">
                Contato direto
              </h2>
              <a
                className="focus-ring mt-4 inline-flex rounded text-lg font-semibold text-accent-cyan"
                href="mailto:nuclic@sobral.ufc.br"
              >
                nuclic@sobral.ufc.br
              </a>
              <p className="mt-4 leading-7 text-text-secondary">
                Use o e-mail institucional para assuntos acadêmicos, parcerias,
                convites, patrocínio e dúvidas sobre os projetos.
              </p>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="border-b border-accent-blue/20 p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-purple/15 text-accent-purple">
                    <FiMapPin aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">
                      Localização
                    </h2>
                    <p className="text-sm text-text-secondary">UFC Sobral</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-72 bg-bg-primary p-5">
                <div className="absolute inset-0 bg-tech-grid bg-[length:32px_32px] opacity-60" />
                <div className="relative flex min-h-60 flex-col justify-end rounded-lg border border-accent-cyan/30 bg-gradient-to-br from-accent-blue/20 to-accent-purple/10 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-cyan">
                    campus sobral
                  </p>
                  <p className="mt-3 text-2xl font-bold text-text-primary">
                    Universidade Federal do Ceará
                  </p>
                  <p className="mt-2 text-text-secondary">
                    Sobral, Ceará, Brasil
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
