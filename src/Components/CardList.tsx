import {
        Background,


} from './CardListStyle.tsx'

interface CardListProps {
    task: string[];
    tasks: string[]
}

export function CardList({ tasks }: CardListProps) {
    return (
        <Background>
            {tasks.map((task, index) => (
                <div key={index}>
                    {task}
                </div>
            ))}
        </Background>
    )
}