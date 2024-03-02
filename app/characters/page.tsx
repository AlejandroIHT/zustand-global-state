"use client";

import { useEffect } from "react";
import useCharacters from "@/hooks/useCharacters";
import Link from "next/link";

const Characters = () => {
  const { characters, updateCharacters } = useCharacters((state: any) => state);

  useEffect(() => {
    if (!characters) {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => updateCharacters(data));
    }
  }, [characters, updateCharacters]);

  return (
    <h1>
      Characters
      <Link href="/todo">Go TODO</Link>
    </h1>
  );
};

export default Characters;
