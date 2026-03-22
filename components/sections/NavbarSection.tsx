import Link from "next/link";

export function NavbarSection() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-[#f82064] text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <p className="font-display text-2xl">x x</p>
        <nav className="flex items-center gap-2 text-sm font-semibold sm:gap-4">
          <Link href="#" className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/30">
            opcion 1
          </Link>
          <Link href="#" className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/30">
            opcion 2
          </Link>
          <Link href="#" className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/30">
            opcion 3
          </Link>
        </nav>
      </div>
    </header>
  );
}
