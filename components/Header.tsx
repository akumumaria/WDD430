import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-nav py-4 sticky top-0 z-50">
      <div className="container-main flex-between">
        <div className="header-title">Akumu Maria Paris</div>
        <nav>
          <ul className="flex gap-2">
            <li><Link href="/" className="nav-link-white">Home</Link></li>
            <li><Link href="/about" className="nav-link-white">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
