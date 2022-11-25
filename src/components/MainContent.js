import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Statistics from './Statistics';
import SalesDistribution from './SalesDistribution';
import ProfileInfo from './ProfileInfo';
import ReferredTable from './ReferredTable';
import ProductVideo from './ProductVideo';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MainContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
          <Statistics/>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
          <SalesDistribution/>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
          <ProfileInfo/>
          </Item>
        </Grid>
        <Grid item xs={12} md={8} sm={8}>
          <Item>
         <ReferredTable/>
          </Item>
        </Grid>
        <Grid item xs={12} md={4} sm={4}>
          <Item>
          <ProductVideo/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
