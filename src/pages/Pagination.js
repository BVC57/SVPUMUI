import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={2} style={{alignItems:"center", marginTop:"2%"}}>
      <Pagination count={3} variant="outlined" shape="rounded" sx={{
          '& .Mui-selected': {
            backgroundColor: '#1976d2 !important',
            color: 'white', 
            '&:hover': {
              backgroundColor: '#1976d2 !important', 
            },
          },
        '& .MuiPaginationItem-root:hover': {
          cursor: 'pointer',
        },
      }}
      />
    </Stack>
  );
}