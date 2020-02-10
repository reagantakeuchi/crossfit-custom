import React from 'react';
import styled from 'styled-components';
import Auctus from './Assets/auctus-logo.svg';
import User from './Assets/user-icon.svg';

const NavBar = () => {

    return (
        <StyledNav className='nav'>
            <IconContainer>
                <StyledLogo src={Auctus}/>
            </IconContainer>
            <BodyContainer>
                <NavItem>M E M B E R S H I P S</NavItem>
                <NavItem>A B O U T</NavItem>
                <NavItem>C O N T A C T</NavItem>
                <NavItem>S C H E D U L E</NavItem>
            </BodyContainer>
            <LoginContainer>
                <NavItem style={{display: 'inline-flex'}}>
                    <LoginIcon src={User}/>
                    LOGIN
                </NavItem>
            </LoginContainer>
        </StyledNav>
    )
}

const LoginContainer = styled.div`
    display: inline-flex;
    width: 100px;
    align-content: center;
    border-left: solid;
    border-width: thin;
`

const IconContainer = styled.div`
    display: block;
    width: 200px;
`
const LoginIcon = styled.img `
    width: 25%;
    margin-right: 10px;
    margin-left: 20px;
`

const StyledLogo = styled.img`
    height: 100%;
    width: 100%;
    margin-top: 25px;
    stroke: #fff;

`

const StyledNav = styled.div`
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 90px;
    background: none;
    color: white;
    margin: 0px 45px 15px 45px;
    align-items: center;
`

const NavItem = styled.div`
    opacity: 50%;
    &:hover {
        opacity: 100%;
    } 
    margin-right: 45px;
`

const BodyContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: end;
`



    export default NavBar;