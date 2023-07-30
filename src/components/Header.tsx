import { Lightning } from "@phosphor-icons/react";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1>Title</h1>

      <button
        type="button"
        className="flex items-center gap-2 rounded px-4 py-2 text-sm bg-buttom-gradient hover:brightness-125 transition-all"
      >
        New mentorship
        <Lightning size={24} className="p-1 shadow rounded-full" />
      </button>
    </div>
  );
};
