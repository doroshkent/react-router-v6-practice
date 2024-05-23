import { Sneaker } from "common/types/sneaker";
import { v4 } from "uuid";
import adidasModel1 from "assets/images/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasModel2 from "assets/images/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasModel3
  from "assets/images/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";

const adidasId1 = v4()
const adidasId2 = v4()
const adidasId3 = v4()

export const useAdidas = () => {
  const adidasCollection: Sneaker[] = [
    {
      id: adidasId1,
      model: 'ADIDAS ADIFOM TRXN',
      collection: 'new collection1',
      price: '100200$',
      picture: adidasModel1,

    },
    {
      id: adidasId2,
      model: 'ADIDAS ADIFOM SUPER',
      collection: 'new collection22',
      price: '200300$',
      picture: adidasModel2
    },
    {
      id: adidasId3,
      model: 'ADIDAS SUPER SUPERSKI',
      collection: 'new collection333',
      price: '300400$',
      picture: adidasModel3
    }
  ]

  return { adidasCollection }
}
