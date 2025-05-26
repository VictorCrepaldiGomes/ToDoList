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
height: 12.5rem;
position: relative;


`

export const HeaderDiv = styled.div`
display: flex;
justify-content: center;
padding-top: 2.5rem;

`

export const Input = styled.input`
display: flex;
width: 50%;
background-color: ${Colors.gray500};
padding: 1rem;
border-radius: 8px;
border: none;
outline: none;
color: ${Colors.gray100};

`

export const InputDiv = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
position: relative;
top: 11rem;
bottom: 1.625rem;
`

export const Button = styled.button`
background-color: ${Colors.blueDark};
border: none;
padding: 1rem;
border-radius: 8px;
color: ${Colors.gray100};
cursor: pointer;
font-weight: bold;
display: flex;
align-items: center;
gap: 8px;

`

export const CardDiv = styled.div `
display: flex;
align-items: center;
justify-content: flex-start;
gap: 8rem;
`

export const CardContent = styled.div`

width: 30%;
position: relative;
transform: translateX(65%);


`


export const Main = styled.main`
max-width: 46rem;
margin: 5rem auto;
padding: 0 1rem;



`

export const StatusBar = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 1.5rem;


`
export const EmptyState = styled.div`
  border-top: 1px solid ${Colors.gray400};
  padding: 4rem 1.5rem;
  text-align: center;
  color: ${Colors.gray300};
  font-size: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;


`

export const StatusItem = styled.div`

display: flex;
justify-content: center;
gap: 8px;
font-weight: bold;
color: ${Colors.purple};
font-weight: bold;

span {
    background-color: ${Colors.gray400};
    padding: 2px 8px;
    border-radius: 100px;
    font-size: 0.75rem;
    color: ${Colors.gray200};
}

`


