import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex h-20 items-center justify-center bg-slate-400">
      <p className="">&copy; 2024 Brush</p>
      <Link href="https://www.instagram.com/brush_myu/" className="m-3">
        <Image
          src="/Instagram.svg"
          alt="Instagram icon"
          width={24}
          height={24}
        />
      </Link>
    </footer>
  );
}
