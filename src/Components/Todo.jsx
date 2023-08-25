import { Box, Container } from '@mui/material';
import Title from './Title';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import SearchTodo from './SearchTodo';

export default function Todo() {
  return (
    <Box sx={{ backgroundColor: '#1A1B24', padding: 4 }}>
      <Container maxWidth='xl'>
        <Title />

        <AddTodo />
        <SearchTodo />

        <TodoItem />
      </Container>
    </Box>
  );
}
