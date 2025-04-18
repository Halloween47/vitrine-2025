import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function IntroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Landing Page
          </Typography>
          {/* <Typography gutterBottom variant="h4" component="div">
            3900€
          </Typography> */}
        </Stack>
        <Typography gutterBottom variant="h4" component="div">
            3900€
          </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Texte explicite
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Selection test
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="UI" size="small" />
          <Chip label="UX" size="small" />
          <Chip label="Prototype" size="small" />
        </Stack>
      </Box>
    </Card>
  );
}