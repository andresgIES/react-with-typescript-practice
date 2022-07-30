import * as React from 'react';
import { Link } from 'react-router-dom';
import useMarvel from '../hooks/useMarvel';

export default function Home() {
  const { characters } = useMarvel();
  return (
    <div>
      <h1>hola home</h1>

      {characters.map((c) => (
        <Link key={c.id} to={'/detail/' + c.id}>
          <h1> {c.name} </h1>
        </Link>
      ))}
    </div>
  );
}
