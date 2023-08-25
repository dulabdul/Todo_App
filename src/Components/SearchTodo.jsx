import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useTodoContext } from '../Context/TodoContextProvider';

export default function SearchTodo() {
  const { searchQuery, setSearchQuery } = useTodoContext();

  return (
    <TextField
      label='Cari Todo'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
      margin='normal'
      InputProps={{
        style: { color: 'white' },
      }}
      InputLabelProps={{
        style: { color: '#fff' },
      }}
    />
  );
}

SearchTodo.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};
