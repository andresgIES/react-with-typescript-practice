import * as React from 'react';
import { useParams } from 'react-router-dom';
import useMarvel from '../hooks/useMarvel';
import useNavigation from '../hooks/useNavigation';
import MapComic from '../_common/MapComic';

export default function Detail() {
  let params = useParams();
  const { character } = useMarvel(params.id);
  const { goBack } = useNavigation();

  return (
    <div>
      <button onClick={goBack}> atras</button>

      <h1>
        {' '}
        {character
          ? character.map((c) => (
              <div key={c.id}>
                <p> {c.name} </p>
                <p> {c.description ? c.description : 'Sin descripcion'} </p>
                <p>
                  {'COMICS: '}
                  <MapComic comics={c.comics.items} />
                </p>
                <img
                  width="300px"
                  src={`${c.thumbnail.path}.${c.thumbnail.extension}`}
                  alt="imagen"
                />
              </div>
            ))
          : 'NO hay datos'}{' '}
      </h1>
    </div>
  );
}
