import * as React from 'react';
import { Item } from '../models/character.model';

export default function MapComic(props) {
  const { comics } = props;

  return (
    <div>
      {comics.map((comic: Item, index: number) => (
        <li key={index}> {comic.name} </li>
      ))}
    </div>
  );
}
