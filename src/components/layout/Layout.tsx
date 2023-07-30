import { Header } from "..";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-3xl w-full flex flex-col justify-center items-center text-gray-100 bg-gray-800 rounded-2xl border-8 shadow-xl border-purple-500 gap-9 py-16 px-24">
      <Header />
      {children}
    </div>
  );
};
