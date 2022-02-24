import React from 'react';
import { ITodos } from '../Types/Types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // width: '100%',
            // maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const Todos: React.FC<{
    todos: ITodos,
    toggleTodos: (id: number) => void,
    deleteTodos: (id: number) => void
}> = ({ todos, toggleTodos, deleteTodos }) => {
    const deleteTodo = (id: number) => {
        if (window.confirm(`Are you sure you want to delete todo?`)) {
            deleteTodos(id);
        }
    }

    const classes = useStyles();
    return (
        <Box sx={{ px: { xs: 5, md: 15 } }}>
            {todos.todos.length ? <Box sx={{ mx: 'auto' }}>
                {
                    <List className={classes.root}>
                        {todos.todos.map((todo) => {

                            return (
                                <>
                                    <ListItem key={todo.id} role={undefined} dense button onChange={() => toggleTodos(todo.id)}>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={todo.completed}
                                                tabIndex={-1}
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                            primary={
                                                <Typography variant="h6" component="h6">
                                                    {todo.title}
                                                </Typography>
                                            }
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => { deleteTodo(todo.id) }} edge="end" aria-label="comments">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider />
                                </>
                            );
                        })}
                    </List>
                }
            </Box>
                :
                <Typography variant="h5" component="h5" px={{ pb: 10 }}>
                    Your TODO list is empty
                </Typography>
            }
        </Box>
    );
};

export default Todos;