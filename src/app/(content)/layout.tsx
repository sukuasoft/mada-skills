import { ModuleProvider } from "@/providers/module-provider";

type ContentLayoutProps = {
  children: React.ReactNode;
};
export default function ContentLayout({ children }: ContentLayoutProps) {

  return (
    <ModuleProvider>
    {children}
    </ModuleProvider>
  )
}
