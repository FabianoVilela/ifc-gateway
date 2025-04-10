import { Card } from "@/components/ui/primitives/card";
import Header from "./components/header";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-4">
          <Card>
            {children}
          </Card>
        </div>
      </div>
    </>
  );
} 