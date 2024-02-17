import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto flex h-20 items-center justify-center bg-slate-400">
      <p>&copy; 2024 Brush</p>
      <Link href="https://www.instagram.com/brush_myu/">
        <Image
          className="m-3"
          src="/Instagram.svg"
          alt="Instagram icon"
          width={28}
          height={28}
        />
      </Link>
    </footer>
  );
}
