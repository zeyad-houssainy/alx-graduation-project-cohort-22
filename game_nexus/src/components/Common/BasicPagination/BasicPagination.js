import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function BasicPagination({pageCount}) {
  return (
    <Stack spacing={1}>
      <Pagination count={pageCount} />
    </Stack>
  );
}

