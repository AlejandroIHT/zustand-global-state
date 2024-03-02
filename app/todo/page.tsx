"use client";

import useCharacters from "@/hooks/useCharacters";
import Link from "next/link";

const Todo = () => {
  const characters = useCharacters((state: any) => state.characters);

  return (
    <div>
      <h1>TODO List</h1>
      <Link href="/characters">Go Characters</Link>
      <ul>
        {characters &&
          characters.results.map((character: any) => (
            <li key={character.id}>{character.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
