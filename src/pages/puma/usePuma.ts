import { Sneaker } from "common/types/sneaker";
import { v4 } from "uuid";
import pumaModel1 from "assets/images/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg";
import pumaModel2 from "assets/images/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg";
import pumaModel3 from "assets/images/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg";

const pumaId1 = v4()
const pumaId2 = v4()
const pumaId3 = v4()

export const usePuma = () => {
  const pumaCollection: Sneaker[] = [
    {
      id: pumaId1,
      model: 'PUMA ADIFOM TRXN',
      collection: 'new collection1',
      price: '100200$',
      picture: pumaModel1,

    },
    {
      id: pumaId2,
      model: 'PUMA ADIFOM SUPER',
      collection: 'new collection22',
      price: '200300$',
      picture: pumaModel2
    },
    {
      id: pumaId3,
      model: 'PUMA SUPER SUPERSKI',
      collection: 'new collection333',
      price: '300400$',
      picture: pumaModel3
    }
  ]

  return {pumaCollection}
}
