import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, MessageCircle, Mail, Phone, Instagram, Heart, Leaf, ChefHat, Cake, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { DigitalMenu } from "@/components/DigitalMenu";
import tortas from "@/assets/tortas.jpg";
import cookies from "@/assets/cookies.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import box from "@/assets/box.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "catalogo", label: "Catálogo" },
  { id: "nosotros", label: "Sobre nosotros" },
  { id: "pedidos", label: "Pedidos" },
  { id: "contacto", label: "Contacto" },
];

const PRODUCTS = [
  { name: "Tortas", img: tortas },
  { name: "Cookies", img: cookies },
  { name: "Cheesecakes", img: cheesecake },
  { name: "Box Desayunos", img: box },
];

const FEATURES = [
  { Icon: Leaf, title: "Ingredientes", subtitle: "de calidad" },
  { Icon: Heart, title: "Hecho con", subtitle: "amor" },
  { Icon: ChefHat, title: "Recetas", subtitle: "artesanales" },
  { Icon: Cake, title: "Pedidos", subtitle: "personalizados" },
];

const WHATSAPP = "https://wa.me/5491112345678?text=Hola%20Luz%20Patisserie!%20Quiero%20hacer%20un%20pedido%20%F0%9F%92%95";

function Header() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom > 120) {
          setActive(n.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <Logo className="w-14 h-14 sm:w-16 sm:h-16" />
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`font-script text-xl transition-colors ${
                active === n.id ? "text-rose-deep" : "text-foreground/70 hover:text-rose-deep"
              }`}
            >
              {n.label}
              {active === n.id && <span className="block h-0.5 bg-rose-deep mt-0.5 mx-auto w-6" />}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-rose-deep text-white px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition shadow-sm"
        >
          <MessageCircle className="w-4 h-4" /> HACER UN PEDIDO
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-rose-deep"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-rose-deep" />
            <span className="block w-6 h-0.5 bg-rose-deep" />
            <span className="block w-6 h-0.5 bg-rose-deep" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 px-6 py-4 space-y-3">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block font-script text-2xl text-foreground/80 hover:text-rose-deep"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-deep text-white px-5 py-3 rounded-full text-sm mt-2"
          >
            <MessageCircle className="w-4 h-4" /> HACER UN PEDIDO
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-12 sm:pt-40 sm:pb-20 bg-[var(--rose-soft)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="flex justify-center mb-8">
            <Logo className="w-48 h-48 sm:w-64 sm:h-64 animate-float" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-rose-deep leading-tight">
            pastelería artesanal
            <br />
            hecha con amor <Heart className="inline w-8 h-8 -mt-2" strokeWidth={1.5} />
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#catalogo"
              className="bg-rose-deep text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition shadow-sm"
            >
              VER CATÁLOGO
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-rose-deep text-rose-deep px-8 py-3.5 rounded-full text-sm font-medium hover:bg-rose-deep hover:text-white transition"
            >
              <MessageCircle className="w-4 h-4" /> PEDIR POR WHATSAPP
            </a>
          </div>
        </Reveal>
        <a href="#catalogo" className="inline-block mt-10 text-rose-deep animate-bounce-soft" aria-label="Bajar">
          <ChevronDown className="w-7 h-7" />
        </a>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-10 wave-divider" />
    </section>
  );
}

function Catalog() {
  return (
    <section id="catalogo" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">Nuestras delicias</h2>
            <Heart className="w-5 h-5 mx-auto mt-3 text-rose-deep" fill="currentColor" />
            <p className="mt-3 text-muted-foreground">Hechas artesanalmente para endulzar tus mejores momentos.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="group bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-lg transition-all hover:-translate-y-1 duration-500">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-script text-2xl text-foreground">{p.name}</h3>
                  <a href="#menu" className="inline-flex items-center gap-1 mt-2 text-sm text-rose-deep hover:gap-2 transition-all">
                    Ver más <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="text-center mt-14">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-deep text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition"
            >
              VER CATÁLOGO COMPLETO
            </a>
          </div>
        </Reveal>
        <DigitalMenu />
      </div>
    </section>
  );
}

function BowOrnament() {
  return (
    <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-56 sm:h-56" aria-hidden="true">
      <g fill="none" stroke="var(--rose-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
        <path d="M100 50 C90 30, 65 30, 60 55 C56 75, 80 85, 100 80" />
        <path d="M100 50 C110 30, 135 30, 140 55 C144 75, 120 85, 100 80" />
        <path d="M100 80 L95 100 L105 100 Z" fill="var(--rose-deep)" stroke="none" opacity="0.5" />
        <path d="M95 100 C85 130, 75 145, 70 160" />
        <path d="M105 100 C115 130, 125 145, 130 160" />
        <path d="M100 30 C100 22, 95 18, 100 14 C105 18, 100 22, 100 30" fill="var(--rose-deep)" />
        <circle cx="40" cy="100" r="2" fill="var(--rose-deep)" />
        <circle cx="160" cy="120" r="2" fill="var(--rose-deep)" />
        <path d="M30 70 L34 70 M32 68 L32 72" />
        <path d="M170 80 L174 80 M172 78 L172 82" />
      </g>
    </svg>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="bg-[var(--rose-soft)]/60 rounded-3xl p-8 sm:p-12 md:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Heart className="w-5 h-5 text-rose-deep mb-3" fill="currentColor" />
              <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">Sobre nosotros</h2>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-md">
                En Luz Patisserie creemos en los detalles, las recetas caseras y los ingredientes de calidad.
                Cada creación está hecha con amor para acompañar momentos especiales.
              </p>
              <a
                href="#contacto"
                className="inline-block mt-8 bg-rose-deep text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition"
              >
                CONOCER MÁS
              </a>
            </div>
            <div className="flex justify-center">
              <BowOrnament />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div id={i === 2 ? "pedidos" : undefined} className="flex items-start gap-3">
                <f.Icon className="w-9 h-9 text-rose-deep shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="text-foreground font-medium leading-tight">{f.title}</p>
                  <p className="text-foreground leading-tight">{f.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-rose-deep text-white">
      <div className="wave-divider h-10 -mt-px [transform:scaleY(-1)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <Logo className="w-24 h-24" variant="outline" />
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-4">NAVEGACIÓN</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-white transition">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-4">CONTACTO</h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 11 1234 5678</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> luzpatisserie@gmail.com</li>
            <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> @luz.patisserie</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-4">SUSCRIBITE</h4>
          <p className="text-sm text-white/90 mb-4">Recibí promociones y novedades exclusivas.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded-full p-1 pl-4">
            <input
              type="email"
              required
              placeholder="Tu email"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2"
            />
            <button type="submit" className="bg-rose-deep text-white p-2.5 rounded-full hover:opacity-90 transition" aria-label="Suscribirse">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-xs text-white/80">
        © {new Date().getFullYear()} Luz Patisserie. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
      </main>
      <Footer />
    </div>
  );
}
