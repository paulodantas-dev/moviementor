import { Star } from "@phosphor-icons/react";

export const Card: React.FC = () => {
  return (
    <div>
      <header className="flex items-center justify-between gap-1">
        <span className="flex-1">Barbie</span>
        <div>
          <Star size={20} weight="fill" className=" text-amber-500" />
        </div>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};
