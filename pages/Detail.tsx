import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Detail() {
  let params = useParams();
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p onClick={goBack}> atras</p>
      <h1>hola detail {params.id} </h1>
    </div>
  );
}
