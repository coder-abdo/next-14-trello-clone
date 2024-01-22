import { Jumbotron } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Jumbotron />
      <h1 className="text-3xl md:text-6xl capitalize mt-6 font-bold text-center">
        taskify helps team move
      </h1>
      <h2 className="w-fit px-4 shadow-md text-3xl md:text-6xl text-white bg-gradient-to-r from-fuchsia-600 to-pink-500 mt-6 py-2 rounded">
        work forward
      </h2>
      <p className="text-sm mt-6 md:text-xl text-neutral-400 text-center">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </p>
      <Button asChild className="mt-6 capitalize" size="lg">
        <Link href="/sign-up">get taskify for free</Link>
      </Button>
    </main>
  );
}
