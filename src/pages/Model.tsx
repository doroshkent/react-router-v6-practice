import React from 'react';
import { useParams } from "react-router-dom";
import { adidasArr } from "pages/Adidas";
import { Error404 } from "pages/Error404";

type ModelPropsType = {
  modelTitle: string
  collectionTitle: string
  price: string
  img: string
}

export const Model = () => {
  const params = useParams();
  const model = adidasArr.find( item => item.id === params.id )
  return (
    <div>
      {
        model
          ? <div>
            { model.model }
            { model.collection }
            { model.price }
            <img src={ model.picture } alt={ model.model } />
          </div>
          : <Error404 />
      }
    </div>
  );
};
