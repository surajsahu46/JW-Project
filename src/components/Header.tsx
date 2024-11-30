import { Code } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="w-8 h-8 text-pink-200" />
          <span className="text-2xl font-bold text-white">JW</span>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full text-black font-medium hover:opacity-90 transition-opacity">
          Contact
        </button>
      </div>
    </header>
  );
}