import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-auto flex h-20 items-center justify-center bg-slate-400">
      <p>&copy; 2024 Brush</p>
      <Image
        className="m-3"
        src="/Instagram.svg"
        alt="Instagram icon"
        width={28}
        height={28}
      />
    </footer>
  );
}
