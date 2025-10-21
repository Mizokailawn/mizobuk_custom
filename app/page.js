import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <Navbar />
  );
}

<header className="bg-black-900 text-neon-orange p-4 border-b-4 border-neon-orange flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-2">
        <link href="/"></link>
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="text-xl font-bold">MizoBuk</span>
      </div>
    </header>

    
  