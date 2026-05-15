import { useMemo, useState } from "react";
import { Search, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import tortas from "@/assets/tortas.jpg";
import cookies from "@/assets/cookies.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import box from "@/assets/box.jpg";

const WHATSAPP = "https://wa.me/5491112345678?text=Hola%20Luz%20Patisserie!%20Quiero%20pedir%3A%20";

type Category = "Todos" | "Tortas" | "Cookies" | "Cuadrados" | "Postres" | "Salados" | "Bebidas" | "Promos";

const CATEGORIES: Category[] = ["Todos", "Tortas", "Cookies", "Cuadrados", "Postres", "Salados", "Bebidas", "Promos"];

type Item = {
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, "Todos">;
  img: string;
};

const ITEMS: Item[] = [
  { name: "Torta de Frutillas", description: "Bizcocho esponjoso con crema y frutillas frescas.", price: 8500, category: "Tortas", img: tortas },
  { name: "Torta Red Velvet", description: "Clásica receta con frosting de queso crema.", price: 9200, category: "Tortas", img: tortas },
  { name: "Cookies de Chocolate", description: "Chips de chocolate semiamargo, blanditas por dentro.", price: 1800, category: "Cookies", img: cookies },
  { name: "Cookies de Avena", description: "Avena, miel y pasas. Saludables y deliciosas.", price: 1600, category: "Cookies", img: cookies },
  { name: "Cuadrado de Brownie", description: "Intenso chocolate con nueces tostadas.", price: 1500, category: "Cuadrados", img: cookies },
  { name: "Cuadrado de Limón", description: "Base crocante y crema cítrica suave.", price: 1400, category: "Cuadrados", img: box },
  { name: "Cheesecake de Frutos Rojos", description: "Cremoso, con coulis casero de frutos rojos.", price: 3200, category: "Postres", img: cheesecake },
  { name: "Mousse de Chocolate", description: "Aireada y untuosa, terminada con cacao.", price: 2800, category: "Postres", img: cheesecake },
  { name: "Sándwich de Miga", description: "Triples de jamón y queso, pan fresco.", price: 1200, category: "Salados", img: box },
  { name: "Quiche de Verduras", description: "Masa quebrada y relleno cremoso de verduras.", price: 2400, category: "Salados", img: box },
  { name: "Limonada de Jengibre", description: "Refrescante, con un toque picante natural.", price: 1500, category: "Bebidas", img: box },
  { name: "Café Latte", description: "Espresso suave con leche cremosa.", price: 1300, category: "Bebidas", img: cookies },
  { name: "Box Desayuno x2", description: "Para compartir: jugo, café, medialunas y tarta.", price: 9800, category: "Promos", img: box },
  { name: "Promo Cumpleaños", description: "Torta + 12 cookies + bebidas. Ideal para festejar.", price: 14500, category: "Promos", img: tortas },
];

const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);

export function DigitalMenu() {
  const [active, setActive] = useState<Category>("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS.filter((it) => {
      const inCat = active === "Todos" || it.category === active;
      const inQ = !q || it.name.toLowerCase().includes(q) || it.description.toLowerCase().includes(q);
      return inCat && inQ;
    });
  }, [active, query]);

  return (
    <div id="menu" className="mt-20 scroll-mt-24">
      <Reveal>
        <div className="text-center mb-8">
          <h3 className="font-script text-3xl sm:text-4xl text-rose-deep">Menú digital</h3>
          <p className="mt-2 text-muted-foreground text-sm">Explorá nuestra carta y pedí en un click.</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-deep/70" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full pl-11 pr-5 py-3 rounded-full bg-[var(--rose-soft)]/60 border border-rose-deep/15 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-rose-deep/40 transition"
          />
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-rose-deep text-white shadow-sm"
                    : "bg-[var(--rose-soft)]/60 text-rose-deep hover:bg-[var(--rose-soft)]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {filtered.map((it, i) => (
          <Reveal key={`${it.category}-${it.name}`} delay={(i % 8) * 70}>
            <article className="group h-full flex flex-col bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="font-script text-2xl text-foreground leading-tight">{it.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground flex-1">{it.description}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-rose-deep font-semibold">{formatPrice(it.price)}</span>
                  <a
                    href={`${WHATSAPP}${encodeURIComponent(it.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[var(--rose-soft)] text-rose-deep px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-deep hover:text-white transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Pedir
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground py-10">
            No encontramos productos para tu búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
