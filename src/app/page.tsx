import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <Footer />
    </div>
  );
}
