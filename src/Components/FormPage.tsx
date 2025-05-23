import React from 'react';

import { Background,
         Header,
         HeaderDiv,
         Input,
         InputDiv,
         Button,
         CardContent,
         CardDiv,


       } 
from './FormPageStyle.tsx'
import Logo from '../../public/Icons/Logo.svg'

export function FormPage () {

    // const [description, setDescription] = useState('')

    function handleNewTask(event: React.ChangeEvent<HTMLInputElement>): void {
        event.preventDefault()
        console.log(event?.target.value);
        
    }
    return (
        <Background>
            <Header>
            <InputDiv>
                <Input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTask}
                
                />
                <Button
                
                
                >Criar +</Button>
            </InputDiv>
                <HeaderDiv>
                    <img src={Logo}/>
                </HeaderDiv>

            </Header>
            <CardDiv>
                <CardContent>Tarefas</CardContent>
                <CardContent>Concluídas</CardContent>


            </CardDiv>
        </Background>
    )
}