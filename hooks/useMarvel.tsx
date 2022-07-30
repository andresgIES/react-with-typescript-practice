import { useState, useEffect } from 'react';
import { Result } from '../models/character.model';

const endpoint = 'https://gateway.marvel.com:443/v1/public/characters';
const apikey = 'apikey=3de3aab2bd3785577125d62fd8940dfe';
const hash = 'hash=c27df0548798891baae588f1111f2577';
const ts = 'ts=1';

export default function useMarvel(id?: string) {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [character, setCharacter] = useState<Result[]>([]);

  const getAllChacters = () => {
    const url = `${endpoint}?${apikey}&${hash}&${ts}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results));
  };

  const getOneChacter = (id: string) => {
    const url = `${endpoint}/${id}?&${apikey}&${hash}&${ts}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacter(data.data.results));
  };

  useEffect(() => {
    getAllChacters();
  }, []);

  useEffect(() => {
    getOneChacter(id);
  }, []);

  return {
    character,
    characters,
  };
}
