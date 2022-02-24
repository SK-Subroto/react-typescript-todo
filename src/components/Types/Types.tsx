export type ITodo = {
    id: number;
    title: string;
    completed: boolean;
}

export type ITodos = {
    todos: ITodo[],
}