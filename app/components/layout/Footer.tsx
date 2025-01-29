import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0A0118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 text-center text-sm text-gray-400 flex items-center justify-center space-x-4">
          <p>© {new Date().getFullYear()} Blurware, LLC. All rights reserved.</p>
          <span className="text-gray-600">•</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
} 