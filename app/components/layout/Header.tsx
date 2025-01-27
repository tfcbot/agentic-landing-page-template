import Link from 'next/link';
import Logo from '../ui/Logo';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <Link href="/" className="text-white">
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
} 