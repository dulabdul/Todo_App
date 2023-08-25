import { Box, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import { useTodoContext } from '../Context/TodoContextProvider';

export default function AddTodo() {
  const {
    editTodo,
    handleAddTodo,
    handleUpdateTodo,
    newTodo,
    setNewTodo,
    setEditTodo,
  } = useTodoContext();
  return (
    <Box sx={{ display: 'flex', paddingTop: 5 }}>
      <TextField
        label='Add New Todo'
        variant='outlined'
        type='text'
        value={newTodo}
        size='small'
        onChange={(e) => setNewTodo(e.target.value)}
        InputProps={{
          style: { backgroundColor: '#f0f0f0' },
        }}
        InputLabelProps={{
          style: { color: 'black' },
        }}
      />
      {editTodo ? (
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
        <Button
          onClick={handleAddTodo}
          variant='contained'
          sx={{ backgroundColor: '#8E48E9' }}>
          <AddIcon
            sx={{
              fontSize: '2em',
              color: '#fff',
              cursor: 'pointer',
            }}
          />
        </Button>
      )}
    </Box>
  );
}

AddTodo.propTypes = {
  editTodo: PropTypes.func,
  handleAddTodo: PropTypes.func,
  handleUpdateTodo: PropTypes.func,
  newTodo: PropTypes.string,
  setNewTodo: PropTypes.any,
  setEditTodo: PropTypes.any,
};
