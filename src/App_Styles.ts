import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  background-color: #000000;
  width: 100%;
  height: 100px;
  text-align: center;
  color: white;
`

const Body = styled.div`
  display: flex;
`

const Nav = styled.nav`
  background-color: white;
  min-height: 400px;
  width: 30%;
  color: #282c34;
  font-size: 30px;

  ul {
    list-style: none;
  }
`

const Link = styled( NavLink )`
  margin-left: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #1e3786;

  &.active {
    color: #03eaff;
  }

  &:hover {
    color: steelblue; /* Цвет ссылки */
  }
`

const Content = styled.div`
  background-color: #282c34;
  min-height: 400px;
  width: 70%;
  color: white;
  font-size: 30px;
`

const Footer = styled.footer`
  background-color: #000000;
  width: 100%;
  height: 120px;
  text-align: center;
  color: white;
`

export const S = {
  Header,
  Body,
  Nav,
  Link,
  Content,
  Footer
}
