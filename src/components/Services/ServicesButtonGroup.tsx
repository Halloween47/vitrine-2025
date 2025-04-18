import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <div>
      <ButtonGroup variant="contained" aria-label="Small button group" size="small">
        <Button>Site vitrine</Button>
        <Button>Prototype</Button>
      </ButtonGroup>
  </div>
  );
}