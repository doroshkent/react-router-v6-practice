import React from 'react';
import { Adidas } from "pages/adidas/Adidas";
import { Puma } from "pages/puma/Puma";
import { Abibas } from "pages/abibas/Abibas";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "components/error/Error404";
import { S } from "App_Styles";
import { Model } from "components/Model";

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  ERROR: '/page/error',
} as const;

function App() {
  return (
    <div>
      <S.Header><h1>HEADER</h1></S.Header>
      <S.Body>
        <S.Nav>
          <ul>
            <li><S.Link to={ PATH.ADIDAS }>Adidas</S.Link></li>
            <li><S.Link to={ PATH.PUMA }>Puma</S.Link></li>
            <li><S.Link to={ PATH.ABIBAS }>Abibas</S.Link></li>
          </ul>
        </S.Nav>
        <S.Content>
          <Routes>
            <Route path="/" element={ <Navigate to={ PATH.ADIDAS } /> } />
            <Route path={ PATH.ADIDAS } element={ <Adidas /> } />
            <Route path={ PATH.PUMA } element={ <Puma /> } />
            <Route path={ PATH.ABIBAS } element={ <Abibas /> } />
            <Route path={ PATH.ERROR } element={ <Error404 /> } />
            <Route path={ ':brand/:id' } element={ <Model/> } />
            <Route path="/*" element={ <Navigate to={ PATH.ERROR } /> } />
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2023</S.Footer>
    </div>
  );
}

export default App;
