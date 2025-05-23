import styled from "styled-components";
import { Colors } from "../../public/Colors/Colors";

export const Background = styled.div`
background-color: ${Colors.gray600};
width: 100%;
min-height: 100vh;

`

export const Header = styled.header`
background-color: ${Colors.gray700};
width: 100%;
min-height: 12.5rem;


`

export const HeaderDiv = styled.div`
display: flex;
justify-content: center;
position: relative;
height: 4rem;

`

export const Input = styled.input`
width: 50%;
background-color: ${Colors.gray500};
padding: 1rem;
border-radius: 8px;
border: none;
outline: none;
color: ${Colors.gray100};

`

export const InputDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
position: relative;
top: 11rem;
left: center;

`

export const Button = styled.button`
background-color: ${Colors.blueDark};
border: none;
padding: 1rem;
border-radius: 8px;
color: ${Colors.gray100};
cursor: pointer;



`

export const CardDiv = styled.div `
display: flex;
margin-top: 5rem;
align-items: center;



`

export const CardContent = styled.div`
background-color: red;
color: ${Colors.purple};
width: 30%;
position: relative;
transform: translateX(65%);


`