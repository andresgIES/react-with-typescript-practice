import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useMarvel from '../hooks/useMarvel';

export default function Detail() {
  let params = useParams();
  let navigate = useNavigate();
  const { character } = useMarvel(params.id);
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p onClick={goBack}> atras</p>

      <h1>
        {' '}
        {character
          ? character.map((c) => (
              <div key={c.id}>
                <p> {c.name} </p>
                <p> {c.description ? c.description : 'Sin descripcion'} </p>
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
