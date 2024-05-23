import React from 'react';
import { useParams } from "react-router-dom";
import { Error404 } from "components/error/Error404";
import { Sneaker } from "common/types/sneaker";
import { useAdidas } from "pages/adidas/useAdidas";
import { usePuma } from "pages/puma/usePuma";

export const Model = () => {
  const { brand, id } = useParams();

  const collections: Record<string, Sneaker[]> = {
    adidas: useAdidas().adidasCollection,
    puma: usePuma().pumaCollection
  }

  let model

   if (brand) {
     model = collections[brand]?.find( item => item.id === id )
   }

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
