import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center"
      // style={{ backgroundImage: 'url("/nail.png")' }}
    >
      <h1 className="text-8xl font-bold text-white bg-opacity-50 p-4 rounded">
        {/* Welcome to the Nail Salon */}
      </h1>
      <Link href="./booking">
        <Button className="hover:bg-white hover:text-black bg-transparent rounded-sm h-15 p-5 text-4xl mt-10">
          Chat Right Now
        </Button>
      </Link>
    </main>
  );
}
