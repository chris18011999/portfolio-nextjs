import { FocusCards, type Card } from "@/components/ui/focus-cards";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chris Meurink | Projects",
};

export default function Projects() {
  const cards: Card[] = [
    {
      title: "Goossens",
      src: "/projects/goossens.png",
      url: "https://www.goossenswonen.nl",
      className: "bg-white",
    },
    {
      title: "Versalert",
      src: "/projects/versalert.png",
      url: "https://www.versalert.nl",
      className: "bg-white",
    },
    {
      title: "Bieze Food Group",
      src: "/projects/bfg.png",
      url: "https://www.biezefoodgroup.nl",
      className: "bg-white",
    },
    {
      title: "Van Gelder",
      src: "/projects/vangelder.png",
      url: "https://www.vangeldernederland.nl",
      className: "bg-white",
    },
  ];
  return (
    <main className="h-screen">
      <HeroHighlight
        containerClassName="overflow-hidden h-full py-32"
        className="align-start"
      >
        <h1 className="text-6xl text-center pb-32">My projects</h1>

        <div className="w-full">
          <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-12 md:gap-30">
            <FocusCards cards={cards}></FocusCards>
          </div>
        </div>
      </HeroHighlight>
    </main>
  );
}
