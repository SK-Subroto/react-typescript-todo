import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';

const AddTodo = ({ addTodos }: { addTodos: (text: string) => void }) => {
    const [todo, setTodo] = React.useState<string>("");
    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!todo) {
            alert("Please enter a todo");
        } else {
            addTodos(todo);
            setTodo("");
        }
    };
    return (
        <Box sx={{ py: 5 }}>
            <form noValidate autoComplete="off">
                <TextField
                    onChange={e => { setTodo(e.target.value) }}
                    id="outlined-basic" label="Type TODO"
                    value={todo}
                    variant="outlined" />

                {/* <IconButton onClick={submit} aria-label="delete">
                    <AddIcon fontSize="large" />
                </IconButton> */}

                <Button onClick={submit} variant="contained" color="primary" size='large'>
                    <AddIcon fontSize="large" />
                </Button>
            </form>
            {/* <form>
                <input
                    onChange={e => { setTodo(e.target.value) }} />
                <button onClick={submit}>Add</button>
            </form> */}
        </Box>
    );
};

export default AddTodo;