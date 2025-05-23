import React from 'react';

import { Background,
         Header,
         HeaderDiv,
         Input,
         InputDiv,
         Button,
         Main,
         StatusBar,
         StatusItem,
         EmptyState,



       } 
from './FormPageStyle.tsx'
import Logo from '../../public/Icons/Logo.svg'
import { FiPlusCircle } from 'react-icons/fi'
import { BsClipboard } from 'react-icons/bs'

export function FormPage () {


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
                <Button>Criar<FiPlusCircle size={20}/></Button>
            </InputDiv>
                <HeaderDiv>
                    <img src={Logo}/>
                </HeaderDiv>

            </Header>
            <Main>
                <StatusBar>
                    <StatusItem>
                        Tarefas criadas <span>0</span>
                    </StatusItem>
                    <StatusItem>
                        Concluidas <span>0</span>
                    </StatusItem>
                </StatusBar>

                <EmptyState>
                    <BsClipboard size={56} color='#ffffff'/>
                    <strong>Voce ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </EmptyState>
            </Main>
            
            


            
        </Background>
    )
}