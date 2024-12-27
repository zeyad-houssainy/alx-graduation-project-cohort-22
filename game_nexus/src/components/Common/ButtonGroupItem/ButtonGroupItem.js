import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function ButtonGroupItem({items}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        {items.map((item) => (
          <Button key={item.id}>{item}</Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default ButtonGroupItem