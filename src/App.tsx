import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useScrollTop } from "./hooks/useScrollTop";

const Home = lazy(() => import("./pages/Home"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const Projetos = lazy(() => import("./pages/Projetos"));
const ExpoIoT = lazy(() => import("./pages/ExpoIoT"));
const Contato = lazy(() => import("./pages/Contato"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <main className="grid min-h-screen place-items-center pt-28">
      <div className="rounded-xl border border-accent-blue/20 bg-bg-card/80 px-6 py-5 font-mono text-sm text-accent-cyan shadow-glow">
        carregando rota...
      </div>
    </main>
  );
}

export function App() {
  useScrollTop();

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-text-primary">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/expoiot" element={<ExpoIoT />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/noticias" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
