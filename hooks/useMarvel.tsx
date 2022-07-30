import { useState, useEffect } from 'react';
import { ICharacter } from '../models/character.model';

export default function useMarvel() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const getAllChacters = () => {
    //implement fecth
  };

  const getOneChacter = () => {
    //implement fecth
  };

  useEffect(() => {
    getAllChacters();
  }, []);

  return {
    getAllChacters,
    getOneChacter,
    characters,
  };
}
