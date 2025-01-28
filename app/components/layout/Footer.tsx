export default function Footer() {
  return (
    <footer className="bg-[#0A0118] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Blurware, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 