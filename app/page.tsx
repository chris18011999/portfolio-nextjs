import { FlipWords } from "@/components/ui/flip-words";
import { HeroHighlight } from "@/components/ui/hero-highlight";
export default function Home() {
  const words = ["Chris", "a Front-end developer"];

  return (
    <main className="flex flex-col">
      <HeroHighlight containerClassName="overflow-hidden h-screen" className="max-w-screen-xl flex justify-center mx-auto">
        <div className="flex-1 flex items-center justify-between flex-col-reverse md:flex-row px-4 py-32 gap-12 md:gap-30">
          <div className="text-5xl flex-1 text-neutral-600 dark:text-neutral-400 w-[75%]">
            Nice to meet you!
            <br />
            I am
            <FlipWords className="text-6xl" duration={1000} words={words} />
          </div>
            <img
              className="block w-40 h-40 md:w-60 md:h-60 md:min-w-60 rounded-full border-4 border-red-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              src="/chris.png"
            ></img>
        </div>
      </HeroHighlight>
    </main>
  );
}
