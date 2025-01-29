export default function Footer() {
  return (
    <footer className="py-12 bg-[#0A0118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Blurware, LLC. All rights reserved.
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 