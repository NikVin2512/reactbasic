import React from 'react';
import styled from 'styled-components';
import logoImg from '../Img/logo.svg';
import userImg from '../Img/sign.svg';


const NavBarStyled = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  background-color: green;
  color: #FAF0E6;
`;

const Logo = styled.div `
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 40px;
`;
const ImgLogo = styled.img`
  margin-right: 15px;
`;
const UserLogo = styled.img`
  margin-right: 5px;
  height: 20px;
`;
const ButtonLogin = styled.button`
  display: flex;
  align-items:center;
  background-color: tomato;
  color: #FAF0E6;
  font-size: 20px;
  border: 2px solid #FAF0E6;
  border-radius: 10px;
  padding: 5px 5px;
  cursor: pointer;
`;

export const NavBar = () => (  
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="Logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    <ButtonLogin><UserLogo src={userImg}/>Войти</ButtonLogin>
  </NavBarStyled>
);