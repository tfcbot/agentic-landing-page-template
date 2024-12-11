import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0118] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 