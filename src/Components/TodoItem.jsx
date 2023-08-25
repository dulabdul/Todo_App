import {
  Box,
  Typography,
  Button,
  Grid,
  Checkbox,
  ListItemButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { useTodoContext } from '../Context/TodoContextProvider';

export default function TodoItem() {
  const {
    filteredTodos,
    handleCompletedTodo,
    setEditTodo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleEditTodo,
    editTodo,
  } = useTodoContext();
  return (
    <Grid
      sx={{ padding: 4 }}
      container
      columnGap={2}
      rowGap={1}
      justifyContent='center'>
      {filteredTodos.length === 0 ? (
        <Typography
          variant='h4'
          component='p'
          sx={{ color: '#fff' }}>
          Tidak ada todo tersedia
        </Typography>
      ) : (
        filteredTodos.map((todo) => {
          return (
            <Grid
              item
              xs={5}
              key={todo.id}
              sx={{
                backgroundColor: '#282B38',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '400px',
                transition: 'all 0.3s ease',
                paddingX: 1,
                paddingY: 1.5,
                '&:hover': {
                  backgroundColor: '#393d51',
                },
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant='p'
                  component='p'
                  sx={{ color: '#fff' }}>
                  {todo.title}
                </Typography>
                <ListItemButton onClick={() => handleCompletedTodo(todo.id)}>
                  <Checkbox checked={todo.completed} />
                </ListItemButton>
              </Box>
              {editTodo === todo ? (
                <Box sx={{ display: 'flex', columnGap: 1 }}>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={handleUpdateTodo}
                    sx={{ backgroundColor: '#E74C3D', marginLeft: '0 auto' }}>
                    Save
                  </Button>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => setEditTodo(null)}
                    sx={{ backgroundColor: 'orange', marginLeft: '0 auto' }}>
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', columnGap: 1 }}>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => handleDeleteTodo(todo.id)}
                    sx={{ backgroundColor: '#E74C3D', marginLeft: '0 auto' }}>
                    <DeleteIcon
                      sx={{
                        color: '#fff',
                        cursor: 'pointer',
                      }}
                    />
                  </Button>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => handleEditTodo(todo)}
                    sx={{ backgroundColor: 'orange', marginLeft: '0 auto' }}>
                    <EditIcon
                      sx={{
                        color: '#fff',
                        cursor: 'pointer',
                      }}
                    />
                  </Button>
                </Box>
              )}
            </Grid>
          );
        })
      )}
    </Grid>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.object,
  handleCompletedTodo: PropTypes.func,
  setEditTodo: PropTypes.any,
  handleDeleteTodo: PropTypes.func,
  handleUpdateTodo: PropTypes.func,
  handleEditTodo: PropTypes.func,
  editTodo: PropTypes.any,
};
