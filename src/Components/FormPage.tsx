import React, { useState } from 'react';

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
import { CardList } from './CardList.tsx';

export function FormPage () {

    const [task, setTask] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');



    function handleNewTask(event: React.ChangeEvent<HTMLInputElement>): void {
        const taskTarget = event.target.value;
        setNewTask(taskTarget)
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTask.trim() === ''){
            alert('Necessário digitar uma tarefa');
            return;
        } 

        setTask(prop => [...prop, newTask])
        setNewTask('')
    }
    
   
    return (
        <Background>
            
            <Header>
            <InputDiv onSubmit={handleSubmit}>
                <Input 
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTask}
                value={newTask}
                
                />
                <Button 
                type='submit'
                
                
                
                >Criar<FiPlusCircle size={20}/></Button>
            </InputDiv>
            
                <HeaderDiv>
                    <img src={Logo}/>
                </HeaderDiv>

            </Header>
            <Main>
                <StatusBar>
                    <StatusItem>
                        Tarefas criadas <span>{task.length === 0 ? 0 : task.length}</span>
                    </StatusItem>
                    <StatusItem>
                        Concluidas <span>0</span>
                    </StatusItem>
                </StatusBar>
                {task.length === 0 ? (
                    <EmptyState>
                        <BsClipboard size={56}/>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </EmptyState>
                ) : (
                    <CardList tasks={task} />
                )}

            </Main>


            
        </Background>
    )
}