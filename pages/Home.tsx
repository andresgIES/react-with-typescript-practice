import * as React from 'react';
import { Link } from 'react-router-dom';
import useMarvel from '../hooks/useMarvel';

export default function Home() {
  const { characters } = useMarvel();
  return (
    <div>
      <h1>hola home</h1>
      <Link to="/detail/123">detalles</Link>
    </div>
  );
}
