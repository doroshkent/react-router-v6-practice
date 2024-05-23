import React from 'react';
import { useParams } from "react-router-dom";
import { Error404 } from "components/error/Error404";
import { Sneaker } from "common/types/sneaker";

type Props = {
  collection: Sneaker[]
}

export const Model = ({collection}: Props) => {
  console.log(collection)
  const params = useParams();
  const model = collection.find( item => item.id === params.id )
  console.log(params)
  console.log(model)

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
