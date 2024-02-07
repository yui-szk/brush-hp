import Link from "next/link";

export function Header() {
  const values = [
    { name: "About us", href: "/" },
    { name: "News", href: "/" },
    { name: "Member", href: "/" },
    { name: "Works", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <header className="flex h-24 items-center justify-between bg-slate-300 px-14 py-9">
      <Link href="/" className="cursor-pointer px-2 text-2xl">
        Brush
      </Link>
      <input
        id="menu-button"
        type="checkbox"
        className="peer fixed right-1 top-0 z-10 h-16 w-16 cursor-pointer appearance-none before:absolute before:right-5 before:top-8 before:block before:h-0.5 before:w-6 before:-translate-y-1 before:bg-black before:duration-300 after:absolute after:right-5 after:top-8 after:block after:h-0.5 after:w-6 after:translate-y-1 after:bg-black after:duration-300 checked:before:translate-y-0 checked:before:rotate-45 checked:after:translate-y-0 checked:after:-rotate-45 lg:left-6 lg:hidden"
      />
      <nav>
        <ul className="flex justify-end pl-4">
          {values.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="mx-7 cursor-pointer" target="_self">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
