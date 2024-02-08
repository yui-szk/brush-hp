import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="max-w-none"></main>
      <Footer />
    </div>
  );
}
