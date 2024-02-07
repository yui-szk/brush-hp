export function Header() {
  return (
    <div className="flex h-24 justify-between px-14 py-9">
      <p className="px-4 text-2xl">Brush</p>
      <li className="flex justify-end pl-4">
        <a className="mx-7" target="_self">
          About us
        </a>
        <a className="mx-7" target="_self">
          news
        </a>
        <a className="mx-7" target="_self">
          Members
        </a>
        <a className="mx-7" target="_self">
          Works
        </a>
        <a className="mx-7" target="_self">
          Contact
        </a>
      </li>
    </div>
  );
}
