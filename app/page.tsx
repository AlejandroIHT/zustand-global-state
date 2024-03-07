import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold pb-4">
        Welcome to new tasks tool
      </h1>
      <Button asChild>
        <Link href="/list">Go to tasks list</Link>
      </Button>
    </main>
  );
}
