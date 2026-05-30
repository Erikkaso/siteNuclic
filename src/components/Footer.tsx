import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoNuclic from "../assets/images/logo-nuclic.svg";

const footerLinks = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Projetos", to: "/projetos" },
  { label: "ExpoIoT", to: "/expoiot" },
  { label: "Contato", to: "/contato" },
];

export function Footer() {
  return (
    <footer className="mt-4 border-t border-white/60 bg-white/30 backdrop-blur">
      <div className="page-shell py-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoNuclic} alt="NUCLIC" className="h-14 w-auto" />
              <div>
                <p className="text-lg font-normal text-[#006b83]">
                  NUCLIC
                </p>
                <p className="text-sm text-[#004f63]">
                  Menos palestra bonita, mais projeto funcionando.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#004f63]">
              Núcleo de Sistemas de Computação da UFC Sobral, dedicado a IoT,
              IA, cloud, robótica, sistemas embarcados, automação e inovação
              prática.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-normal uppercase tracking-[0.18em] text-[#006b83]">
              Links
            </h2>
            <nav className="mt-4 grid gap-3" aria-label="Links do rodapé">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="focus-ring rounded text-sm text-[#004f63] transition hover:text-[#006b83]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                className="focus-ring rounded text-sm text-[#004f63] transition hover:text-[#006b83]"
                href="https://sobral.ufc.br/"
                rel="noreferrer"
                target="_blank"
              >
                Site UFC Sobral
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-normal uppercase tracking-[0.18em] text-[#006b83]">
              Contato
            </h2>
            <a
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded text-sm text-[#004f63] transition hover:text-[#006b83]"
              href="mailto:nuclic@sobral.ufc.br"
            >
              <FiMail aria-hidden="true" />
              nuclic@sobral.ufc.br
            </a>
            <div className="mt-5 flex gap-3">
              <a
                className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/70 bg-white/25 text-[#006b83] transition hover:bg-white/40"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub do NUCLIC"
              >
                <FiGithub aria-hidden="true" />
              </a>
              <a
                className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/70 bg-white/25 text-[#006b83] transition hover:bg-white/40"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do NUCLIC"
              >
                <FiInstagram aria-hidden="true" />
              </a>
              <a
                className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/70 bg-white/25 text-[#006b83] transition hover:bg-white/40"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn do NUCLIC"
              >
                <FiLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/60 pt-5 text-sm text-[#004f63]">
          Copyright © NUCLIC - UFC Sobral
        </div>
      </div>
    </footer>
  );
}
