import ChecklistIcon from '@mui/icons-material/Checklist';
import { Box, Typography } from '@mui/material';
export default function Title() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ChecklistIcon sx={{ fontSize: '2em', color: '#fff' }} />
      <Typography
        sx={{ color: '#fff' }}
        variant='h4'
        component='h1'>
        Todolist App
      </Typography>
    </Box>
  );
}
