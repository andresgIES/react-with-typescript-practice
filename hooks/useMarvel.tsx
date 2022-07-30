import { useState, useEffect } from 'react';
import { Result } from '../models/character.model';

export default function useMarvel(id: string) {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [character, setCharacter] = useState<Result[]>([]);

  const getAllChacters = () => {
    const url =
      'https://gateway.marvel.com:443/v1/public/characters?apikey=3de3aab2bd3785577125d62fd8940dfe&hash=c27df0548798891baae588f1111f2577&ts=1';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results));
  };

  const getOneChacter = (id: string) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=3de3aab2bd3785577125d62fd8940dfe&hash=c27df0548798891baae588f1111f2577&ts=1`;

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
    getAllChacters,
    getOneChacter,
  };
}
